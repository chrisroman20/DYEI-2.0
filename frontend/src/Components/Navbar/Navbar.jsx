import React from "react";
import "./Navbar.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import logo from '../Assets/bazar.png';

const Navbar = () => {
  return (
    <>
      <header class="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3">
        <div class="col-md-3 text-start rounded mx-3">
          <div class="input-group mb-3">
            <input
              type="text"
              class="form-control"
              placeholder="Buscar productos"
              aria-label="Buscar productos"
              aria-describedby="button-addon2"
              id="inpt"
            />
            <button class="btn" type="button" id="button-addon2">
              <i class="bi bi-search"></i>
            </button>
          </div>
        </div>

        <div class="col-md-3 p-0 m-0 text-center">
          <a
            href="/"
            class="d-inline-flex link-body-emphasis text-decoration-none"
          >
            <img src={logo} alt="LOGO" width="75px" class="p-0 m-0" />
          </a>
        </div>
        <div class="col-md-3 text-end mx-3">
          <a href="/favs" class="btn main">
            <i class="bi bi-heart"></i>
          </a>
          <a href="/cart" class="btn main">
            <i class="bi bi-cart"></i>
          </a>
          <a href="/login" class="btn main">
            <i class="bi bi-person-circle"></i>
          </a>
        </div>
      </header>
    </>
  );
};

export default Navbar;
