import axios from "axios";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import { MutiForm } from "../../src/component/mutiform/MutilForm";
import { ToggleComponent } from "../../src/component/Toggle";
import { useLocalStorage } from "../../src/hook/useLocalStorage";
import { PageTitle } from "../../src/layout/PageTitle";

const CustomIndex = ({
  personInfo,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  console.log("personInfo", personInfo);

  const [state, setState] = useLocalStorage("test", 1000);

  return (
    <div>
      <PageTitle>Custom Hook</PageTitle>
      <div className="mb-10">
        <ToggleComponent />
      </div>
      <div>{/* <TimeoutComponent /> */}</div>
      <div>
        <h2 className="text-xl">useMultiForm</h2>
        <MutiForm />
      </div>
      <div className="mt-10">
        <h2 className="text-xl">useLocalStarage</h2>
        <h4>value: {state}</h4>
        <button
          className="btn"
          onClick={() => setState(Math.floor(Math.random() * 10000))}
        >
          Change State in LocalStorage
        </button>
      </div>
    </div>
  );
};

export const getStaticProps: GetStaticProps<{
  personInfo: { name: string };
}> = async (context) => {
  const res = await fetch(`${process.env.BASE_URL}/api/custom`);

  const personInfo = await res.json();

  return {
    props: {
      personInfo,
    },
  };
};

export default CustomIndex;
