import styles from './Textarea.module.scss';

type Props = {
  title: string,
  id: string,
  name: string,
}

export const Textarea: React.FC<Props>= ({ title, id, name }) => {
  return (
    <div className={styles.wrapper}>
      <label htmlFor={name} className={styles.title}>{title}</label>
      <textarea name={name} id={id} value="Textarea value" readOnly />
    </div>
  );
};