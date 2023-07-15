import { Header } from './components/header/Header';
import './global.css';

import styles from './App.module.css'
import { Sidebar } from './components/sidebar/Sidebar';

export function App() {
  return (
    <div>
      <Header />

      <div classNamer={styles.wrapper} >
        <Sidebar />
        
        <main>
        </main>
      </div>
    </div>
  )
}

