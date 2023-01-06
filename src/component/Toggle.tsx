import React from "react";
import useToggle from "../hook/useToggle";

export const ToggleComponent = () => {
  const [value, toggleValue] = useToggle({ title: "toggle", active: false });

  return (
    <div>
      <div>{value.active ? "활성화" : "비활성화"}</div>
      <div className="mt-3">
        <button
          className="btn"
          onClick={() => toggleValue({ ...value, active: !value.active })}
        >
          Toggle Button
        </button>
      </div>
    </div>
  );
};
