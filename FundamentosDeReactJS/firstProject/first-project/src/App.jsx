import { Header } from './components/Header';
import { Post } from './Post';
import { Sidebar } from './components/Sidebar';
import styles from './App.module.css'
export function App() {
  return (
    <div>
      <Header />
    
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post 
            author="Eduardo Franco" 
            content="Eu te amo, Letícia"
          />
          <Post
            author="Letícia Zancani"
            content="Um texto muito legal"
          />
        </main>
      </div>
    </div> // quando tiver mais de um componente igual seguidos, é necessário algo envolvendo eles
  )
}
