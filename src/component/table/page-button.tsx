import { ReactNode } from "react";

type PageButtonProps = {
  symbol: ReactNode;
  disabled: boolean;
  handleClick: () => void;
};

export const PageButton = ({
  handleClick,
  symbol,
  disabled,
}: PageButtonProps) => {
  return (
    <button onClick={handleClick} disabled={disabled}>
      {symbol}
    </button>
  );
};
