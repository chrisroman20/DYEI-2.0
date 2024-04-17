import React from 'react'
import './menu.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap/dist/js/bootstrap.min.js';


const Menu = () => {
  return (
    <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between px-5 barrita">
    <a class="btn" href="/mens">HOMBRE</a>
    <a class="btn" href="/womens">MUJER</a>
    <a class="btn" href="/kids">NIÑO</a>
    <a class="btn" href="/shoes">CALZADO</a>
    <a class="btn" href="/hats">GORRAS</a>
  </div>
  )
}

export default Menu;