import Link from "next/link";
import React, { ReactNode, Suspense } from "react";
import { LoadingModal } from "../component/modal/loading";
import useClock from "../hook/useClock";

type menuProps = {
  title: string;
  path: string;
};

const InitialMenu: menuProps[] = [
  { title: "home", path: "/" },
  { title: "deploymacy", path: "/deploymacy/1" },
  { title: "custom", path: "/custom" },
  { title: "react-query", path: "/reactquery" },
  { title: "Recoil", path: "/recoil" },
];

type LayoutProps = {
  children: ReactNode;
};

export const Layout = ({ children }: LayoutProps) => {
  const { timeString } = useClock();
  return (
    <main>
      <div className="w-screen">
        <div className="w-60 h-screen fixed top-0 left-0 bg-sky-500">
          <div>
            <p>{timeString}</p>
          </div>
          {InitialMenu.map((menu) => {
            return (
              <div key={`menu-${menu.title}`}>
                <Link href={menu.path}>{menu.title}</Link>
              </div>
            );
          })}
        </div>
        <div style={{ width: "calc(100% - 240px)", marginLeft: "240px" }}>
          <Suspense fallback={<LoadingModal />}>
            <div className="pl-6 pr-6">{children}</div>
          </Suspense>
        </div>
      </div>
    </main>
  );
};
