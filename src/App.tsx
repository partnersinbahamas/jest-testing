import { Greet } from './components/Greet/Greet';
import { Form } from './components/Form/Form';
import styles from './App.module.scss';

function App() {
  return (
    <section className={styles.app}>
      <Greet />

      <Form />
    </section>
  );
}

export default App;
