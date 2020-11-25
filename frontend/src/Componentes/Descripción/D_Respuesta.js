import React from "react";
import { Link } from "react-router-dom";
function D_Respuesta() {
  return (
    <>
      <div class="row">
        <div class="col-md-2"></div>
        <div class="col-md-8">
          <div className="Respuesta">
            <h2> ¡SU FORMULARIO SE ENVIÓ CORRECTAMENTE! </h2>
          </div>
          <button type="button" class="btn btn-dark">
            <Link to="Pagina_estudiantes" class="btn-dark">
              {" "}
              Volver{" "}
            </Link>
          </button>
        </div>
        <div class="col-md-2"></div>
      </div>
    </>
  );
}
export default D_Respuesta;
