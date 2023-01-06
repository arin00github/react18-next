import { Dispatch, SetStateAction, useState } from "react";

type ReturnTypes<T> = [T, Dispatch<SetStateAction<T>>];

export default function useToggle<T extends object>(
  defaultValue: T
): ReturnTypes<T> {
  const [value, setValue] = useState<T>(defaultValue);

  return [value, setValue];
}
