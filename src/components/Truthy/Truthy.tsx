import styles from './Truthy.module.scss';

type TProps = {
  truthy?: boolean,
  handleTrue: (value: boolean) => void,
  handleFalse: (value: boolean) => void,
}

export const Truthy: React.FC<TProps> = ({truthy = false, handleTrue, handleFalse}) => {
  return (
    <div className={styles.wrapper}>
      <p className={styles.title} data-testid="truthy">
        {truthy ? 'is true' : 'is false'}
      </p>

      <button onClick={() => handleTrue(true)}>True</button>
      <button onClick={() => handleFalse(false)}>False</button>
    </div>
  )
}