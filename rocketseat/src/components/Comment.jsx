import { ThumbsUp, Trash } from "@phosphor-icons/react";

import styles from "./Comment.module.css";
import Avatar from "./Avatar";

import { format, formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

export function Comment({ author, publishedAt }) {
  const publishedAtFormatted = format(
    publishedAt,
    "d 'de' LLLL 'às' HH:mm'h'",
    { locale: ptBR }
  );

  const publisheddateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true,
  });
  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src={author.avatarUrl} alt="" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>{author.name}</strong>
              <time
                title={publishedAtFormatted}
                dateTime={publishedAt.toISOString()}
              >
                {publisheddateRelativeToNow}
              </time>
            </div>

            <button title="Deletar comentário">
              <Trash size={24} />
            </button>
          </header>

          <p>Muito bom Gustavo, parabéns!</p>
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
