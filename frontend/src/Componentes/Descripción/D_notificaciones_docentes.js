import React from "react";
import correo from "../Imagenes/correo.png";
function D_notificaciones_docentes() {
  return (
    <>
      <div className="notificaciones">
        <h1> MIS NOTIFICACIONES </h1>
        <div class="row">
          <div class="col-md-6">
            <div className="textos3">
              <p>
                <img src={correo} alt="reloj" align="left" className="correo" />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Manuela García ha reportado un
                nuevo caso.
                <button type="button" class="responder">
                  Responder
                </button>
                <button type="button" class="aceptar">
                  Aceptar
                </button>
              </p>

              <p>
                <img
                  src={correo}
                  alt="flecha"
                  align="left"
                  className="correo"
                />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Daniela Caraballo ha reportado un
                nuevo caso.
                <button type="button" class="responder">
                  Responder
                </button>
                <button type="button" class="aceptar">
                  Aceptar
                </button>
              </p>
            </div>
          </div>
          <div class="col-md-3"></div>
          <div class="col-md-3"></div>
        </div>
      </div>
    </>
  );
}
export default D_notificaciones_docentes;
