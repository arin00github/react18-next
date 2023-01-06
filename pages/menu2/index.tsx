import { GetStaticProps, InferGetStaticPropsType } from "next";
import TimeoutComponent from "../../src/component/TimeoutComponent";
import { ToggleComponent } from "../../src/component/Toggle";

const Menu2Index = ({
  personInfo,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  console.log("personInfo", personInfo);
  return (
    <div>
      <h1>custom hook</h1>
      <div className="mb-10">
        <ToggleComponent />
      </div>
      <div>
        <TimeoutComponent />
      </div>
    </div>
  );
};

export const getStaticProps: GetStaticProps<{
  personInfo: { name: string };
}> = async (context) => {
  const res = await fetch(`${process.env.BASE_URL}/api/menu2`);

  const personInfo = await res.json();

  return {
    props: {
      personInfo,
    },
  };
};

export default Menu2Index;
