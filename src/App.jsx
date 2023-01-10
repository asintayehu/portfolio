import React, { createContext, useState } from 'react'
import Header from './Header/Header'
import ReactSwitch from 'react-switch';

export const ThemeContext = createContext(null);
 
const App = () => {
  const [theme, setTheme] = useState(null);

  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  }
  
  return (
      <ThemeContext.Provider value={{theme, toggleTheme}}>
        <div className="App" id={theme}>
            <Header/>
            <ReactSwitch onChange={toggleTheme} checked={theme === 'dark'}/>
        </div>
    </ThemeContext.Provider>
  )
}

export default App