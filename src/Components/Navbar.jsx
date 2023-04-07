import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { DarkContext } from '../Context/DarkContext';


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {
  const { isDarkMode, handleMode } = useContext (DarkContext);


    
  const handleDarkMode = () =>{
    handleMode();
  
  }

  return (
    <nav className={isDarkMode? "dark" : null}>
      {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
      
      <div className='logo'>
          <img src='./images/planDenta.jpg' alt='logo' className='planDental'/>
      </div>
      <Link to="/">Home</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/favs">Favorites</Link>

      <button onClick={handleDarkMode}>Dark mode </button>
    </nav>
  )
} 

export default Navbar  
