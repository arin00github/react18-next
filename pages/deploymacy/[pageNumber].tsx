import React, { useEffect } from "react";
import axios from "axios";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { useRouter } from "next/router";
import { CustomTable, Pagination } from "../../src/component/table";
import { IDeplomacyList, IResultCode } from "../../types/deplomacy-interface";
import { ITableColumn } from "../../types/table-inteface";
import usePagination from "../../src/hook/usePagination";
import { PageTitle } from "../../src/layout/PageTitle";

const countryColumns: ITableColumn<IDeplomacyList>[] = [
  { access: "country_nm", header: "국가명", sortable: false, width: "10%" },
  {
    access: "country_eng_nm",
    header: "영문명",
    sortable: false,
    width: "10%",
    cell: (value) => `${value.country_eng_nm} (${value.country_iso_alp2})`,
  },
  {
    access: "export_amount",
    header: "수출액",
    sortable: false,
    width: "20%",
  },
  { access: "import_amount", header: "수입", sortable: false, width: "20%" },
  {
    access: "diplomatic_relations",
    header: "수교",
    sortable: false,
    width: "40%",
  },
];

const Menu1Index = ({
  list,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const router = useRouter();

  const { currentIndex, updatePagination, pageIndexArray } = usePagination();

  useEffect(() => {
    //updateCurrentIndex(Number(router.query.pageNumber));
    updatePagination(list.totalCount, Number(router.query.pageNumber));
  }, [router.query.pageNumber, list.totalCount, updatePagination]);

  return (
    <div>
      <PageTitle>Deplomatic Table Data</PageTitle>
      <CustomTable
        columns={countryColumns}
        data={list.data}
        aria_title="deplomacy"
        handleSort={() => {
          console.log("handleSort");
        }}
      />
      {pageIndexArray && (
        <Pagination
          currentIndex={currentIndex}
          totalDataLength={list.totalCount}
          indexArray={pageIndexArray}
          goToPrev={(pageNumber) => {
            router.push(
              "/deploymacy/[pageNumber]",
              `/deploymacy/${pageNumber}`
            );
          }}
          goToBack={() => {
            router.push(
              "/deploymacy/[pageNumber]",
              `/deploymacy/${Math.ceil(list.totalCount / 10)}`
            );
          }}
          goToFront={() => {
            router.push("/deploymacy/[pageNumber]", `/deploymacy/${1}`);
          }}
          goToNext={(pageNumber) =>
            router.push("/deploymacy/[pageNumber]", `/deploymacy/${pageNumber}`)
          }
          onClickIndex={(pageNumber) =>
            router.push("/deploymacy/[pageNumber]", `/deploymacy/${pageNumber}`)
          }
        />
      )}
    </div>
  );
};

export const getServerSideProps: GetServerSideProps<{
  list: IResultCode<IDeplomacyList>;
}> = async (context) => {
  const { pageNumber }: any = context.params;

  const res = await axios.get<IResultCode<IDeplomacyList>>(
    `${process.env.BASE_URL}/api/deploymacy/${pageNumber}`,
    {
      params: { pageNumber: pageNumber },
    }
  );

  const list = await res.data;

  return {
    props: {
      list,
    },
  };
};

export default Menu1Index;
