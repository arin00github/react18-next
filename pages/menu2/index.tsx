import { GetStaticProps, InferGetStaticPropsType } from "next";

const Menu2Index = ({
  personInfo,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  console.log("personInfo", personInfo);
  return (
    <div>
      menu 02
      <div>name</div>
    </div>
  );
};

export const getStaticProps: GetStaticProps<{
  personInfo: { name: string };
}> = async (context) => {
  console.log("context", context);

  const res = await fetch(`${process.env.BASE_URL}/api/menu2`);

  const personInfo = await res.json();

  return {
    props: {
      personInfo,
    },
  };
};

export default Menu2Index;
