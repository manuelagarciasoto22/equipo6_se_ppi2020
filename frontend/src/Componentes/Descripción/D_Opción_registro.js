import React from "react";
import { Link } from "react-router-dom";
function D_Opción_registro() {
  return (
    <>
      <div class="contenedor">
        <div class="row">
          <div class="col-md-3"></div>
          <div class="col-md-6">
            <div class="btn-group" role="group">
              <button
                id="btnGroupDrop1"
                type="button"
                class="btn btn-secondary dropdown-toggle"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Selecciona
              </button>
              <div class="dropdown-menu" aria-labelledby="btnGroupDrop1">
                <a class="dropdown-item" href="#">
                  <Link to="Registrarse_estudiantes"> Estudiante </Link>
                </a>
                <a class="dropdown-item" href="#">
                  <Link to="Registrarse_docentes"> Docente/psicólogo </Link>
                </a>
              </div>
            </div>
          </div>
          <div class="col-md-3"></div>
        </div>
      </div>
    </>
  );
}
export default D_Opción_registro;
