import { Greet } from './components/Greet/Greet';
import { Form } from './components/Form/Form';
import styles from './App.module.scss';

function App() {
  return (
    <section className={styles.app}>
      <Greet />

      <main className={styles.main}>
        <h3>Jop application form</h3>
        <h4>Part - 1</h4>
        
        <Form />
      </main>
    </section>
  );
}

export default App;
