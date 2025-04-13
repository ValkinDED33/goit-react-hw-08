import css from "./Error.module.css";

export default function Error({ children, type = "error" }) {
  return (
    <p className={`${css.text} ${css[type]}`}>
      <b>{children}</b>
    </p>
  );
}
