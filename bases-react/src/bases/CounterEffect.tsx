import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

interface Props {
  initialValue?: number;
}

const maxCount = 10;

export const CounterEffect = ({ initialValue = 0 }: Props) => {
  const [counter, setCounter] = useState<number>(initialValue);
  const h1Ref = useRef<HTMLHeadingElement>(null);
  const onClick = () => counter < maxCount && setCounter(counter + 1);

  useEffect(() => {
    if (counter < 10) return;

    console.log("Se llego al valor maximo");

    const tl = gsap.timeline();

    tl.to(h1Ref.current, { y: -30, duration: 0.3, ease: "ease.out" }).to(
      h1Ref.current,
      { y: 0, duration: 1, ease: "bounce.out" }
    );
  }, [counter]);
  return (
    <div className="flex justify-center items-center">
      <h1 className="text-9xl text-red-500" id="button" ref={h1Ref}>
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
