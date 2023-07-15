import { Header } from './components/header/Header';
import './global.css';

import styles from './App.module.css'
import { Sidebar } from './components/sidebar/Sidebar';

import { Post } from './Post';

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper} >
        <Sidebar />
        <main>
          <Post
            author='Lucas Davila' 
            content='Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum quae eum, vitae voluptatem expedita ipsa ut explicabo officiis fuga incidunt nobis ducimus odio praesentium! Exercitationem sunt cum eaque. Est, eligendi.'
          />
          <Post
            author='Joao Cerafim' 
            content='Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum quae eum, vitae voluptatem expedita ipsa ut explicabo officiis fuga incidunt nobis ducimus odio praesentium! Exercitationem sunt cum eaque. Est, eligendi.'
          />
        </main>
      </div>
    </div>
  )
}