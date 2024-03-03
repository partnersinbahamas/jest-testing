import { useEffect, useState } from "react"

export const Login = () => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoggedIn(false);
    }, 1001)
  }, []);

  return (
    <div>
      {isLoggedIn ? (
        <button onClick={() => setIsLoggedIn(false)} tabIndex={-1}>
          Log-in
        </button>
      ) : (
        <button onClick={() => setIsLoggedIn(true)} tabIndex={-1}>
          Log-out
        </button>
      )}
    </div>
  )
}