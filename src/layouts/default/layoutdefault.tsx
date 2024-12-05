import React from "react";

import { Outlet } from "react-router-dom";

import Header from "@/components/base/header/header";
import { userAtom } from "@/store";
import { useAtom } from "jotai";
import AuthGuard from "@/route-guards";
import PageContainer from "../../components/base/page-container/pagecontainer";

const DefaultLayout: React.FC = () => {
  const [user] = useAtom(userAtom);

  console.log("user in defaultlayout", user);
  return (
    <>
      {/* {user && <Header />} */}
      <AuthGuard>
        {/* Both the Header and PageContainer are wrapped in AuthGuard */}
        <Header />
      </AuthGuard>
      <PageContainer>
        {/* This is where the child route components (Outlets) will be rendered */}
        <Outlet />
      </PageContainer>
    </>
  );
};

export default DefaultLayout;
