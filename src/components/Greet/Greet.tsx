import { Skills } from '../Skills/Skills';
import { skills } from '../../helpers/variables';
import styles from './Greet.module.scss';

type Props = {
  name?: string,
};

export const Greet: React.FC<Props> = ({ name = '' }) => {
  return (
    <h1 className={styles.greet}>
      {name ? name : 'Guest'} JEST

      <div className={styles.greetSkills}>
        <Skills skills={skills} />
      </div>
    </h1>
  );
};