import { Greet } from './components/Greet/Greet';
import { Form } from './components/Form/Form';
import styles from './App.module.scss';
import { useState } from 'react';

function App() {
  const [isClosed, setIsClosed] = useState<boolean>(true);

  const closeHanler = () => {
    setIsClosed((current) => !current);
  };

  return (
    <section className={styles.app}>
      <Greet />

      <main className={styles.main}>
        <h3>Jop application form</h3>
        <h4>Part - 1</h4>

        <button
          className={styles.close}
          title="toggle"
          onClick={closeHanler}
        >
          X
        </button>
        
        {isClosed && <Form />}
      </main>
    </section>
  );
}

export default App;
