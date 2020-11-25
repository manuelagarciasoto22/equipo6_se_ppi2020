import React from "react";
import imagen1 from "../Imagenes/imagen1.jpg";
import imagen2 from "../Imagenes/imagen2.jpg";
import imagen3 from "../Imagenes/imagen3.jpg";
import imagen4 from "../Imagenes/imagen4.jpg";
function D_Pagina_docentes() {
  return (
    <>
      <div class="Titulo">
        <div class="jumbotron">
          <h1 class="text-center"> DA EL PRIMER PASO </h1>
        </div>
      </div>
      <div class="container">
        <div class="row">
          <div class="col-md-3"></div>
          <div class="col-md-6">
            <div class="panel panel-default">
              <div className="Titulo">
                <div className="Subtitulos">
                  <h3> ¿ Qué es el bullying ? </h3>
                  <div className="Texto1">
                    <p>
                      <img src={imagen1} alt="imagen1" align="right" />
                      El bullying o acoso escolar se refiere a un tipo de
                      comportamiento violento e intimidatorio que se ejerce de
                      manera verbal, física o psicológica entre niños y
                      adolescentes durante la etapa escolar.
                    </p>

                    <div className="Subtitulos">
                      <h3>¿ Cómo detectar una víctima ? </h3>
                      <div className="Texto2">
                        <p>
                          <img src={imagen2} alt="imagen2" align="left" />
                          Las víctimas de acoso escolar suelen caracterizarse
                          por presentar un constante aspecto contrariado,
                          triste, deprimido o afligido, por faltar
                          frecuentemente y tener miedo a las clases, o por tener
                          un bajo rendimiento escolar. En el apartado físico,
                          estas víctimas suelen somatizar en su cuerpo su
                          problema, presentando dificultad para conciliar el
                          sueño, dolores en el estómago, el pecho, de cabeza,
                          náuseas y vómitos, así como llanto constante. Sin
                          embargo, esto no quiere decir que todos los niños que
                          presenten este cuadro estén sufriendo un acoso
                          escolar. Antes de dar un diagnóstico al problema, es
                          necesario investigar y observar más al niño.
                        </p>

                        <div className="Subtitulos">
                          <h3> Consecuencias del bullying </h3>
                          <div className="Texto3">
                            <p>
                              <img src={imagen3} alt="imagen3" align="right" />
                              Un estudiante joven o niño puede presentar alguna
                              de estas características al sufrir de acoso
                              escolar - Baja autoestima. - Actitudes pasivas. -
                              Trastornos emocionales. - Problemas
                              psicosomáticos. - Depresión, ansiedad y
                              pensamientos suicidas. - Pérdida de interés por
                              los estudios, lo que puede desencadenar en un
                              menor rendimiento y fracaso escolar. - Aparición
                              de trastornos fóbicos. - Sentimientos de
                              culpabilidad. - Alteraciones de la conducta:
                              intromisión, introversión, timidez. aislamiento
                              social y soledad. - Problemas en las relaciones
                              sociales y familiares. - Baja satisfacción
                              familiar. - Baja responsabilidad, actividad y
                              eficacia. - Síndrome de estrés postraumático. -
                              Rechazo a la escuela. - Manifestaciones neuróticas
                              y de ira. - Faltas de asistencia a la escuela e
                              incluso abandono de los estudios.
                            </p>

                            <div className="Subtitulos">
                              <h3> ¿ Cómo puedo ayudar ? </h3>
                              <div className="Texto4">
                                <p>
                                  <img
                                    src={imagen4}
                                    alt="imagen4"
                                    align="left"
                                  />
                                  Para ayudar a una persona victima de bullying
                                  hay que tener en cuenta los siguientes pasos y
                                  asegurate de que confíe plenamente en ti. -
                                  Habla con la persona que sufre el bullying. -
                                  Escucha sin sacar conclusiones. - Hazles saber
                                  que te preocupa su bienestar. - Habla con un
                                  adulto en quien confíes. - Toma una posición
                                  como grupo. - No repitas rumores. - Enfrenta
                                  al bullying. - ¡Educa a otros! - Hacerle saber
                                  al joven que no debe avergonzarse. - Combatir
                                  la sensación de culpabilidad. - Felicitar al
                                  joven por expresarse. - Evitar restarle
                                  importancia. - Mantener comunicación frecuente
                                  con los maestros. - Educar en inteligencia
                                  emocional. - Enseñarle a primar la calidad de
                                  las relaciones.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-3"></div>
        </div>
      </div>
    </>
  );
}
export default D_Pagina_docentes;
