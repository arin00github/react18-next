import React from "react";
import { atom } from "recoil";
import { CharacterCounter } from "../../src/component/CaractorCounter";

const textState = atom({
  key: "textState", // unique ID (with respect to other atoms/selectors)
  default: "", // default value (aka initial value)
});

const ReocoilIndexPage = () => {
  return (
    <div>
      <div>
        <h1 className="text-xl mb-2">Recoil</h1>
        <CharacterCounter />
      </div>
    </div>
  );
};

export default ReocoilIndexPage;
