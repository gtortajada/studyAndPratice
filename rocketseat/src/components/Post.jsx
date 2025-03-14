import { format, formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

import Avatar from "./Avatar";
import { Comment } from "./Comment";

import styles from "./Post.module.css"

const comments= [
  1,
  2,
  3,
];

export function Post({ author, publishedAt, content }) {
  const publishedAtFormatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
    locale: ptBR,
  });

  const publisheddateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true,
  })

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar hasBorder src={author.avatarUrl} />
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>

        <time title={publishedAtFormatted} dateTime={publishedAt.toISOString()}>
          {publisheddateRelativeToNow}
        </time>
      </header>

      <div className={styles.content}>
        {content.map(line => {
          if (line.type === 'paragraph') {
            return <p>{line.content}</p>;
          } else if (line.type === 'link') {
            return <p><a href="#">{line.content}</a></p>;
          }
        })}
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
      {comments.map(comment => {
        return <Comment />
      })}
      </div>
    </article>
  );
} // Solução: Vou assistir a aula anterior a useState e tentar entender o que está acontecendo. Se não resolver nela volto mais uma, até resolver.