import React from "react";
import { Link } from "react-router-dom";

function E_Notificaciones_estudiantes() {
  return (
    <>
      <div class="row">
        <div class="col-md-2"></div>
        <div class="col-md-8">
          <p align="right">
            <button type="button" class="volver">
              <Link to="Pagina_estudiantes" class="volver">
                {" "}
                Volver{" "}
              </Link>
            </button>
          </p>
        </div>
        <div class="col-md-2"></div>
      </div>
    </>
  );
}
export default E_Notificaciones_estudiantes;
