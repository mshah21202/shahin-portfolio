import styles from "../Layout.module.css";

const Column = ({
  children,
  mainAxisAlignment,
  crossAxisAlignment,
  gap = 0,
  expanded = false,
  stretch = false,
}) => {
  return (
    <div
      className={`
        ${styles.column} ${mainAxisAlignment ? mainAxisAlignment : ""}
        ${crossAxisAlignment !== undefined ? crossAxisAlignment : ""}
        ${expanded ? styles["expanded"] : ""}
        ${stretch ? styles["stretched"] : ""}
      `}

      style={{gap: `${gap}px`}}
    >
      {children}
    </div>
  );
};

export default Column;
