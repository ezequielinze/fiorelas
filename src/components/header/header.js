import './header.scss'

function Header() {
  return (
    <div className="contenedor">
      <h1 className='logo'>REFEZE</h1>
      <nav className='nav'>
        <li className='nav_menu'>INICIO</li>
        <li className='nav_menu'>PRODUCTOS</li>
        <li className='nav_menu'>CONTACTO</li>
        <li className='nav_menu'>POLITICA DE DEVOLUCION</li>
      </nav>



    </div>
  );
}

export default Header;