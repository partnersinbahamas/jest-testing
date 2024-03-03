import { useState } from "react";
import styles from './Counter.module.scss';
import { TextInput } from "../Inputs/TextInput/TextInput";

export const Counter = () => {
  const [count, setCount] = useState(0);
  const [amount, setAmount] = useState('');

  const onSetHandler = () => {
    setCount(Number(amount) | 0);
    setAmount('');
  }

  return (
    <section className={styles.counter}>
      <div className={styles.container}>
        <button onClick={() => setCount((current) => current -= 1)}>Decrement</button>
        <span data-testid="counter">{count}</span>
        <button onClick={() => setCount((current) => current += 1)}>Increment</button>
      </div>

      <div className={styles.setter}>
        <TextInput
          title="Set amount"
          name="amount"
          id="amount"
          placeholder="Please set amount"
          value={amount}
          onChange={(value) => setAmount(value)}
        />
        <button onClick={onSetHandler}>Set</button>
    </div>
    </section>
  );
};