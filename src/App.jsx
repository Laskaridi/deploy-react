import Header from "./components/Header"
import styles from './components/Netflix.module.css';
import Main from "./components/content/Main";
import Sticker from "./components/Sticker";

function App() {
  return (
    <>
    <div className={styles.background}>
     <Header></Header>
     <Main></Main>
     <Sticker></Sticker>
     </div>
    </>
  )
}

export default App
