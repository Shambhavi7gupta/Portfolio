import styles from "./App.module.css";
import { Hero } from "./components/Hero/Hero";
import { Navbar } from "./components/Navbar/Navbar";
import {Experience} from "./components/Experience/Experience";
import { Skills } from "./components/Skills/Skills";
import { Projects } from "./components/Projects/Projects";
import { Contact } from "./components/Contact/Contact";
import { Achievement } from "./components/Achievement/Achievement";
import { Communities } from "./components/Communities/Communities";
function App() {
 

  return (
    <div className={styles.App}>
    <Navbar/>
    <Hero/>
    <Experience/>
    <Skills/>
    <Projects/>
    <Achievement/>
    <Communities/>
    <Contact/>
   
    </div>
  )
}

export default App
