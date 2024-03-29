import { useState, useRef, useLayoutEffect } from "react";
import { gsap } from "gsap";

export const useCounter = (maxCount = 1, customMsg: string) => {
  const [counter, setCounter] = useState<number>(5);
  const elementToAnimate = useRef<HTMLHeadingElement>(null);
  const tl = useRef(gsap.timeline());
  const onClick = () => counter < maxCount && setCounter(counter + 1);

  useLayoutEffect(() => {
    if (!elementToAnimate.current) return;

    console.log(customMsg);

    tl.current
      .to(elementToAnimate.current, { y: -30, duration: 0.3, ease: "ease.out" })
      .to(elementToAnimate.current, { y: 0, duration: 1, ease: "bounce.out" });
  }, [counter, customMsg]);

  return {
    counter,
    elementToAnimate,
    onClick,
  };
};
