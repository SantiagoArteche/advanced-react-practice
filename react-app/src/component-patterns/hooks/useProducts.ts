import { useEffect, useRef, useState } from "react";
import { OnChangeArgs, Product } from "../interfaces/product.interfaces";
interface UseProductArgs {
  product: Product;
  onChange?: (args: OnChangeArgs) => void;
  value: number;
}

export const useProducts = ({
  product,
  onChange,
  value: val = 0,
}: UseProductArgs) => {
  const [counter, setCounter] = useState<number>(val);
  const isControlled = useRef(!!onChange);
  const increaseBy = (value: number) => {
    console.log({ isControlled });

    if (isControlled.current) {
      return onChange!({ count: value, product });
    }
    setCounter(value);
  };

  useEffect(() => {
    setCounter(val);
  }, [val]);

  return {
    increaseBy,
    counter,
  };
};
