import { Outlet } from "react-router-dom";
import StyledNavLink from "./StyledNavLink";

const Navigation = () => {
  return (
    <div className="flex flex-col items-center gap-y-10">
      <nav className="flex gap-x-4">
        <StyledNavLink name="Home" adress="/" />
        <StyledNavLink name="About" adress="about" />
        <StyledNavLink name="Contact" adress="contact" />
      </nav>
      <Outlet />
    </div>
  );
};

export default Navigation;
