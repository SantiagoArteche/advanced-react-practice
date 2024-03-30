import { useCallback, useEffect, useRef, useState } from "react";
import {
  OnChangeArgs,
  Product,
  InitialValues,
} from "../interfaces/product.interfaces";
interface UseProductArgs {
  product: Product;
  onChange?: (args: OnChangeArgs) => void;
  value?: number;
  initialValues?: InitialValues;
}

export const useProducts = ({
  product,
  onChange,
  value: val = 0,
  initialValues,
}: UseProductArgs) => {
  const [counter, setCounter] = useState<number>(initialValues?.count || val);

  const isMounted = useRef(false);
  const increaseBy = (value: number) => {
    if (initialValues?.maxCount) {
      return setCounter(Math.min(counter + value, initialValues.maxCount));
    }

    setCounter(counter + value);
    onChange && onChange({ count: counter + value, product });
  };
  useEffect(() => {
    isMounted.current = true;
  }, []);

  useEffect(() => {
    if (!isMounted.current) return;
    setCounter(initialValues?.count as number);
  }, [initialValues]);

  return {
    increaseBy,
    counter,
    isMaxCountReached: useCallback(
      () =>
        !!initialValues?.count &&
        initialValues.count === initialValues.maxCount,
      [initialValues?.count, initialValues?.maxCount]
    ),
    reset: () => setCounter(initialValues?.count ?? 0),
  };
};
