// import { Counter } from "./bases/Counter";
// import { CounterBy } from "./bases/CounterBy";
// import { CounterEffect } from "./bases/CounterEffect";

import { CounterReducer } from "./bases/CounterReducer";

// import { CounterHook } from "./bases/CounterHook";

function App() {
  return (
    <div className="flex flex-col gap-20">
      {/* <CounterBy initialValue={10} />
      <Counter initialValue={10} />
      <CounterEffect />
      <CounterHook /> */}
      <CounterReducer />
    </div>
  );
}

export default App;
