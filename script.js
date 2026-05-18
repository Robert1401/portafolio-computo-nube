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
  const fecha = document.getElementById("date");
  const ahora = new Date();

  const dia = String(ahora.getDate()).padStart(2, "0");
  const mes = String(ahora.getMonth() + 1).padStart(2, "0");
  const anio = ahora.getFullYear();

  fecha.textContent = `${dia} / ${mes} / ${anio}`;
}

setInterval(actualizarHora, 1000);
actualizarHora();
actualizarFecha();

const unidades = {
  1: {
  titulo: "Unidad 1",
  descripcion: "Fundamentos y conceptos principales del cómputo en la nube.",
  evidencias: [
    [
      "1.1",
      "Arquitectura de red de computadoras",
      "Esquema hecho a mano donde se representa una red local con servidores, firewall, conexión a Internet y equipos cliente.",
      "Actividad",
      "29/01/2026",
      "Se elaboró un esquema de red que permitió identificar la conexión entre servidores, firewall, red local, salida a Internet y equipos cliente.",
      "Esta actividad me ayudó a comprender mejor cómo se organiza una red básica y cómo los dispositivos se conectan para permitir la comunicación y el acceso a servicios.",
      "Documento PDF con el esquema de arquitectura de red elaborado a mano.",
      "./Tareas/unidad 1/1.1-arquitectura-red.pdf"
    ],
    [
      "1.2",
      "Síntesis de las características del concepto de Cómputo en la Nube",
      "Síntesis personal sobre las principales características del cómputo en la nube, como escalabilidad, accesibilidad, disponibilidad, seguridad y flexibilidad.",
      "Síntesis",
      "04/02/2026",
      "Se identificaron y explicaron las características principales del cómputo en la nube, relacionándolas con el uso eficiente de recursos tecnológicos.",
      "Esta evidencia me permitió entender que la nube no solo sirve para almacenar información, sino también para trabajar con servicios flexibles, seguros y disponibles desde distintos lugares.",
      "Documento PDF con la síntesis escrita sobre las características del cómputo en la nube.",
      "./Tareas/unidad 1/1.2-sintesis-computo-nube.pdf"
    ],
    [
      "1.3",
      "Ventajas, Desventajas y Riesgos del Cómputo en la Nube",
      "Actividad de análisis sobre el uso de nube pública, privada e híbrida, considerando ventajas, desventajas, riesgos, costos y dependencia de proveedores.",
      "Actividad",
      "05/02/2026",
      "Se analizaron los beneficios, limitaciones y riesgos del cómputo en la nube, comparando distintos escenarios de uso como nube pública, privada e híbrida.",
      "Esta actividad me ayudó a comprender que el uso de la nube debe evaluarse según las necesidades de seguridad, costos, disponibilidad y control de la información.",
      "Documento PDF con el análisis de ventajas, desventajas y riesgos del cómputo en la nube.",
      "./Tareas/unidad 1/1.3-ventajas-desventajas-riesgos-cn.pdf"
    ],
    [
      "1.4",
      "Mapa mental de los elementos del Cómputo en la Nube",
      "Mapa mental donde se organizan los elementos principales del cómputo en la nube, incluyendo características, modelos de implementación, tipos de servicio, proveedores, ventajas y desventajas.",
      "Mapa mental",
      "09/02/2026",
      "Se organizó visualmente la información principal del cómputo en la nube, facilitando la comprensión de sus elementos, modelos, servicios y características.",
      "Esta evidencia me ayudó a relacionar los conceptos de la unidad de una forma más clara y visual, permitiéndome repasar mejor los temas principales.",
      "Documento PDF con el mapa mental de los elementos del cómputo en la nube.",
      "./Tareas/unidad 1/1.4-mapa-mental-computo-nube.pdf"
    ]
  ]
},

  2: {
  titulo: "Unidad 2",
  descripcion: "Arquitectura de la nube y exploración de plataformas cloud.",
  evidencias: [
    [
      "2.1",
      "Explorar la plataforma AWS",
      "Práctica de exploración de Amazon Web Services, identificando servicios principales como EC2, S3, VPC, IAM, RDS, CloudWatch y modelos de servicio en la nube.",
      "Práctica",
      "13/02/2026",
      "Se exploró la consola de AWS y se identificaron servicios importantes para crear infraestructura, almacenamiento, redes, bases de datos, seguridad y monitoreo en la nube.",
      "Esta actividad me ayudó a comprender cómo AWS organiza sus servicios y cómo se pueden administrar recursos cloud desde una consola centralizada.",
      "Documento PDF con la exploración de la plataforma AWS y capturas de sus servicios principales.",
      "./Tareas/unidad 2/2.1-explorar-aws.pdf"
    ],
    [
      "2.2",
      "Explorar plataforma Google Cloud",
      "Revisión de Google Cloud Platform, identificando servicios de cómputo, almacenamiento, bases de datos, redes, seguridad, Big Data, inteligencia artificial y Kubernetes.",
      "Práctica",
      "20/02/2026",
      "Se analizaron los servicios principales de Google Cloud, como Compute Engine, App Engine, Cloud Run, GKE, Cloud Storage, Cloud SQL, BigQuery, VPC e IAM.",
      "Esta evidencia me permitió entender que Google Cloud destaca por su enfoque en Big Data, inteligencia artificial, contenedores y Kubernetes.",
      "Documento PDF con la exploración de Google Cloud Platform y evidencias de los servicios revisados.",
      "./Tareas/unidad 2/2.2-google-cloud.pdf"
    ],
    [
      "2.3",
      "Actividad GitHub",
      "Actividad de exploración de GitHub enfocada en repositorios, commits, ramas, pull requests, issues, GitHub Pages, Insights y GitHub Actions.",
      "Práctica",
      "25/02/2026",
      "Se comprendió el uso de GitHub como herramienta de control de versiones, colaboración, documentación, gestión de cambios y automatización mediante GitHub Actions.",
      "Esta actividad me ayudó a relacionar GitHub con el trabajo colaborativo y con prácticas profesionales como DevOps, control de versiones e integración continua.",
      "Documento PDF con la actividad de GitHub, capturas de la plataforma y explicación de sus funciones principales.",
      "./Tareas/unidad 2/2.3-actividad-github.pdf"
    ],
    [
      "2.4",
      "Explorar la plataforma MS Azure",
      "Exploración de Microsoft Azure, revisando su portal, tipos de cuentas, creación de recursos, máquinas virtuales, bases de datos, almacenamiento, costos y seguridad.",
      "Práctica",
      "22/03/2026",
      "Se identificaron los servicios principales de Azure y su utilidad para crear, administrar y proteger recursos en la nube, como máquinas virtuales, bases de datos SQL, Storage Account y App Service.",
      "Esta evidencia me ayudó a comprender cómo Azure se integra con herramientas de Microsoft y cómo puede utilizarse para proyectos académicos y profesionales.",
      "Documento PDF con la exploración de Microsoft Azure, descripción de recursos y capturas del portal.",
      "./Tareas/unidad 2/2.4-explorar-azure.pdf"
    ],
    [
  "Examen",
  "Examen Cap 2 Arquitectura de la Nube",
  "Evaluación correspondiente al capítulo 2 sobre arquitectura de la nube, plataformas cloud, virtualización, Kubernetes, Docker, DevOps, servicios administrados y modelos de servicio en la nube.",
  "Examen",
  "20/04/2026",
  "Se completó satisfactoriamente el examen de Arquitectura de la Nube, demostrando conocimientos sobre AWS, Azure, Google Cloud, Kubernetes, Docker, DevOps, redes virtuales, servicios serverless y bases de datos SQL y NoSQL.",
  "Este examen me ayudó a reforzar conceptos importantes relacionados con plataformas cloud, servicios administrados y arquitectura de la nube, además de identificar la importancia de tecnologías modernas utilizadas en entornos cloud.",
  "Capturas del examen realizadas en la plataforma Moodle institucional y documento PDF con evidencias de preguntas y resultados obtenidos.",
  "./Tareas/unidad 2/2-examen-arquitectura-nube.pdf"
]
  ]
},

 3: {
  titulo: "Unidad 3",
  descripcion: "Microservicios, DevOps y herramientas de desarrollo.",
  evidencias: [
    [
      "3.1",
      "Sinopsis de los microservicios y flujo DevOps",
      "Sinopsis escrita sobre el uso de microservicios y su relación con el flujo DevOps, integración continua, despliegue continuo y herramientas modernas de desarrollo.",
      "Sinopsis",
      "26/02/2026",
      "Se explicó cómo los microservicios permiten dividir una aplicación en servicios independientes y cómo DevOps ayuda a mejorar la calidad, rapidez y automatización del desarrollo de software.",
      "Esta actividad me ayudó a comprender que los microservicios y DevOps se complementan, ya que permiten crear aplicaciones más flexibles, escalables y fáciles de mantener.",
      "Documento PDF con la sinopsis escrita a mano sobre microservicios y flujo DevOps.",
      "./Tareas/unidad 3/3.1-microservicios-devops.pdf"
    ]
  ]
},

  4: {
  titulo: "Unidad 4",
  descripcion: "Seguridad, ataques, políticas y ciberseguridad en la nube.",
  evidencias: [

    [
      "4.1",
      "Práctica de seguridad informática: escalada de privilegios",
      "Práctica enfocada en demostrar cómo una mala configuración de permisos sudo puede provocar escalada de privilegios en Linux.",
      "Práctica",
      "05/03/2026",
      "Se demostró cómo un usuario con permisos limitados puede obtener acceso root debido a una configuración vulnerable en el archivo sudoers.",
      "Esta práctica me ayudó a comprender la importancia de configurar correctamente los permisos y restringir el uso de sudo para evitar vulnerabilidades críticas.",
      "Documento PDF con evidencia paso a paso de la escalada de privilegios en Debian Server.",
      "./Tareas/unidad 4/4.1-escalada-privilegios.pdf"
    ],

    [
      "4.2",
      "Demostrar la inyección SQL",
      "Práctica de seguridad enfocada en demostrar una vulnerabilidad de inyección SQL y su posterior corrección utilizando consultas preparadas.",
      "Práctica",
      "19/03/2026",
      "Se logró demostrar cómo un login vulnerable puede ser accedido sin contraseña mediante inyección SQL y posteriormente se corrigió la vulnerabilidad usando consultas seguras.",
      "Esta actividad me permitió comprender los riesgos de no validar correctamente los datos de entrada y la importancia de implementar consultas preparadas para proteger aplicaciones web.",
      "Documento PDF con capturas del entorno vulnerable, pruebas de inyección SQL y corrección de la vulnerabilidad.",
      "./Tareas/unidad 4/4.2-inyeccion-sql.pdf"
    ],

    [
      "4.3",
      "Seguridad (hardening) en servidor web Apache 2",
      "Práctica de configuración segura en Apache aplicando técnicas de hardening, HTTPS, firewall y desactivación de módulos innecesarios.",
      "Práctica",
      "20/03/2026",
      "Se configuró correctamente un servidor Apache aplicando medidas de seguridad como ocultar información sensible, habilitar HTTPS y configurar el firewall.",
      "Esta práctica me ayudó a comprender cómo fortalecer la seguridad de un servidor web mediante configuraciones preventivas que reducen riesgos y vulnerabilidades.",
      "Documento PDF con evidencias de configuración de Apache, HTTPS, firewall y monitoreo de logs.",
      "./Tareas/unidad 4/4.3-hardening-apache2.pdf"
    ],

    [
      "4.5",
      "Comandos Dorks de Google",
      "Actividad sobre el uso de Google Dorks para búsquedas avanzadas relacionadas con hacking ético y detección de información expuesta.",
      "Actividad",
      "09/03/2026",
      "Se analizaron diferentes usos de Google Dorks para localizar información sensible expuesta y comprender riesgos relacionados con configuraciones inseguras.",
      "Esta actividad me permitió entender cómo ciertas búsquedas avanzadas pueden revelar vulnerabilidades y la importancia de proteger adecuadamente la información en internet.",
      "Documento PDF con respuestas y explicación escrita sobre comandos Dorks de Google.",
      "./Tareas/unidad 4/4.5-google-dorks.pdf"
    ],

    [
      "4.6",
      "Lluvia de conceptos de los aspectos de la ciberseguridad en la nube",
      "Actividad colaborativa donde se recopilaron conceptos principales relacionados con ciberseguridad cloud.",
      "Actividad",
      "11/03/2026",
      "Se identificaron conceptos importantes de ciberseguridad como DNS, IAM, VPN, cifrado, auditorías, políticas, disponibilidad y protección de datos.",
      "Esta actividad me ayudó a reforzar conceptos básicos de ciberseguridad en la nube y comprender la importancia de proteger la infraestructura y la información.",
      "Documento PDF con fotografía de la lluvia de conceptos realizada en clase.",
      "./Tareas/unidad 4/4.6-lluvia-conceptos-ciberseguridad.pdf"
    ],

    [
      "4.7",
      "Encontrar la contraseña (OverTheWire)",
      "Práctica utilizando el laboratorio Bandit de OverTheWire para resolver retos básicos de Linux y ciberseguridad.",
      "Práctica",
      "11/03/2026",
      "Se logró avanzar hasta el nivel 15 utilizando comandos Linux, SSH, búsqueda de archivos, decodificación y manipulación de información.",
      "Esta práctica me ayudó a mejorar mis habilidades en terminal Linux y a comprender mejor herramientas utilizadas en ciberseguridad y administración de sistemas.",
      "Documento PDF con evidencia de comandos, conexiones SSH y resolución de niveles de OverTheWire.",
      "./Tareas/unidad 4/4.7-overthewire.pdf"
    ],

    [
      "4.8",
      "Amenazas y Riesgos en Cómputo en la Nube",
      "Síntesis sobre amenazas, riesgos y medidas de protección relacionadas con el cómputo en la nube.",
      "Síntesis",
      "19/03/2026",
      "Se analizaron riesgos como virus, fallas eléctricas, corrupción de datos, ataques y pérdida de información, además de medidas de prevención y control.",
      "Esta actividad me permitió comprender la importancia de gestionar riesgos y aplicar medidas de seguridad para proteger la información en entornos cloud.",
      "Documento PDF con síntesis escrita sobre amenazas y riesgos en cómputo en la nube.",
      "./Tareas/unidad 4/4.8-amenazas-riesgos-cn.pdf"
    ],

    [
      "4.9",
      "Políticas de ciberseguridad en CN",
      "Actividad enfocada en la clasificación de políticas de seguridad aplicadas a usuarios, dispositivos y software.",
      "Actividad",
      "23/03/2026",
      "Se identificaron diferentes políticas relacionadas con acceso lógico, gestión de usuarios, dispositivos móviles, controles criptográficos y protección de la información.",
      "Esta actividad me ayudó a comprender cómo las políticas de seguridad permiten establecer controles y buenas prácticas para proteger sistemas e información.",
      "Documento PDF con clasificación de políticas de ciberseguridad organizadas por categorías.",
      "./Tareas/unidad 4/4.9-politicas-ciberseguridad-cn.pdf"
    ],

    [
      "4.10",
      "Análisis de tráfico de red con Wireshark para la prevención de ataques",
      "Práctica de captura y análisis de tráfico de red utilizando Wireshark para identificar riesgos y diferencias entre HTTP y HTTPS.",
      "Práctica",
      "25/03/2026",
      "Se analizaron paquetes HTTP, DNS y TCP identificando información visible en texto claro y comprendiendo la importancia del cifrado en las comunicaciones.",
      "Esta práctica me ayudó a comprender cómo funciona el análisis de tráfico de red y por qué es importante utilizar HTTPS para proteger la información.",
      "Documento PDF con capturas y análisis de tráfico realizado en Wireshark.",
      "./Tareas/unidad 4/4.10-analisis-trafico-wireshark.pdf"
    ]

  ]
},

5: {
  titulo: "Unidad 5",
  descripcion: "Diseño, despliegue, virtualización y migración de aplicaciones en la nube.",
  evidencias: [

    [
      "5.2",
      "Análisis y Diseño de una Arquitectura de Red en la Nube (Caso Real)",
      "Proyecto enfocado en el análisis y diseño de una arquitectura cloud utilizando servicios de AWS para una universidad.",
      "Proyecto",
      "16/04/2026",
      "Se diseñó una arquitectura en AWS utilizando EC2, RDS, S3, IAM, VPC y Application Load Balancer para mejorar la disponibilidad, seguridad y escalabilidad del sistema universitario.",
      "Esta actividad me ayudó a comprender cómo se estructura una arquitectura real en la nube y cómo los servicios cloud pueden resolver problemas de rendimiento, seguridad y acceso remoto.",
      "Documento PDF con análisis del problema, propuesta de solución, arquitectura AWS, seguridad, escalabilidad y estimación de costos.",
      "./Tareas/unidad 5/5.2-arquitectura-red-nube.pdf"
    ],

    [
      "5.3",
      "Curso introducción a la contenerización y virtualización",
      "Actividad basada en un curso de DataCamp sobre virtualización y contenedores.",
      "Curso",
      "21/04/2026",
      "Se completó satisfactoriamente el curso de DataCamp sobre virtualización y contenerización, comprendiendo las diferencias entre máquinas virtuales y contenedores, así como el uso de herramientas modernas como Docker y Kubernetes.",
      "Esta actividad me ayudó a comprender cómo las tecnologías de virtualización y contenerización son utilizadas actualmente para optimizar recursos, facilitar despliegues y mejorar el desarrollo de aplicaciones en la nube.",
      "Documento PDF con evidencias del curso realizado en DataCamp y ejercicios completados.",
      "./Tareas/unidad 5/5.3-contenedorizacion-virtualizacion.pdf"
    ],

    [
      "5.4",
      "Instalación de Docker",
      "Práctica de instalación y configuración inicial de Docker Desktop en Windows utilizando WSL2.",
      "Práctica",
      "22/04/2026",
      "Se instaló Docker correctamente, se verificó su funcionamiento mediante el contenedor hello-world y se ejecutó un contenedor con Nginx.",
      "Esta práctica me ayudó a comprender cómo funcionan los contenedores y la importancia de Docker en el desarrollo y despliegue de aplicaciones modernas.",
      "Documento PDF con instalación de Docker, explicación de imágenes y contenedores, y pruebas realizadas en PowerShell.",
      "./Tareas/unidad 5/5.4-instalacion-docker.pdf"
    ],

    [
      "5.7",
      "Creación de VM en la nube",
      "Práctica de creación y configuración de una máquina virtual Ubuntu en Microsoft Azure.",
      "Práctica",
      "24/04/2026",
      "Se creó una máquina virtual Ubuntu en Azure, configurando puertos SSH y HTTP, además de verificar su funcionamiento mediante conexión remota.",
      "Esta práctica me permitió comprender cómo funcionan las máquinas virtuales en la nube y cómo administrarlas utilizando acceso remoto por SSH.",
      "Documento PDF con capturas del portal Azure, creación de recursos, configuración de puertos y conexión SSH.",
      "./Tareas/unidad 5/5.7-creacion-vm-nube.pdf"
    ],

    [
      "5.8",
      "Instalación del entorno LAMP en una máquina virtual en infraestructura de la nube",
      "Práctica enfocada en la instalación y configuración de un entorno LAMP en Azure.",
      "Práctica",
      "28/04/2026",
      "Se instaló correctamente Linux, Apache, MySQL y PHP dentro de una máquina virtual Ubuntu en Azure, verificando el funcionamiento del servidor web.",
      "Esta actividad me ayudó a entender cómo desplegar y configurar un entorno web completo en la nube utilizando tecnologías ampliamente usadas en desarrollo web.",
      "Documento PDF con evidencias de instalación de Apache, PHP, MySQL y verificación del servidor web.",
      "./Tareas/unidad 5/5.8-entorno-lamp-vm.pdf"
    ],

    [
      "5.9",
      "Despliegue de aplicación CRUD en la nube",
      "Proyecto de despliegue de una aplicación CRUD PHP/MySQL utilizando una máquina virtual en Azure.",
      "Proyecto",
      "28/04/2026",
      "Se desplegó correctamente una aplicación CRUD en Azure utilizando Apache, PHP y MySQL, permitiendo agregar, editar y eliminar registros desde internet.",
      "Esta práctica me permitió comprender cómo publicar aplicaciones reales en la nube y cómo conectar servidores web con bases de datos remotas.",
      "Documento PDF con configuración de la máquina virtual, instalación del entorno web, configuración de base de datos y pruebas del CRUD.",
      "./Tareas/unidad 5/5.9-despliegue-crud-nube.pdf"
    ],

    [
      "5.10",
      "Migración a servicios administrados",
      "Proyecto enfocado en migrar una aplicación CRUD hacia servicios administrados de Microsoft Azure.",
      "Proyecto",
      "06/05/2026",
      "Se migró correctamente una aplicación CRUD PHP/MySQL hacia Azure App Service y Azure Database for MySQL Flexible Server, configurando conexión remota y SSL.",
      "Esta actividad me ayudó a comprender cómo funcionan los servicios administrados en la nube y la importancia de la configuración segura en entornos reales.",
      "Documento PDF con creación de Azure MySQL Flexible Server, migración de base de datos, configuración de App Service y pruebas del sistema CRUD.",
      "./Tareas/unidad 5/5.10-migracion-servicios-administrados.pdf"
    ]

  ]
}
};

const unitButtons = document.querySelectorAll(".unit-btn");
const evidenceList = document.getElementById("evidenceList");
const unitTitle = document.getElementById("unitTitle");
const unitDescription = document.getElementById("unitDescription");
const searchInput = document.getElementById("searchInput");

function mostrarUnidad(numeroUnidad) {
  const unidad = unidades[numeroUnidad];

  unitTitle.textContent = unidad.titulo;
  unitDescription.textContent = unidad.descripcion;
  evidenceList.innerHTML = "";

  unidad.evidencias.forEach(tarea => {
    const card = document.createElement("div");
    card.classList.add("evidence-card");

   card.innerHTML = `
  <div class="evidence-number">${tarea[0]}</div>

  <div class="evidence-info">
    <h3>${tarea[1]}</h3>
    <p>${tarea[2]}</p>
  </div>

  <span class="evidence-type">${tarea[3]}</span>

  <div class="evidence-actions">
    <a 
      class="evidence-link task-btn" 
      href="evidencia.html?numero=${encodeURIComponent(tarea[0])}&titulo=${encodeURIComponent(tarea[1])}&descripcion=${encodeURIComponent(tarea[2])}&tipo=${encodeURIComponent(tarea[3])}&fecha=${encodeURIComponent(tarea[4])}&resultados=${encodeURIComponent(tarea[5])}&reflexion=${encodeURIComponent(tarea[6])}&anexos=${encodeURIComponent(tarea[7])}&pdf=${encodeURIComponent(tarea[8])}"
    >
      Ver evidencia
    </a>
  </div>
`;

    evidenceList.appendChild(card);
  });
}

unitButtons.forEach(button => {
  button.addEventListener("click", () => {
    unitButtons.forEach(btn => btn.classList.remove("active"));
    button.classList.add("active");

    const unidadSeleccionada = button.dataset.unit;

    localStorage.setItem("unidadSeleccionada", unidadSeleccionada);

    mostrarUnidad(unidadSeleccionada);

    searchInput.value = "";

    document.getElementById("evidencias").scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  });
});

searchInput.addEventListener("keyup", () => {
  const texto = searchInput.value.toLowerCase();
  const cards = document.querySelectorAll(".evidence-card");

  cards.forEach(card => {
    const contenido = card.textContent.toLowerCase();

    if (contenido.includes(texto)) {
      card.style.display = "grid";
    } else {
      card.style.display = "none";
    }
  });
});

function actualizarContadorTareas() {
  let total = 0;

  Object.values(unidades).forEach(unidad => {
    total += unidad.evidencias.length;
  });

  const contador = document.getElementById("taskCounter");

  if (contador) {
    contador.textContent = total;
  }
}

const videoInput = document.getElementById("videoInput");
const saveVideoBtn = document.getElementById("saveVideoBtn");
const videoLink = document.getElementById("videoLink");
const videoStatus = document.getElementById("videoStatus");

function cargarVideoGuardado() {
  const linkGuardado = localStorage.getItem("videoPortafolio");

  if (linkGuardado) {
    videoInput.value = linkGuardado;
    videoLink.href = linkGuardado;
    videoLink.classList.remove("video-link-hidden");
    videoStatus.textContent = "Enlace del video guardado correctamente.";
  }
}

saveVideoBtn.addEventListener("click", () => {
  const link = videoInput.value.trim();

  if (link === "") {
    videoStatus.textContent = "Primero pega el enlace del video.";
    return;
  }

  localStorage.setItem("videoPortafolio", link);
  videoLink.href = link;
  videoLink.classList.remove("video-link-hidden");
  videoStatus.textContent = "Enlace del video guardado correctamente.";
});

const unidadGuardada = localStorage.getItem("unidadSeleccionada") || "1";

unitButtons.forEach(btn => {
  btn.classList.remove("active");

  if (btn.dataset.unit === unidadGuardada) {
    btn.classList.add("active");
  }
});

mostrarUnidad(unidadGuardada);
actualizarContadorTareas();
cargarVideoGuardado();

if (window.location.hash === "#evidencias") {
  setTimeout(() => {
    document.getElementById("evidencias").scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  }, 100);
}