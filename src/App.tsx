import { Greet } from './components/Greet/Greet';
import styles from './App.module.scss';

function App() {
  return (
    <section className={styles.app}>
      <Greet />
    </section>
  );
}

export default App;
