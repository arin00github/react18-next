import { useState } from "react";
import useTimeout from "../hook/useTimeout";

export default function TimeoutComponent() {
  const [count, setCount] = useState<number>(10);

  const { clear, reset } = useTimeout(() => setCount(0), 1000);

  return (
    <div>
      <div>{count}</div>
      <button className="btn" onClick={() => setCount((c) => c + 1)}>
        Increment
      </button>
      <button className="btn" onClick={clear}>
        Clear
      </button>
      <button className="btn" onClick={reset}>
        Reset
      </button>
    </div>
  );
}
