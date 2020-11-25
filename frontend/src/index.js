import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import $ from "jquery";
import popper from "../src/index.js";
import APP from "../src/Routes/APP";
import Pagina_principal from "../src/Pages/Pagina_principal";
import App from "../src/Routes/APP";
import Notificaciones_docentes from "../src/Pages/Notificaciones_docentes";
const rootElement = document.getElementById("root");

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  rootElement
);
