import { useState } from "react";

export const useProducts = (initialize = 0) => {
  const [counter, setCounter] = useState<number>(initialize);

  const increaseBy = (value: number) => setCounter(counter + value);

  return {
    counter,
    increaseBy,
  };
};
