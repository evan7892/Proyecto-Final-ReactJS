import React from 'react'
import CartWidget from './CartWidget'
import { Link } from 'react-router-dom'

 const NavBar = () => {
  
  return (
      <>
        <header>
            <nav className='main-nav'>
                <ul id='main-menu' className='main-menu'>
                <Link to="/">
                    <h1 className='nav-brand'>ELITE GAMING</h1>
                </Link>    
                    <li className='main-menu__item'>
                        <a href='#' className='main-menu__link'>Home</a>
                    </li>
                    <Link to="/" className='productos-navbar main-menu__link'>Productos</Link>
                    <li className='main-menu__item'>
                        <a href='#' className='main-menu__link'>Somos</a>
                    </li>
                    <li className='main-menu__item'>
                        <a href='#' className='main-menu__link'>Contacto</a>
                    </li>
                    <CartWidget/>
                </ul>
            </nav>
            <h3 className='titulos'>Productos</h3>
        </header>
        <section>
            <nav className='nav ml-4 '>
                <Link className="nav-link liNav active" to="/category/Teclados">TECLADOS</Link>
                <Link className="nav-link liNav" to="/category/Mouse">MOUSE</Link>
                <Link className="nav-link liNav" to="/category/Webcams">WEBCAMS</Link>
                <Link className="nav-link liNav" to="/category/Diademas">DIADEMAS</Link>
            </nav> 
        </section>
    </>
  )
}

export default NavBar
