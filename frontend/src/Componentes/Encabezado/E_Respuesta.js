import React from "react";
import Respuesta from "../Imagenes/logo.jpg";
function E_Respuesta() {
  return (
    <>
      <div className="encabezado">
        <div className="logo">
          <img src={Respuesta} alt="logo" />
          <div className="Titulo">
            <h1> DA EL PRIMER PASO </h1>
          </div>
        </div>
      </div>
    </>
  );
}
export default E_Respuesta;
