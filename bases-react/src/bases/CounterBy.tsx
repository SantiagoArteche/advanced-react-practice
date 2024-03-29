import { useState } from "react";

interface Props {
  initialValue?: number;
}

interface CounterState {
  counter: number;
  clicks: number;
}

export const CounterBy = ({ initialValue = 0 }: Props) => {
  const [{ counter, clicks }, setCounter] = useState<CounterState>({
    counter: initialValue,
    clicks: 0,
  });

  const onClick = (value: number) =>
    setCounter({ counter: counter + value, clicks: clicks + 1 });

  return (
    <div className="flex flex-col gap-5  justify-center items-center">
      <h1 className="text-9xl text-red-500">ConterBy: {counter}</h1>
      <h1 className="text-9xl text-red-500">clicks: {clicks}</h1>
      <button
        className="p-3 bg-sky-500 text-5xl text-white font-bold rounded ms-5"
        onClick={() => onClick(5)}
      >
        +1
      </button>
    </div>
  );
};
