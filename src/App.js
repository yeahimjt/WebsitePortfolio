import React, {useState, createContext} from 'react'
import Homepage from './containers/Homepage';
import Nav from './components/Nav';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import Profile from './containers/Profile';
import Projects from './containers/Projects';
// ..
AOS.init();
export const ThemeContext = createContext(null)

function App() {
  const [theme, setTheme] = useState('light')
  const toggleTheme = () => {
    setTheme((cur)=> (cur==="light"?"dark":"light"))
  }
  return (
    <ThemeContext.Provider value={{theme, toggleTheme}}>
      <div className="w-screen overflow-x-hidden">
        <div className="overflow-hidden w-full">
        <Nav/>
        </div>
        <Homepage />
        <Projects />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
