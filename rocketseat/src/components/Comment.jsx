import { ThumbsUp, Trash } from "@phosphor-icons/react";

import styles from "./Comment.module.css";
import Avatar from "./Avatar";
export function Comment() {
  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://github.com/diego3g.png" alt="" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Devon Lane</strong>
              <time
                title="24 de fevereiro às 14:48h"
                dateTime="2025-02-24 14:48:12"
              >
                Cerca de 1 hora atrás
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
