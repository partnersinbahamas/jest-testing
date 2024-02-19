import styles from './TextInput.module.scss';

type Props = {
  title: string,
  id: string,
  name: string,
  placeholder?: string,
}

export const TextInput: React.FC<Props>= ({ title, id, name, placeholder = '' }) => {
  return (
    <div className={styles.wrapper}>
      <label htmlFor={name} className={styles.title}>{title}</label>
      <input type="text" id={id} placeholder={placeholder} />
    </div>
  );
};