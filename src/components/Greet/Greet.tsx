import { Skills } from '../Skills/Skills';
import { skills } from '../../helpers/variables';
import { Login } from '../Login/Login';
import { Counter } from '../Counter/Counter';
import styles from './Greet.module.scss';

type Props = {
  name?: string,
};

export const Greet: React.FC<Props> = ({ name = '' }) => {
  return (
    <h1 className={styles.greet}>
      <div className={styles.login}>
        <Login />
      </div>

      {name ? name : 'Guest'} JEST

      <div className={styles.greetSkills}>
        <Counter />
        <Skills skills={skills} />
      </div>
    </h1>
  );
};