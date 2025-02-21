import { Header } from "./components/Header";
import { Post } from "./Post";
import { Sidebar } from "./components/Sidebar";

import styles from "./App.module.css";

import "./global.css";

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            author="Diego Fernandes"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ac nisi ac nisi ultrices, ultricies magna a, aliquam purus. Sed nec magna auctor, ultricies mi nec, aliquam purus. Sed nec magna auctor, ultricies mi nec, aliquam purus."
            title="Criando um app do zero"
          />
          <Post
            author="Matheus Souza"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ac nisi ac nisi ultrices, ultricies magna a, aliquam purus. Sed nec magna auctor, ultricies mi nec, aliquam purus. Sed nec magna auctor, ultricies mi nec, aliquam purus."
            title="Criando um post do zero"
          />
        </main>
      </div>
    </div>
  );
}
