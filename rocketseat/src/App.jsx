import { Header } from "./components/Header";
import { Post } from "./components/Post";
import { Sidebar } from "./components/Sidebar";

import styles from "./App.module.css";

import "./global.css";
import { id } from "date-fns/locale";

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/diego3g.png',
      name: 'Diego Fernandes',
      role: 'Web Developer'
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa',},
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifólio. É um projeto que fiz no NLW Return, evento da Rocketseat. O projeto é um site de viagens chamado "Letmeask".'},
      { type: 'link', content:'jane.design/doctorcare'},
    ],
    publishedAt: new Date('2025-02-24 14:48:12'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/maykbrito.png',
      name: 'Mayk Brito',
      role: 'Developer'
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa'},
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifólio. É um projeto que fiz no NLW Return, evento da Rocketseat. O projeto é um site de viagens chamado "Letmeask".'},
      { type: 'link', content:'jane.design/doctorcare'},
    ],
    publishedAt: new Date('2025-02-20 14:48:12'),
  }
]

const comments = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/diego3g.png',
      name: 'Devon Lane',
    },
    content: 'Ficou muito massa! Parabéns!',
    publishedAt: new Date('2025-02-14 14:48:12'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/thealmeida.png',
      name: 'Gustavo Almeida',
    },
    content: 'Brabo!',
    publishedAt: new Date('2025-02-22 14:48:12'),
  }
]

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
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
  );
}