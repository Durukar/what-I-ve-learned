import { ThumbsUp, Trash } from 'phosphor-react';
import styles from './Comment.module.css'

export function Comment() {
  return (
    <div className={styles.comment}>
      <img src="https://github.com/durukar.png"/>

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Lucas Davila</strong>
              <time title="15 de Julho ás 10:09" dateTime="2023-15-07">Cerca de 1h atrás</time>
            </div>

            <button tittle="Deletar comentário">
              <Trash size={24} />
            </button>
          </header>

          <p>O problema esta no item X do connector!</p>
        </div>

        <footer>
          <button>
            <ThumbsUp />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  );
}