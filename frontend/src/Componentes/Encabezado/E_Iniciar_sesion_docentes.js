import React from "react";
import Iniciar_sesion from "../Imagenes/logo.jpg";
function E_Iniciar_sesion_docentes() {
  return (
    <>
      <div className="encabezado">
        <div className="logo">
          <img src={Iniciar_sesion} alt="logo" />
          <div className="Titulo">
            <h1> DA EL PRIMER PASO </h1>
          </div>
        </div>
      </div>
    </>
  );
}
export default E_Iniciar_sesion_docentes;
