import React from "react";

type PropfileData = {
  lastName: string;
  firstName: string;
};

type PropfileFormProps = PropfileData & {
  updateFields: (fields: Partial<PropfileData>) => void;
};

export function Profileform({
  lastName,
  firstName,
  updateFields,
}: PropfileFormProps) {
  return (
    <div>
      <div>
        <label htmlFor="last-name">last-name</label>
        <input
          type="text"
          id="last-name"
          name="lastName"
          value={lastName}
          onChange={(e) => {
            updateFields({ lastName: e.target.value });
          }}
        />
      </div>
      <div>
        <label htmlFor="first-name">first-name</label>
        <input
          type="text"
          id="first-name"
          name="firstName"
          value={firstName}
          onChange={(e) => {
            updateFields({ firstName: e.target.value });
          }}
        />
      </div>
    </div>
  );
}
