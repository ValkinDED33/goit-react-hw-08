import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import Navigation from "../navigation/Navigation";
import UserMenu from "../userMenu/UserMenu";
import AuthMenu from "../AuthMenu/AuthMenu";
import css from "./AppBar.module.css";

export default function AppBar() {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <header className={css.header}>
      {}
      <Navigation />
      {}
      {isLoggedIn ? <UserMenu /> : <AuthMenu />}
    </header>
  );
}
