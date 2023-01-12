import { GetStaticProps, InferGetStaticPropsType } from "next";
import React from "react";
import { PageTitle } from "../../src/layout/PageTitle";
import { useAppSelector, wrapper } from "../../src/redux/store";

const SubJectIndex = ({
  reduxBox,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const subjectRedux = useAppSelector((state) => state.subject);

  return (
    <div>
      <div>
        <PageTitle>Subject Redux</PageTitle>
        <div>
          <h2>from getStaticProps: {reduxBox.title}</h2>
        </div>
        <div>
          <h2>{subjectRedux.title}</h2>
        </div>
      </div>
    </div>
  );
};

export const getStaticProps: GetStaticProps<{ reduxBox: { title: string } }> =
  wrapper.getStaticProps((store) => () => {
    console.log("2. Page.getStaticProps uses the store to dispatch things");
    console.log("store", store);
    const read = store.getState();
    console.log("read", read.subject);
    //   store.dispatch({
    //     type: "TICK",
    //     payload: "was set in other page ",
    //   });

    return {
      props: {
        reduxBox: read.subject,
      },
    };
  });

export default SubJectIndex;
