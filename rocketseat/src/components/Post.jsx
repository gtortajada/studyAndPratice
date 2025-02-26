import Avatar from "./Avatar";
import { Comment } from "./Comment";

import styles from "./Post.module.css"

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar hasBorder src="https://github.com/gtortajada.png" />
          <div className={styles.authorInfo}>
            <strong> Gustavo Tortajada</strong>
            <span> Web Developer</span>
          </div>
        </div>
        <time title="24 de fevereiro às 14:48h" dateTime="2025-02-24 14:48:12"> Publica há 1 hora</time>
      </header>

      <div className={styles.content}>
        <p>Fala galeraa</p>
        <p>Acabei de subir mais um projeto no meu portifólio. É um projeto que fiz no NLW Return, evento da Rocketseat. O projeto é um site de viagens chamado "Letmeask".</p>
        <p><a href="">jane.design/doctorcare </a></p>
        <p>
          <a href="">#novoprojeto</a>{' '}
          <a href="">#nlw</a>{' '}
          <a href="">#rocketseat</a>
        </p>
      </div>

      <form className={styles.commentForm}>
        <strong> Deixe seu feedback!</strong>
        <textarea
          placeholder="Deixe um comentário"
        />
        <footer>
        <button type="submit">Publicar</button>
        </footer>
      </form>
      <div className={styles.commentList}>
        <Comment />
        <Comment />
        <Comment />
      </div>
    </article>
  );
}

// Preciso de uma função que importa a foto, nome e profissão da sidebar.
// Preciso de uma função que pega o conteúdo da postagem.
// Preciso de uma função que pega os comentários.

//     <aside className={styles.post}>
//       <div className={styles.profile}>
//         Importar foto, nome e profissão da sidebar. (precisa ser componente reutilizável)
//       </div>
//       <div> Publicado há 1 hora</div>
//       <div> Aqui o conteúdo da postagem</div>
//       <div> Aqui comentários</div>
//     </aside>

// O que eu criaria:
//

// author="Matheus Souza"
//             content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ac nisi ac nisi ultrices, ultricies magna a, aliquam purus. Sed nec magna auctor, ultricies mi nec, aliquam purus. Sed nec magna auctor, ultricies mi nec, aliquam purus."
//             title="Criando um post do zero"
