import React from "react";

type BaseFormData = {
  userId: string;
  userGroup: string;
};

type BaseFromProps = BaseFormData & {
  updateFields: (fields: Partial<BaseFormData>) => void;
};

export function Baseform({ userGroup, userId, updateFields }: BaseFromProps) {
  return (
    <div>
      <div>
        <label htmlFor="user-id">User Id</label>
        <input
          type="text"
          id="user-id"
          name="userId"
          value={userId}
          onChange={(e) => {
            updateFields({ userId: e.target.value });
          }}
        />
      </div>
      <div>
        <label htmlFor="user-group">User Group</label>
        <input
          type="text"
          id="user-group"
          name="userGroup"
          value={userGroup}
          onChange={(e) => {
            updateFields({ userGroup: e.target.value });
          }}
        />
      </div>
    </div>
  );
}
