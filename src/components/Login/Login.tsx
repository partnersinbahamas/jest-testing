import { useState } from "react"

export const Login = () => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(true);

  return (
    <div>
      {isLoggedIn ? (
        <button onClick={() => setIsLoggedIn(false)}>
          Log-in
        </button>
      ) : (
        <button onClick={() => setIsLoggedIn(true)}>
          Log-out
        </button>
      )}
    </div>
  )
}