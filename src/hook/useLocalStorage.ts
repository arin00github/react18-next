import { Dispatch, SetStateAction, useEffect, useState } from "react";

type RetureType<T> = [T | undefined, Dispatch<SetStateAction<T>>];

export const useLocalStorage = <T>(
  key: string,
  initialValue: T
): RetureType<T> => {
  const [state, setState] = useState(() => {
    if (!initialValue) return;
    try {
      const value = localStorage.getItem(key);
      return value ? JSON.parse(value) : initialValue;
    } catch (err) {
      return initialValue;
    }
  });

  useEffect(() => {
    if (state) {
      try {
        localStorage.setItem(key, JSON.stringify(state));
      } catch (err) {
        console.log("err", err);
      }
    }
  }, [state, key]);

  return [state, setState];
};
