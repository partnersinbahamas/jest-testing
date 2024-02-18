import { TPlace } from '../../../helpers/types';
import styles from './SelectInput.module.scss';

type Props = {
  id: string,
  title: string,
  items: TPlace[],
};

export const SelectInput: React.FC<Props> = ({ id, title, items }) => {
  return (
    <div className={styles.wrapper}>
      <label htmlFor={id} className={styles.wrapper}>
        {title}
      </label>

      <select id={id}>
        {items.map((place) => (
          <option
            key={place.value}
            value={place.value}
          >
            {place.title}
          </option>
        ))}
      </select>
  </div>
  );
};