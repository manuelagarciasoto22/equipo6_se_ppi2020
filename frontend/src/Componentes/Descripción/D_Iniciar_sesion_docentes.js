import React from "react";
import { Link } from "react-router-dom";
function D_Iniciar_sesion_docentes() {
  return (
    <>
      <h2 align="center">Iniciar sesion docentes/Psicologos </h2>
      <div class="contenedor">
        <div class="row">
          <div class="col-md-3"></div>
          <div class="col-md-6">
            <div className="container formulario mt-5">
              <form class="elemento elemento1">
                <div class="Email">
                  <label for="exampleInputEmail1">Email</label>
                  <input
                    type="email"
                    class="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                  ></input>
                  <small id="emailHelp" class="form-text text-muted">
                    Nunca compartiremos su correo electrónico con nadie más.
                  </small>
                  <div class="contraseña">
                    <label for="exampleInputPassword1">Contraseña</label>
                    <input
                      type="password"
                      class="form-control"
                      id="exampleInputPassword1"
                    ></input>
                    <div class="form-group form-check">
                      <input
                        type="checkbox"
                        class="form-check-input"
                        id="exampleCheck1"
                      ></input>
                      <label class="form-check-label" for="exampleCheck1">
                        Check me out
                      </label>
                    </div>
                    <div align="center">
                      <button type="submit" class="btn btn-primary">
                        <Link to="Pagina_docentes" class="btn-primary">
                          {" "}
                          Iniciar sesión{" "}
                        </Link>
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default D_Iniciar_sesion_docentes;
