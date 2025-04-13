import css from "./Loader.module.css";

export default function Loader({ children }) {
  return (
    <div className={css.loaderWrapper}>
      <div className={css.loader}></div>
      {children && <p className={css.text}>{children}</p>}
    </div>
  );
}
