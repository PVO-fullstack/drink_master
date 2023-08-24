import React from "react";
import { Navigation } from "../Navigation/Navigation";
import { UserMenu } from "../UserMenu/UserMenu";

export const Header = () => {
  return (
    <div>
      <Navigation />
      <UserMenu />
    </div>
  );
};
