import React from "react";
import Pagina_docentes from "../Imagenes/logo.jpg";
import imgnotificaciones from "../Imagenes/notificaciones.jpg";
import { Link } from "react-router-dom";
function E_Pagina_docentes() {
  return (
    <>
      <div class="container">
        <div class="row">
          <div class="col-md-2"></div>
          <div class="col-md-8">
            <div class="panel panel-default">
              <div className="menu">
                <div className="logo">
                  <img src={Pagina_docentes} alt="logo" />
                </div>

                <div
                  class="btn-group"
                  role="group"
                  aria-label="Button group with nested dropdown"
                >
                  <button type="button" class="btn btn-secondary">
                    <Link to="Notificaciones_docentes">
                      <img src={imgnotificaciones} alt="notificaciones" />
                    </Link>
                  </button>
                  <button type="button" class="btn btn-secondary">
                    DOCENTE
                  </button>
                  <button type="button" class="btn btn-secondary">
                    <Link to="/" class="btn-secondary">
                      {" "}
                      IR A INICIO{" "}
                    </Link>
                  </button>

                  {/* <button type="button" class="btn btn-secondary">
                    <Link to="Opción_registro"> INICIAR SESIÓN </Link>
                  </button>

                  <button type="button" class="btn btn-secondary">
                    <Link to="Opción_registro"> REGISTRARSE </Link>
                  </button> */}
                  <div class="btn-group" role="group">
                    <button
                      id="btnGroupDrop1"
                      type="button"
                      class="btn btn-secondary dropdown-toggle"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      EDUCATE
                    </button>
                    <div class="dropdown-menu" aria-labelledby="btnGroupDrop1">
                      <a class="dropdown-item" href="#">
                        {" "}
                        ¿ Qué es el bullying ?{" "}
                      </a>
                      <a class="dropdown-item" href="#">
                        {" "}
                        ¿ Cómo detectar una víctima ?{" "}
                      </a>
                      <a class="dropdown-item" href="#">
                        {" "}
                        Consecuencias del bullying{" "}
                      </a>
                      <a class="dropdown-item" href="#">
                        {" "}
                        ¿ A quién puedo acudir ?{" "}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-2"></div>
        </div>
      </div>
    </>
  );
}
export default E_Pagina_docentes;
