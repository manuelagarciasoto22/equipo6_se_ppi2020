import React from "react";
import { Link } from "react-router-dom";
function D_registrarse_estudiantes() {
  return (
    <>
      <div class="contenedor">
        <div class="row">
          <div class="col-md-3"></div>
          <div class="col-md-6">
            <h1>Registrar Estudiantes</h1>
            <div class="elemento elemento1 mt-5">
              <div class="Email">
                <label for="exampleInputEmail1">Tu nombre</label>
                <input
                  type="name"
                  class="form-control"
                  id="exampleInputname1"
                  aria-describedby="emailHelp"
                ></input>
                <small id="emailHelp" class="form-text text-muted"></small>
                <div class="contraseña">
                  <label for="exampleInputPassword1">Contraseña</label>
                  <input
                    type="password"
                    class="form-control"
                    id="exampleInputPassword1"
                  ></input>
                </div>
                <button type="submit" class="btn btn-primary">
                  <Link to="Pagina_estudiantes" class="btn-primary">
                    {" "}
                    Registrarse{" "}
                  </Link>
                </button>
              </div>
            </div>
          </div>
          <div class="col-md-3"></div>
        </div>
      </div>
    </>
  );
}
export default D_registrarse_estudiantes;
