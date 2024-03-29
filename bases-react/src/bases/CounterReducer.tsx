import { useReducer } from "react";
import { reCounterReducer } from "./reCounterReducer";

const initState = 0;
const increase = 5;
export const CounterReducer = () => {
  const [state, dispatch] = useReducer(reCounterReducer, initState);

  const add = () =>
    dispatch({
      type: "add",
    });

  const subsctract = () => dispatch({ type: "substract" });
  const increaseBy = () => dispatch({ type: "increaseBy", payload: increase });

  const reset = () => dispatch({ type: "reset", payload: 0 });
  return (
    <div className="flex justify-center items-center">
      <button
        className="p-3 bg-sky-500 text-white font-bold rounded ms-5"
        onClick={subsctract}
      >
        -1
      </button>
      <h1 className="text-9xl text-red-500">Counter Reducer: {state}</h1>
      <button
        className="p-3 bg-sky-500 text-white font-bold rounded ms-5"
        onClick={add}
      >
        +1
      </button>
      <button
        className="p-3 bg-sky-500 text-white font-bold rounded ms-5"
        onClick={reset}
      >
        reset
      </button>
      <button
        className="p-3 bg-sky-500 text-white font-bold rounded ms-5"
        onClick={increaseBy}
      >
        Increase by {increase}
      </button>
    </div>
  );
};
