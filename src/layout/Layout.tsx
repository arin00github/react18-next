import Link from "next/link";
import React, { ReactNode } from "react";

type menuProps = {
  title: string;
  path: string;
};

const InitialMenu: menuProps[] = [
  { title: "home", path: "/" },
  { title: "menu1", path: "/menu1" },
  { title: "menu2", path: "/menu2" },
];

type LayoutProps = {
  children: ReactNode;
};

export const Layout = ({ children }: LayoutProps) => {
  return (
    <main>
      <div className="w-screen">
        <div className="w-60 h-screen fixed top-0 left-0 bg-sky-500">
          {InitialMenu.map((menu) => {
            return (
              <div key={`menu-${menu.title}`}>
                <Link href={menu.path}>{menu.title}</Link>
              </div>
            );
          })}
        </div>
        <div style={{ width: "calc(100% - 240px)", marginLeft: "240px" }}>
          {children}
        </div>
      </div>
    </main>
  );
};
