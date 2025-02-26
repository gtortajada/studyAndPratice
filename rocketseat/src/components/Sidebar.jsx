import { PencilLine } from "@phosphor-icons/react";

import styles from "./Sidebar.module.css";
import Avatar from "./Avatar";

export function Sidebar() {
    return (
        <aside className={styles.sidebar}>
            <img 
            className={styles.cover} 
            src="https://images.unsplash.com/photo-1604964432806-254d07c11f32?w=500&q=50&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZGV2ZWxvcGVyfGVufDB8fDB8fHww" 
            />

            <div className={styles.profile}>
                <Avatar hasBorder
                src="https://github.com/gtortajada.png"
                />

                <strong>Gustavo Tortajada</strong>
                <span>Web Developer</span>
            </div>

            <footer>
                <a href='#'>
                    < PencilLine size={20} />
                    Editar seu perfil 
                </a>
            </footer>
        </aside>
    )
}