import { useEffect, useState } from "react";
import styles from './Users.module.scss';

export const Users = () => {
  const [users, setUsers] = useState<any>([]);
  const [error, setError] = useState('');

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then(data => setUsers(data.map(({name}: {[key: string]: string}) => ({name}) )))
      .catch((error) => setError('Fatching error'))
  }, []);

  return (
    <section className={styles.wrapper}>
      <h1>Users</h1>
      {error && <p className={styles.error}>{error}</p>}

        <ul className={styles.list}>
          {users.map((user: any) => (
            <li
              key={user.name}
              className={styles.user}
            >
              {user.name}
            </li>
          ))}
        </ul>
    </section>
  )
}