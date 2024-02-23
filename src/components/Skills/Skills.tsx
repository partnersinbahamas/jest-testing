import { TSkill } from '../../helpers/types';
import styles from './Skills.module.scss';

type Props = {
  skills: TSkill[],
};

export const Skills: React.FC<Props> = ({ skills }) => {
  return (
    <section className={styles.skills}>
      <ul className={styles.list}>
        {skills.map((skill: TSkill) => (
          <li
            className={styles.item}
            key={skill.id}
          >
            <img
              className={styles.img}
              src={skill.img}
              alt={`${skill.title}-logo`}
            />
            <div>{skill.title}</div>
          </li>
        ))}
      </ul>
    </section>
  )
}