import { Greet } from './components/Greet/Greet';
import { Form } from './components/Form/Form';
import styles from './App.module.scss';
import jestLogo from './images/jest-logo.webp';
import { useState } from 'react';

function App() {
  const [isClosed, setIsClosed] = useState<boolean>(true);


  return (
    <section className={styles.app}>
      <Greet />

      <main className={styles.main}>
        <h3>Jop application form</h3>
        <h4>Part - 1</h4>
        <button
          className={styles.closeButton}
          title="toggle"
          onClick={() => setIsClosed((current) => !current)}
        >
          X
        </button>
        {isClosed && <span aria-label='form-wrapper'><Form /></span>}
        <img src={jestLogo} data-testid="jest-logo"/>
      </main>
    </section>
  );
}

export default App;
