import styles from './Post.module.css'

export function Post() {
  return (
    <article className={styles.post} >
      <header>
        <div className={styles.author}>
          <img className={styles.avatar} src="https://github.com/durukar.png" />
          <div className={styles.authorInfo}>
            <strong>Lucas Davila</strong>
            <span>Snews Developer</span>
          </div>
        </div>

        <time title="15 de Julho ás 10:09" dateTime="2023-15-07">Publicado há: 1h</time>
      </header>
      
      <div className={styles.content}>
        <p><strong><a href="">Cliente</a></strong></p>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam enim, quod nobis eaque tempore nemo veniam nesciunt soluta. Iure laborum, obcaecati perferendis eaque quisquam quo maxime at aspernatur aliquam vitae.</p>
        <p><a href="">ticket.issue/id</a></p>
        <p>
          <a href="">#arion</a>{' '}
          <a href="">#bug</a>{' '}
          <a href="">#3.27.1</a>{' '}
        </p>
      </div>
    </article>
  )
}