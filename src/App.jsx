import React, { useContext} from 'react'
import { BrowserRouter,Routes, Route } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import { routesNavegation } from './Navegation/Routes'
import { DarkContext } from "./Context/DarkContext"


function App() {
  const { isDarkMode } = useContext(DarkContext);

  return (
  
    <BrowserRouter>
      <div className={ isDarkMode? "dark" : null }>
        <Navbar />
        <Routes>
          {routesNavegation.map(({ id, path, Component }) => (
            <Route key={id} path={path} element={<Component />} />
          ))}
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
