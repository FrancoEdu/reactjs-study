import styles from './Sidebar.module.css'

export function Sidebar() {
    return(
        <aside className={styles.sidebar}>
            <img className={styles.cover}
                src="https://images.unsplash.com/photo-1605379399642-870262d3d051?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80"
            />
            <div className={styles.profile}>
                <strong>Eduardo Franco</strong>
                <span>Web developer</span>
            </div>
            <footer>
                <a href="#">
                    Editar seu perfil
                </a>
            </footer>
        </aside>
    );
}