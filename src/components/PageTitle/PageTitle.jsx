import PropTypes from "prop-types";
import css from "./PageTitle.module.css";

export default function PageTitle({
  children,
  level = 1,
  className = "",
  ...props
}) {
  const validLevels = [1, 2, 3, 4, 5, 6];
  const HeadingTag = validLevels.includes(level) ? `h${level}` : "h1";

  const combinedClassName = `${css.heading} ${className}`.trim();

  return (
    <HeadingTag className={combinedClassName} {...props}>
      {children}
    </HeadingTag>
  );
}

PageTitle.propTypes = {
  children: PropTypes.node.isRequired,
  level: PropTypes.oneOf([1, 2, 3, 4, 5, 6]),
  className: PropTypes.string,
};

PageTitle.defaultProps = {
  level: 1,
  className: "",
};
