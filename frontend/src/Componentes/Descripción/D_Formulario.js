import React from "react";
import { Link } from "react-router-dom";
function D_Formulario() {
  return (
    <>
      <div class="row">
        <div class="col-md-2"></div>
        <div class="col-md-8">
          <form>
            <div class="form-group">
              <label for="exampleFormControlInput1"> Nombre</label>
              <input
                type="nombre"
                class="form-control"
                id="exampleFormControlInput1"
                placeholder="Daniela"
              ></input>
            </div>

            <div class="form-group">
              <label for="exampleFormControlInput1"> Apellidos</label>
              <input
                type="apelidos"
                class="form-control"
                id="exampleFormControlInput1"
                placeholder="Caraballo Osorio"
              ></input>
            </div>

            <div class="form-group">
              <label for="exampleFormControlSelect1">
                ¿ A quién desea acudir ?
              </label>
              <select class="form-control" id="exampleFormControlSelect1">
                <option>Psicólogo</option>
                <option>Comité de convivencia</option>
                <option>Aguirre Lozano Eulalia Mercedes</option>
                <option>Arboleda Martinez Liliana Elena</option>
                <option>Asprilla Copete Yahaira</option>
                <option>Cardenas Monsalve Oscar Iván</option>
                <option>Cardona Flórez Yorman Alberto</option>
                <option>Castaño Aristizabal Sandra Lía</option>
                <option>Castaño Cardona Luis Andrés</option>
                <option>Castro Gil Yesid Miguel</option>
                <option>Chalarca Pineda Carlos Andrés</option>
                <option>Delgado Córdoba Denys Yadira</option>
                <option>Duque Torres Carlos Alberto</option>
                <option>García Duque Nancy Eloila</option>
                <option>Giraldo Salazar Oscar Giovanni</option>
                <option>Giraldo Zapata Blanca Margarita</option>
                <option>Hernández Durango Yor Mary</option>
                <option>Higuita Giraldo Edith Patricia</option>
                <option>Idárraga Agudelo John Jairo</option>
                <option>Londoño Agudelo Carlos Andrés</option>
                <option>Londoño Andrade Julio Cesar</option>
                <option>Palacios Zapata Madeleyn</option>
                <option>Patiño Suaza Rosa Amelia</option>
                <option>Peña Ríos Esteban</option>
                <option>Perea Córdoba Eiden Fabiola</option>
                <option>Perez Casas Carlos Federico</option>
                <option>Perez Lopez Liliana Leonor</option>
                <option>Posada Giraldo Homero</option>
                <option>Ramirez Castaño Luz Enid</option>
                <option>Restrepo Parra Rocío Angélica</option>
                <option>Reyes Castaño Bibiana María</option>
                <option>Sanchez Lopera Maricela</option>
                <option>Sierra Hernández Alba Lucía</option>
                <option>Uribe Valencia María Camila</option>
              </select>
            </div>

            <div class="form-group">
              <label for="exampleFormControlTextarea1">
                Describa su situación aquí
              </label>
              <textarea
                class="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
              ></textarea>
            </div>

            <div class="form-group">
              <label for="exampleFormControlSelect2">
                ¿ Su mensaje será anónimo ?
              </label>
              <select
                multiple
                class="form-control"
                id="exampleFormControlSelect2"
              >
                <option>Sí</option>
                <option>No</option>
              </select>
            </div>
            <div align="center">
              <button type="submit" class="btn btn-primary">
                <Link to="/Respuesta" class="btn-primary">
                  {" "}
                  Enviar{" "}
                </Link>
              </button>
              <button type="submit" class="btn btn-primary">
                <Link to="Pagina_estudiantes" class="btn-primary">
                  {" "}
                  Volver{" "}
                </Link>
              </button>
            </div>
          </form>
        </div>
        <div class="col-md-2"></div>
      </div>
    </>
  );
}
export default D_Formulario;
