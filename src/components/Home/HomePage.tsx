import React from "react";
import NavMenu from "./NavMenu";
import Logo from "./Logo";
import HomeContent from "./HomeContents";

export default function HomePage() {
  return (
    <>
      <header className="flex justify-between py-4 px-60 py-16">
        <Logo />
        <NavMenu />
      </header>
      <body>
        <HomeContent />
      </body>
    </>
  );
}
