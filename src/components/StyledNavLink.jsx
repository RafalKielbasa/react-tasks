import { NavLink } from "react-router-dom";
import clsx from "clsx";

const StyledNavLink = ({ name, adress, key, variant = "primary" }) => {
  return (
    <NavLink
      className={({ isActive }) =>
        clsx("p-2 rounded-md border-none", {
          "bg-black text-white": isActive && variant === "primary",
          "bg-purple-600 text-yellow-400 hover:bg-gray-600 hover:text-white":
            isActive && variant === "secondary",
        })
      }
      to={adress}
      key={key}
    >
      {name}
    </NavLink>
  );
};

export default StyledNavLink;
