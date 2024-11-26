import React from "react";
import Link from "next/link";
import { Button } from "../ui/button";
import Nav from "./Nav";
import MobileNav from "./MobileNav";
import ProfileButton from "@/components/ui/profile-button";
import { useSelector } from "react-redux";

function Header() {
  const userData = useSelector((state) => state.user.userData);

  return (
    <header className=" py-5 max-w-7xl mx-auto text-foreground px-6 ">
      <div className="w-full flex justify-between items-center mx-auto ">
        <Link href={"/home"}>
          <h1 className="text-xl sm:text-xl lg:text-2xl text-foreground flex-1 tracking-tight uppercase">
            {userData.name ?? "John Doe"}
            <span className="text-accent text-4xl sm:4xl lg:5xl">.</span>
          </h1>
        </Link>
        <div className="hidden  lg:flex justify-between items-center">
          <Nav />

          <Link href={"#"} className="hidden xl:flex mr-3">
            <Button variant="rounded" size="lg">
              Let&apos;s Connect
            </Button>
          </Link>
          <div>
            <ProfileButton />
          </div>
        </div>
        <div className="lg:hidden">
          <MobileNav name={userData.name ?? "John Doe"}/>
        </div>
      </div>
    </header>
  );
}

export default Header;
