import { useState } from "react";

interface Props {
  initialValue?: number;
}

export const Counter = ({ initialValue = 0 }: Props) => {
  const [counter, setCounter] = useState<number>(initialValue);

  const onClick = () => setCounter(counter + 1);
  return (
    <div className="flex justify-center items-center">
      <button>-1</button>
      <h1 className="text-9xl text-red-500">{counter}</h1>
      <button
        className="p-3 bg-sky-500 text-white font-bold rounded ms-5"
        onClick={onClick}
      >
        +1
      </button>
    </div>
  );
};
