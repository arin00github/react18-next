import Link from "next/link";
import React, { ReactNode } from "react";

type menuProps = {
  title: string;
  path: string;
};

const InitialMenu: menuProps[] = [
  { title: "home", path: "/" },
  { title: "deploymacy", path: "/deploymacy/1" },
  { title: "menu2", path: "/menu2" },
  { title: "Recoil", path: "/recoil" },
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
          <div className="pl-6 pr-6">{children}</div>
        </div>
      </div>
    </main>
  );
};
