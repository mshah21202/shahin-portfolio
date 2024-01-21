import styles from "../Layout.module.css";

const Column = ({
  children,
  mainAxisAlignment,
  crossAxisAlignment,
  expanded = false,
  stretch = false,
}) => {
  return (
    <div
      className={`${styles.column} ${
        mainAxisAlignment ? mainAxisAlignment : ""
      }  ${crossAxisAlignment !== undefined ? crossAxisAlignment : ""} ${
        expanded ? styles["expanded"] : ""
      } ${
        stretch ? styles["stretched"] : ""
      }`}
    >
      {children}
    </div>
  );
};

export default Column;
