import { NavLink, Outlet } from "react-router-dom";
import clsx from "clsx";
const StyledNavLink = ({ name, adress }) => {
  return (
    <NavLink
      className={({ isActive }) =>
        clsx("p-2 rounded-md border-none", { "bg-black text-white": isActive })
      }
      to={adress}
    >
      {name}
    </NavLink>
  );
};
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
