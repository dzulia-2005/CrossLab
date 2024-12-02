import React from "react";
import Header from "../../components/base/header/header";
import Pagecontainer from "../../components/base/page-container/pagecontainer";
import { Outlet } from "react-router-dom";
import { useAtom } from "jotai";
import { userAtom } from "@/store/index";

const DefaultLayout: React.FC = () => {
  const [user] = useAtom(userAtom);
  return (
    <>
      {user && <Header />}
      {/* <Header /> */}
      <Pagecontainer>
        <Outlet />
      </Pagecontainer>
    </>
  );
};

export default DefaultLayout;
