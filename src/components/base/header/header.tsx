import AddQuestion from "@/components/base/header/add-question/add-question";
import Avatar from "@/components/base/header/profile/avatar";
import SearchBySign from "@/components/base/header/search-by-sign/search-by-sign";
import SearchByTagName from "@/components//base/header/searc-by-tag-name/search-by-tag-name";
// import { Select } from "@radix-ui/react-select";
// import React from "react";
import { Link, useLocation } from "react-router-dom";
import { LogoMobile } from "@/assets/logo";
import { LogoDesk } from "@/assets/logo";
import SearchBar from "@/components/base/header/search-bar/search-bar";
// import imageMobile from "@/assets/stay-mobile.png";
// import imageDesk from "@/assets/stay_desk.png";

const Header: React.FC = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/home";
  return (
    <div
      className="p-2 m-auto md:p-4 max-w-screen-2xl flex bg-violet-500
    flex-row gap-7 "
    >
      <header className="relative flex gap-2 items-center justify-between md:mx-8   md:gap-5 w-3/4">
        <Link to="/home">
          <div className="block md:hidden">
            <LogoMobile />{" "}
            {/* <img src={imageMobile} alt="Mobile Logo" className="w-auto h-12" /> */}
          </div>{" "}
          <div className="hidden md:block">
            <LogoDesk />
            {/* <img src={imageDesk} alt="Mobile Logo" className="w-auto h-12" /> */}
          </div>
        </Link>

        {isHomePage && (
          <>
            <SearchBar />
            <SearchByTagName className="w-1/5" />
            <SearchBySign />
          </>
        )}
      </header>

      <div className="flex flex-grow gap-6 items-center justify-end w-1/4 md:mr-12">
        {isHomePage && (
          <AddQuestion className=" border rounded-md  text-orange-200 md:custom-border	" />
        )}

        <Avatar userId={""} />
      </div>
    </div>
  );
};

export default Header;
