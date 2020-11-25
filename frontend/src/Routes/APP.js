import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Formulario from "../Pages/Formulario";
import Iniciar_sesion_estudiantes from "../Pages/Iniciar_sesion_estudiantes";
import Notificacaiones_estudiantes from "../Pages/Notificaciones_estudiantes";
import Notificacaiones_docentes from "../Pages/Notificaciones_docentes";
import Opción_registro from "../Pages/Opción_registro";
import Pagina_docentes from "../Pages/Pagina_docentes";
import Pagina_estudiantes from "../Pages/Pagina_estudiantes";
import Pagina_principal from "../Pages/Pagina_principal";
import Registrarse_estudiantes from "../Pages/Registrarse_estudiantes";
import Respuesta from "../Pages/Respuesta";
import Registrarse_docentes from "../Pages/Registrarse_docentes";
import Iniciar_sesion_docentes from "../Pages/Iniciar_sesion_docentes";

export default class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Pagina_principal} />
          <Route
            exact
            path="/Pagina_estudiantes"
            component={Pagina_estudiantes}
          />
          <Route exact path="/Pagina_docentes" component={Pagina_docentes} />
          <Route exact path="/Opción_registro" component={Opción_registro} />
          <Route
            exact
            path="/Iniciar_sesion_estudiantes"
            component={Iniciar_sesion_estudiantes}
          />
          <Route
            exact
            path="/Registrarse_estudiantes"
            component={Registrarse_estudiantes}
          />
          <Route
            exact
            path="/Registrarse_docentes"
            component={Registrarse_docentes}
          />
          <Route
            exact
            path="/Iniciar_sesion_estudiantes"
            component={Iniciar_sesion_estudiantes}
          />
          <Route exact path="/Formulario" component={Formulario} />
          <Route exact path="/Respuesta" component={Respuesta} />
          <Route
            exact
            path="/Notificaciones_estudiantes"
            component={Notificacaiones_estudiantes}
          />
          <Route
            exact
            path="/Notificaciones_docentes"
            component={Notificacaiones_docentes}
          />
          <Route
            exact
            path="/Iniciar_sesion_docentes"
            component={Iniciar_sesion_docentes}
          />
        </Switch>
      </BrowserRouter>
    );
  }
}
