import axios from "axios";
import { GetStaticProps, InferGetStaticPropsType } from "next";

const Menu1Index = ({
  personInfo,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  console.log("personInfo", personInfo);
  return (
    <div>
      menu 01
      <div>name</div>
    </div>
  );
};

export const getStaticProps: GetStaticProps<{
  personInfo: { name: string };
}> = async (context) => {
  console.log("context", context);

  const res = await fetch(`${process.env.BASE_URL}/api/menu1`);

  const personInfo = await res.json();

  return {
    props: {
      personInfo,
    },
  };
};

export default Menu1Index;
