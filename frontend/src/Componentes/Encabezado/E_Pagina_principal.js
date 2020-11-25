import React from "react";
import Pagina_principal from "../Imagenes/logo.jpg";
import { Link } from "react-router-dom";
function E_Pagina_principal() {
  return (
    <>
      <div class="container">
        <div class="row">
          <div class="col-md-2"></div>
          <div class="col-md-8">
            <div class="panel panel-default">
              <div className="menu">
                <div className="logo">
                  <img src={Pagina_principal} alt="logo" />
                </div>

                <div
                  class="btn-group"
                  role="group"
                  aria-label="Button group with nested dropdown"
                >
                  <div class="btn-group" role="group">
                    <button
                      id="btnGroupDrop1"
                      type="button"
                      class="btn btn-secondary dropdown-toggle"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      INICIAR SESION
                    </button>
                    <div class="dropdown-menu" aria-labelledby="btnGroupDrop1">
                      <a class="dropdown-item" href="#">
                        <Link to="Iniciar_sesion_estudiantes">
                          Iniciar sesion como estudiante
                        </Link>
                      </a>
                      <a class="dropdown-item" href="#">
                        <Link to="Iniciar_sesion_docentes">
                          {" "}
                          Iniciar sesion como Docente/Psicologo{" "}
                        </Link>
                      </a>
                    </div>
                  </div>

                  <button type="button" class="btn btn-secondary">
                    <Link to="Opción_registro" class="btn-secondary">
                      {" "}
                      REGISTRARSE{" "}
                    </Link>
                  </button>

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
      {/* <div className="menu">
        <div className="logo">
          <img src={Pagina_principal} alt="logo" />
        </div>

        <div
          className="btn-group"
          role="group"
          aria-label="Button group with nested dropdown"
        >
          <button type="button" className="btn btn-secondary boton1">
          <Link to="Opción_registro"> INICIAR SESIÓN </Link>
          </button>
          <button type="button" className="btn btn-secondary boton1">
            <Link to="Opción_registro"> REGISTRARSE </Link>
          </button>
          <button
            id="btnGroupDrop1"
            type="button"
            className="btn btn-secondary dropdown-toggle boton1"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            EDUCATE
          </button>
          <div className="dropdown-menu" aria-labelledby="btnGroupDrop1">
            <a className="dropdown-item" href="/">
              {" "}
              ¿ Qué es el bullying ?{" "}
            </a>
            <a className="dropdown-item" href="/">
              {" "}
              ¿ Cómo detectar una víctima ?{" "}
            </a>
            <a className="dropdown-item" href="/">
              {" "}
              Consecuencias del bullying{" "}
            </a>
            <a className="dropdown-item" href="/">
              {" "}
              ¿ A quién puedo acudir ?{" "}
            </a>
          </div>
        </div>
      </div> */}
    </>
  );
}
export default E_Pagina_principal;
