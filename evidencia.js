function actualizarHora() {
  const reloj = document.getElementById("time");
  const ahora = new Date();

  let hora = ahora.getHours();
  const minutos = String(ahora.getMinutes()).padStart(2, "0");
  const segundos = String(ahora.getSeconds()).padStart(2, "0");
  const periodo = hora >= 12 ? "PM" : "AM";

  hora = hora % 12;
  hora = hora ? hora : 12;

  reloj.textContent = `${hora}:${minutos}:${segundos} ${periodo}`;
}

function actualizarFecha() {
  const fechaActual = document.getElementById("date");
  const ahora = new Date();

  const dia = String(ahora.getDate()).padStart(2, "0");
  const mes = String(ahora.getMonth() + 1).padStart(2, "0");
  const anio = ahora.getFullYear();

  fechaActual.textContent = `${dia} / ${mes} / ${anio}`;
}

setInterval(actualizarHora, 1000);
actualizarHora();
actualizarFecha();

const params = new URLSearchParams(window.location.search);

const numero = params.get("numero");
const titulo = params.get("titulo");
const descripcion = params.get("descripcion");
const tipo = params.get("tipo");
const fecha = params.get("fecha");
const resultados = params.get("resultados");
const reflexion = params.get("reflexion");
const anexos = params.get("anexos");
const pdf = params.get("pdf");

document.getElementById("evidenceTitle").textContent =
  titulo || "Evidencia no encontrada";

document.getElementById("evidenceDescription").textContent =
  descripcion || "No se encontró descripción para esta evidencia.";

document.getElementById("taskDescription").textContent =
  descripcion || "---";

document.getElementById("taskDate").textContent =
  fecha || "---";

document.getElementById("taskResults").textContent =
  resultados || "---";

document.getElementById("taskReflection").textContent =
  reflexion || "---";

document.getElementById("taskAnnexes").textContent =
  anexos || "---";

document.getElementById("taskType").textContent =
  tipo || "---";

if (pdf) {
  document.getElementById("pdfViewer").src = pdf;
} else {
  document.getElementById("pdfViewer").src = "";
}