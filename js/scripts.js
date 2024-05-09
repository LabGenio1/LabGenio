/*!
* Start Bootstrap - Modern Business v5.0.7 (https://startbootstrap.com/template-overviews/modern-business)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-modern-business/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project

function verificarRespuestas() {
  // Aquí iría la lógica para verificar las respuestas correctas
  // Por ejemplo, si la respuesta correcta de la pregunta 1 es "opcion1":
  var respuestaCorrecta1 = "opcion1";
  var respuesta1 = document.querySelector('input[name="pregunta1"]:checked').value;
  if(respuesta1 == respuestaCorrecta1) {
    // Marcar visualmente la respuesta correcta
    document.getElementById('respuesta1').style.color = 'green';
  } else {
    document.getElementById('respuesta1').style.color = 'red';
  }

  var respuestaCorrecta2 = "opcion2";
  var respuesta2 = document.querySelector('input[name="pregunta2"]:checked').value;
  if(respuesta2 == respuestaCorrecta2) {
    // Marcar visualmente la respuesta correcta
    document.getElementById('respuesta2').style.color = 'green';
  } else {
    document.getElementById('respuesta2').style.color = 'red';
  }

  var respuestaCorrecta3 = "opcion1";
  var respuesta3 = document.querySelector('input[name="pregunta3"]:checked').value;
  if(respuesta3 == respuestaCorrecta3) {
    // Marcar visualmente la respuesta correcta
    document.getElementById('respuesta3').style.color = 'green';
  } else {
    document.getElementById('respuesta3').style.color = 'red';
  }

  var respuestaCorrecta4 = "opcion3";
  var respuesta4 = document.querySelector('input[name="pregunta4"]:checked').value;
  if(respuesta4 == respuestaCorrecta4) {
    // Marcar visualmente la respuesta correcta
    document.getElementById('respuesta4').style.color = 'green';
  } else {
    document.getElementById('respuesta4').style.color = 'red';
  }

  var respuestaCorrecta5 = "opcion1";
  var respuesta5 = document.querySelector('input[name="pregunta5"]:checked').value;
  if(respuesta5 == respuestaCorrecta5) {
    // Marcar visualmente la respuesta correcta
    document.getElementById('respuesta5').style.color = 'green';
  } else {
    document.getElementById('respuesta5').style.color = 'red';
  }

  var respuestaCorrecta6 = "opcion2";
  var respuesta6 = document.querySelector('input[name="pregunta6"]:checked').value;
  if(respuesta6 == respuestaCorrecta6) {
    // Marcar visualmente la respuesta correcta
    document.getElementById('respuesta6').style.color = 'green';
  } else {
    document.getElementById('respuesta6').style.color = 'red';
  }

  var respuestaCorrecta7 = "opcion1";
  var respuesta7 = document.querySelector('input[name="pregunta7"]:checked').value;
  if(respuesta7 == respuestaCorrecta7) {
    // Marcar visualmente la respuesta correcta
    document.getElementById('respuesta7').style.color = 'green';
  } else {
    document.getElementById('respuesta7').style.color = 'red';
  }

  var respuestaCorrecta8 = "opcion2";
  var respuesta8 = document.querySelector('input[name="pregunta8"]:checked').value;
  if(respuesta8 == respuestaCorrecta8) {
    // Marcar visualmente la respuesta correcta
    document.getElementById('respuesta8').style.color = 'green';
  } else {
    document.getElementById('respuesta8').style.color = 'red';
  }

  var respuestaCorrecta9 = "opcion3";
  var respuesta9 = document.querySelector('input[name="pregunta9"]:checked').value;
  if(respuesta9 == respuestaCorrecta9) {
    // Marcar visualmente la respuesta correcta
    document.getElementById('respuesta9').style.color = 'green';
  } else {
    document.getElementById('respuesta9').style.color = 'red';
  }

  var respuestaCorrecta10 = "opcion1";
  var respuesta10 = document.querySelector('input[name="pregunta10"]:checked').value;
  if(respuesta10 == respuestaCorrecta10) {
    // Marcar visualmente la respuesta correcta
    document.getElementById('respuesta10').style.color = 'green';
  } else {
    document.getElementById('respuesta10').style.color = 'red';
  }
  // Repetir para las demás preguntas...
}