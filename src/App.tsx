import type { Component } from 'solid-js';

import Zoom from './components/zoom'
import styles from './App.module.css';

const App: Component = () => {
  return (
    <div class={styles.App}>
      <Zoom></Zoom>
    </div>
  );
};

export default App;
