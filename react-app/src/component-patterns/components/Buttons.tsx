import { useContext } from "react";
import { ProductContext } from "./ProductCard";
import styles from "../styles/styles.module.css";

export const Buttons = ({
  className,
  style,
}: {
  className?: string;
  style?: React.CSSProperties;
}) => {
  const { count, increaseBy } = useContext(ProductContext);

  return (
    <div className={styles.buttonsContainer}>
      <button
        className={styles.buttonMinus}
        onClick={() => count > 0 && increaseBy(-1)}
      >
        -
      </button>
      <div className={`${styles.countLabel} ${className}`} style={style}>
        {count}
      </div>

      <button className={styles.buttonAdd} onClick={() => increaseBy(1)}>
        +
      </button>
    </div>
  );
};
