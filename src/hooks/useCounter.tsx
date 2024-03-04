import { useState } from "react"

export const useCounter = ({initialCount = 0} = {}) => {
  const [count, setCount] = useState(initialCount);

  const decrement = () => setCount((current) => current -= 1);
  const increment = () => setCount((current) => current += 1);
  return {count, decrement, increment};
}