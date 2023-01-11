import React from "react";

type ContectFormData = {
  email: string;
  phone: string;
};

type ContectFormProps = ContectFormData & {
  updateFields: (fields: Partial<ContectFormData>) => void;
};

export function Contectform({ email, phone, updateFields }: ContectFormProps) {
  return (
    <div>
      <div>
        <label htmlFor="email">email</label>
        <input
          type="text"
          id="email"
          name="email"
          value={email}
          onChange={(e) => {
            updateFields({ email: e.target.value });
          }}
        />
      </div>
      <div>
        <label htmlFor="phone">phone</label>
        <input
          type="text"
          id="phone"
          name="phone"
          value={phone}
          onChange={(e) => {
            updateFields({ phone: e.target.value });
          }}
        />
      </div>
    </div>
  );
}
