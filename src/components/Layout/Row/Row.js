import styles from "../Layout.module.css"

const Row = ({
  children,
  mainAxisAlignment,
  crossAxisAlignment,
  expanded = false,
  stretch = false
}) => {
  return (
    <div
      className={`${styles.row} ${
        mainAxisAlignment ? mainAxisAlignment : ""
      }  ${crossAxisAlignment !== undefined ? crossAxisAlignment : ""} ${
         expanded  ? styles["expanded"] : ''
      } ${
        stretch ? styles["stretched"] : ""
      }`}
    >
      {children}
    </div>
  );
};

export default Row;
