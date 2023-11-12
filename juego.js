const preguntas = [
    { pregunta: "Pregunta 1: ¿Cuál es la edad de Leandro?", respuesta: "29" },
    { pregunta: "Pregunta 2: ¿Su profesión es IT Support?", respuesta: "si" },
    { pregunta: "Pregunta 3: ¿Es estudiante?", respuesta: "si" },
    { pregunta: "Pregunta 4: ¿En qué universidad estudia?", respuesta: "UADE" },
    { pregunta: "Pregunta 5: ¿Cuál es su mail?", respuesta: "leandrozalcman@gmail.com" },
    { pregunta: "Pregunta 6: ¿Habla idioma Inglés?", respuesta: "si" },
    { pregunta: "Pregunta 7: ¿Qué nivel de Office tiene?", respuesta: "intermedio" },
    { pregunta: "Pregunta 8: ¿Qué nivel de redes tiene?", respuesta: "avanzado" },
    { pregunta: "Pregunta 9: ¿Su actual trabajo es en SNP Group?", respuesta: "si" },
    { pregunta: "Pregunta 10:¿Comenzó trabajando en Akita Electrónica?", respuesta: "si" },
];

let puntos = 0;
let respuestasCorrectas = 0;
let preguntasContestadas = 0;

const divPreguntas = document.getElementById('preguntas');
const inputRespuesta = document.getElementById('respuesta');
const puntosDisplay = document.getElementById('puntos');
const mensajeDisplay = document.getElementById('mensaje');

function mostrarPregunta() {
    if (preguntasContestadas >= preguntas.length) {
        finJuego();
        return;
    }

    divPreguntas.innerText = preguntas[preguntasContestadas].pregunta;
}

function comprobarRespuesta() {
    const respuesta = inputRespuesta.value.toLowerCase().trim();
    const respuestaCorrecta = preguntas[preguntasContestadas].respuesta.toLowerCase();

    if (respuesta === respuestaCorrecta) {
        puntos += 10;
        respuestasCorrectas++;
        mensajeDisplay.innerText = '¡Respuesta correcta!';
        mensajeDisplay.classList.add('correcto');
        mensajeDisplay.classList.remove('incorrecto');
    } else {
        mensajeDisplay.innerText = '¡Respuesta incorrecta!';
        mensajeDisplay.classList.add('incorrecto');
        mensajeDisplay.classList.remove('correcto');
    }

    puntosDisplay.innerText = `Puntos: ${puntos}`;
    preguntasContestadas++;

    if (preguntasContestadas === preguntas.length) {
        if (respuestasCorrectas >= 6) {
            mensajeDisplay.innerText = `¡Has ganado el juego con ${puntos} puntos!`;
            mensajeDisplay.classList.add('final');
        } else {
            mensajeDisplay.innerText = `¡Has perdido el juego. Inténtalo de nuevo!`;
            mensajeDisplay.classList.add('final');
        }
    }

    mostrarPregunta();
    inputRespuesta.value = '';
}

function reiniciarJuego() {
    puntos = 0;
    respuestasCorrectas = 0;
    preguntasContestadas = 0;
    mensajeDisplay.innerText = '';
    mensajeDisplay.classList.remove('correcto', 'incorrecto', 'final');
    puntosDisplay.innerText = 'Puntos: 0';
    mostrarPregunta();
    inputRespuesta.value = '';
}

function finJuego() {
    divPreguntas.innerText = '';
    inputRespuesta.style.display = 'none';
}

mostrarPregunta();
