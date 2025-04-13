import { Link } from "react-router-dom";
import css from "./NotFoundPage.module.css";

const NotFoundPage = () => {
  return (
    <div className={css.container}>
      <h2 className={css.title}>Sorry, this page not found...</h2>
      <img
        src="https://png.pngtree.com/element_pic/16/11/14/4810d7467c24879d43006148e3c0c73a.jpg"
        alt="Page not found"
        className={css.image}
      />
      <Link to="/" className={css.btn}>
        Go to Home Page
      </Link>
    </div>
  );
};

export default NotFoundPage;
