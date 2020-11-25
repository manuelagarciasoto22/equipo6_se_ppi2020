import React from "react";
import Encabezado from "../Componentes/Encabezado/E_pagina_estudiantes";
import Descripcion from "../Componentes/Descripción/D_pagina_estudiantes";
import "../styles.css";

function Pagina_estudiantes() {
  return (
    <>
      <Encabezado />
      <Descripcion />
    </>
  );
}
export default Pagina_estudiantes;
