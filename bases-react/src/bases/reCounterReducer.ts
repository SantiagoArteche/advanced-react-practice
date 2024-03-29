type CounterAction = {
  type: "add" | "substract" | "reset" | "increaseBy";
  payload?: number;
};
export const reCounterReducer = (state = 0, action: CounterAction) => {
  switch (action.type) {
    case "add":
      return (state = state + 1);

    case "substract":
      return (state = state - 1);

    case "reset":
      return (state = action.payload ?? 1);

    case "increaseBy":
      return (state = state + action.payload!);

    default:
      return state;
  }
};
