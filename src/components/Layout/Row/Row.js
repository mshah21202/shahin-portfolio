import styles from "../Layout.module.css"

const Row = ({
  children,
  mainAxisAlignment,
  crossAxisAlignment,
  gap = 0,
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

      style={{gap: `${gap}px`}}
    >
      {children}
    </div>
  );
};

export default Row;
