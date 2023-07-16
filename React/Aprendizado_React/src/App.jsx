import { Header } from './components/header/Header';
import './global.css';

import styles from './App.module.css'
import { Sidebar } from './components/sidebar/Sidebar';

import { Post } from './components/post/Post';

// author: {avatar_url: "", name:"", role:""}
// publishedAt: Date
// content: string

const posts = [
  {
    id: 1,
    authro: {
      avatarUrl: 'https://github.com/durukar.png',
      name: 'Lucas Davila',
      role: 'Snews Developer'
    },
    content: [
      { type: 'link', content: '<a href="">Cliente</a>>'},
      { type: 'paragraph', content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam enim, quod nobis eaque tempore nemo veniam nesciunt soluta. Iure laborum, obcaecati perferendis eaque quisquam quo maxime at aspernatur aliquam vitae.'},    
      { type: 'link', content: '<a href="">ticket.issue/id</a>'}      
    ],
    publishedAt: new Date('2023-07-16 10:09:00'),
  },
  {
    id: 2,
    authro: {
      avatarUrl: 'https://github.com/durukar.png',
      name: 'Joao Cerafin',
      role: 'Scrum Master'
    },
    content: [
      { type: 'link', content: '<a href="">Cliente</a>>'},
      { type: 'paragraph', content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam enim, quod nobis eaque tempore nemo veniam nesciunt soluta. Iure laborum, obcaecati perferendis eaque quisquam quo maxime at aspernatur aliquam vitae.'},    
      { type: 'link', content: '<a href="">ticket.issue/id</a>'}      
    ],
    publishedAt: new Date('2023-07-18 10:09:00'),
  },
];

// iteração

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper} >
        <Sidebar />
        <main>
          {posts.map(post => {
            return (
              <Post 
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}
        </main>
      </div>
    </div>
  )
}