import styles from './TextInput.module.scss';

type Props = {
  title: string,
  id: string,
  name: string,
  placeholder?: string,
  onChange?: (value: string) => void,
  value?: string,
}

export const TextInput: React.FC<Props>= ({ title, id, name, placeholder = '', onChange = () => {}, value = '' }) => {
  return (
    <div className={styles.wrapper}>
      <label htmlFor={name} className={styles.title}>{title}</label>
      <input
        type="text"
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
};