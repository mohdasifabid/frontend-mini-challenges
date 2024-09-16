import { ChangeEvent, FC, useState } from "react";

export const Counter: FC = () => {
  const [counterValue, setCounterValue] = useState<number>(0);
  const [increDecrementBy, setIncreDecrementBy] = useState<number>(1);

  const handleIncrement = () =>
    setCounterValue((prev) => prev + increDecrementBy);
  const handleDecrement = () =>
    setCounterValue((prev) => prev - increDecrementBy);
    
  const handleIncrementOrDecrementValue = (e: ChangeEvent<HTMLInputElement>) =>
    setIncreDecrementBy(Number(e.target.value));
  return (
    <>
      <main className="counter_wrapper">
        <h1>{counterValue}</h1>
        <section>
          <label htmlFor="incrementOrDecrementBy">
            Increment or Decrement by
            <input
              min={1}
              type="number"
              className="counter_input"
              id="incrementOrDecrementBy"
              onChange={handleIncrementOrDecrementValue}
            />
          </label>
        </section>
        <section className="counter_btn_wrapper">
          <button onClick={handleIncrement}>Increment</button>
          <button onClick={handleDecrement}>Decrement</button>
        </section>
      </main>
    </>
  );
};
