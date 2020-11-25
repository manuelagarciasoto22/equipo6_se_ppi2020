import React from "react";
import Formulario from "../Imagenes/logo.jpg";
function E_Formulario() {
  return (
    <>
      <div className="encabezado">
        <div className="logo">
          <img src={Formulario} alt="logo" />
          <div className="T_formulario">
            <h1> FORMULARIO DE AYUDA</h1>
          </div>
        </div>
      </div>
    </>
  );
}
export default E_Formulario;
