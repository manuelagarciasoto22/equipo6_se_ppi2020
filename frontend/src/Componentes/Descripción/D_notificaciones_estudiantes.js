import React from "react";
import reloj from "../Imagenes/reloj.jpg.png";
import flecha from "../Imagenes/flecha.png";
import { Link } from "react-router-dom";
function D_notificaciones_estudiantes() {
  return (
    <>
      <div className="notificaciones">
        <h1> MIS NOTIFICACIONES </h1>
        &nbsp;
        <div className="textos2">
          <p>
            <img src={reloj} alt="reloj" align="left" className="reloj" />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Su caso ya fue reportado, obtendra
            una respuesta pronto.
          </p>
          &nbsp;
          <p>
            <img src={flecha} alt="flecha" align="left" className="flecha" />

            <p>
              La solicitud ya fue respondida, ya puedes comunicarte con tu
              docente.{" "}
            </p>
            <p align="center">
              <button type="button" class="responder" align="center">
                {" "}
                Responder
              </button>{" "}
            </p>
          </p>
        </div>
      </div>
    </>
  );
}
export default D_notificaciones_estudiantes;
