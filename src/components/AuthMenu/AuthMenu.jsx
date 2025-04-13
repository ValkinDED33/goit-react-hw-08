import { NavLink } from "react-router-dom";
import css from "./AuthMenu.module.css";

export default function AuthMenu() {
  const getLinkClassName = ({ isActive }) =>
    isActive ? `${css.link} ${css.active}` : css.link;

  return (
    <nav className={css.nav}>
      <NavLink className={getLinkClassName} to="/register">
        Register
      </NavLink>
      <NavLink className={getLinkClassName} to="/login">
        Log In
      </NavLink>
    </nav>
  );
}
