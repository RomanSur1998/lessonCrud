import React, { useContext, useEffect } from "react";
import { counterContext } from "../CounterContextProvider";

const Counter = () => {
  useEffect(() => {
    console.log("Перешли на другу. страницу");
    return () => {
      console.log("Ушли со страницы");
    };
  }, []);
  const { counter, increment, dicrement } = useContext(counterContext);
  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={dicrement}>Minus</button>
      <button onClick={increment}>Plus</button>
    </div>
  );
};

export default Counter;
