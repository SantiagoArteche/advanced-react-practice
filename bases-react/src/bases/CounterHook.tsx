import { useCounter } from "../hooks/useCounter";

export const CounterHook = () => {
  const { counter, elementToAnimate, onClick } = useCounter(
    10,
    "Se ha llegado"
  );
  return (
    <div className="flex justify-center items-center">
      <h1 className="text-9xl text-red-500" id="button" ref={elementToAnimate}>
        {counter}
      </h1>
      <button
        className="p-3 bg-sky-500 text-white font-bold rounded ms-5"
        onClick={onClick}
      >
        +1
      </button>
    </div>
  );
};
