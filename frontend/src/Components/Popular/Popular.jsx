import React from "react";
import "./popular.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "bootstrap/dist/js/bootstrap.min.js";
import I1 from "../Assets/hmgoepprod.jpeg";
import I2 from "../Assets/hmgoepprod (4).jpeg";
import I3 from "../Assets/hmgoepprod (1).jpeg";
import I4 from "../Assets/hmgoepprod (3).jpeg";
import I5 from "../Assets/hmgoepprod (2).jpeg";

const Popular = () => {
  return (
    <div>
      <div class="text-center p-5">
        <h3>MAS POPULAR</h3>
      </div>
      <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between px-5 mx-5 marketing">
        <div class="col-lg-2 text-center">
          <a href="/">
            <img
              className="bd-placeholder-img rounded-circle img-popu"
              src={I1}
              width="140px"
              height="140px"
              alt=""
            />
          </a>
          <a href="/" class="pic">
            <p class="text-center txt-img">ROPA SUPERIOR MUJER</p>
          </a>
        </div>
        <div class="col-lg-2 text-center">
          <a href="/">
            <img
              className="bd-placeholder-img rounded-circle img-popu pant"
              src={I2}
              width="140px"
              height="140px"
              alt=""
            />
          </a>
          <a href="/" class="pic">
            <p class="text-center txt-img">PANTALONES MUJER</p>
          </a>
        </div>
        <div class="col-lg-2 text-center">
          <a href="/">
            <img
              className="bd-placeholder-img rounded-circle img-popu"
              src={I3}
              width="140px"
              height="140px"
              alt=""
            />
          </a>
          <a href="/" class="pic">
            <p class="text-center txt-img">ROPA SUPERIOR HOMBRE</p>
          </a>
        </div>
        <div class="col-lg-2 text-center">
          <a href="/">
            <img
              class="bd-placeholder-img rounded-circle img-popu pant"
              src={I4}
              width="140px"
              height="140px"
              alt=""
            />
          </a>
          <a href="/" class="pic">
            <p class="text-center txt-img">PANTALONES HOMBRE</p>
          </a>
        </div>
        <div class="col-lg-2 text-center">
          <a href="/">
            <img
              class="bd-placeholder-img rounded-circle img-popu"
              src={I5}
              width="140px"
              height="140px"
              alt=""
            />
          </a>
          <a href="/" class="pic">
            <p class="text-center txt-img">ACCESORIOS</p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Popular;
