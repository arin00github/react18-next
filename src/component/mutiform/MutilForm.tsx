import React, { FormEvent, useState } from "react";
import { useMultiForm } from "../../hook/useMutiForm";
import { Baseform } from "./BaseForm";
import { Contectform } from "./ContectForm";
import { Profileform } from "./ProfileForm";

type FormData = {
  firstName: string;
  lastName: string;
  userId: string;
  userGroup: string;
  email: string;
  phone: string;
};

const Initial_Data: FormData = {
  firstName: "",
  lastName: "",
  userId: "",
  userGroup: "",
  email: "",
  phone: "",
};

export const MutiForm = () => {
  const [data, setData] = useState(Initial_Data);

  const updateFields = (field: Partial<FormData>) => {
    setData((prev) => {
      return { ...prev, ...field };
    });
  };

  const { steps, currentStepIndex, step, isFirstStep, next, back, isLastStep } =
    useMultiForm([
      <Profileform key="profile" {...data} updateFields={updateFields} />,
      <Baseform key="base" {...data} updateFields={updateFields} />,
      <Contectform key="contect" {...data} updateFields={updateFields} />,
    ]);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!isLastStep) return next();
    alert("Successful Account Creation");
  };

  return (
    <div className="w-1/2 h-60 p-4 border border-solid border-black">
      <h3>
        {currentStepIndex + 1} / {steps.length}
      </h3>
      <form action="">
        <div className="h-36">{step}</div>
        <div className="flex">
          {!isFirstStep && (
            <button
              className="btn w-12"
              onClick={(e) => {
                e.preventDefault();
                back();
              }}
            >
              Back
            </button>
          )}
          {!isLastStep && (
            <button
              className="btn w-12"
              onClick={(e) => {
                e.preventDefault();
                next();
              }}
            >
              Next
            </button>
          )}
        </div>
      </form>
    </div>
  );
};
