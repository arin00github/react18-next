import React, { useEffect } from "react";
import { atom, selector, useRecoilState, useRecoilValue } from "recoil";
import { charCountState, textState } from "../recoil/text.coil";

export function CharacterCounter() {
  return (
    <div>
      <TextInput />
      <CharacterCount />
    </div>
  );
}

const TextInput = (): JSX.Element => {
  const [text, setText] = useRecoilState(textState); //안에 atom을 넣음

  const onChange = (event: any) => {
    setText(event.target.value);
  };

  useEffect(() => {
    console.log("useEffect input");
  }, []);

  return (
    <div>
      <input className="h-8" type="text" value={text} onChange={onChange} />
      <br />
      Charactor: {text}
    </div>
  );
};

function CharacterCount() {
  const count = useRecoilValue(charCountState); //안에 selector를 불러오기

  return <>Character Count: {count}</>;
}
