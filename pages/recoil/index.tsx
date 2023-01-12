import React from "react";
import { atom } from "recoil";
import { CharacterCounter } from "../../src/component/CaractorCounter";
import { PageTitle } from "../../src/layout/PageTitle";

const textState = atom({
  key: "textState", // unique ID (with respect to other atoms/selectors)
  default: "", // default value (aka initial value)
});

const ReocoilIndexPage = () => {
  return (
    <div>
      <div>
        <PageTitle>Recoil</PageTitle>
        <CharacterCounter />
      </div>
    </div>
  );
};

export default ReocoilIndexPage;
