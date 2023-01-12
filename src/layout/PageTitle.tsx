import React, { ReactNode } from "react";

type PageTitleProps = {
  children: ReactNode;
};

export const PageTitle = ({ children }: PageTitleProps) => {
  return (
    <div className="mt-4 mb-8">
      <h1 className="text-xl">{children}</h1>
    </div>
  );
};
