import React from "react";
import Encabezado from "../Componentes/Encabezado/E_Pagina_principal";
import Descripcion from "../Componentes/Descripción/D_Pagina_principal";
import "../styles.css";

function Pagina_principal() {
  return (
    <>
      <Encabezado />
      <Descripcion />
    </>
  );
}
export default Pagina_principal;
