import { useState } from "react";
import styles from './Counter.module.scss';

export const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <section className={styles.counter}>
      <button onClick={() => setCount((current) => current -= 1)}>Decrement</button>

      <span data-testid="counter">{count}</span>

      <button onClick={() => setCount((current) => current += 1)}>Increment</button>
    </section>
  );
};