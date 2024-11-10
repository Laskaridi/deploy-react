import Header from "./components/Header";
import styles from './components/Netflix.module.css';
import Main from "./components/content/Main";
import Sticker from "./components/Sticker";
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import PageAccount from "./components/PageAccount";

function App() {
  return (
    <>
    <Router>
   
    <div className={styles.background}>
     <Header></Header>
     <Routes>
       <Route path='/account' element={<PageAccount></PageAccount>}></Route>
     </Routes>
     <Main></Main>
     <Sticker></Sticker>
     </div>
     </Router>
    </>
  )
}

export default App
