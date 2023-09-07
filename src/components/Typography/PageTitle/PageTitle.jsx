import PropTypes from "prop-types";
import clsx from "clsx";
import styles from "./PageTitle.module.scss";

// ###################################################

// margin: "large", "small" or "none" (default)

export const PageTitle = ({
  children,
  style = null,
  className = null,
  margin = "none",
}) => {
  return (
    <h1
      className={clsx(styles.heading, className, styles[margin])}
      style={style}
    >
      {children}
    </h1>
  );
};

PageTitle.propTypes = {
  children: PropTypes.string,
  margin: PropTypes.oneOf(["large", "small", "none"]),
  style: PropTypes.object,
  className: PropTypes.string,
};
