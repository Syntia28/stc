// Variables para el modal
let currentSlide = 0;
let currentService = "";
let slideInterval;

// Datos de los servicios (imágenes y descripciones)
const serviceData = {
  suelos: {
    title: "LABORATORIO DE MECÁNICA DE SUELOS",
    description:
      "Realizamos estudios completos de mecánica de suelos para determinar las propiedades físicas y mecánicas del terreno. Nuestros ensayos siguen estrictamente las normas técnicas nacionales e internacionales, garantizando resultados precisos y confiables para tus proyectos de construcción.",
    normas: [
      "NTP 339.129",
      "ASTM D422",
      "ASTM D4318",
      "ASTM D698",
      "AASHTO T89",
      "AASHTO T90",
    ],
    servicios: [
      "Análisis granulométrico por tamizado",
      "Límites de Atterberg (Líquido y Plástico)",
      "Clasificación de suelos SUCS y AASHTO",
      "Ensayo de compactación Proctor",
      "Corte directo",
      "Consolidación unidimensional",
      "Densidad máxima y mínima",
      "Contenido de humedad",
    ],
    imagenes: [
      "https://images.unsplash.com/photo-1581094794329-8114a89e3f9b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1581092160562-40aa08e78837?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    ],
  },
  concreto: {
    title: "LABORATORIO DE TECNOLOGÍA DEL CONCRETO",
    description:
      "Ofrecemos ensayos completos de tecnología del concreto para garantizar la calidad y durabilidad de tus estructuras. Nuestro laboratorio cuenta con equipos de última generación y personal altamente calificado.",
    normas: ["NTP 339.034", "ASTM C39", "ASTM C31", "ASTM C143", "AASHTO T22"],
    servicios: [
      "Ensayo de resistencia a la compresión de probetas",
      "Diseño de mezclas de concreto",
      "Ensayo de asentamiento (Slump)",
      "Peso unitario del concreto",
      "Contenido de aire",
      "Temperatura del concreto",
      "Elaboración y curado de especímenes",
      "Ensayo de tracción indirecta",
    ],
    imagenes: [
      "https://images.unsplash.com/photo-1581094794329-8114a89e3f9b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    ],
  },
  supervision: {
    title: "SUPERVISIÓN DE OBRAS",
    description:
      "Brindamos servicios profesionales de supervisión de obras civiles, asegurando que los proyectos se ejecuten según las especificaciones técnicas, planos y normativa vigente, garantizando la calidad y seguridad de la construcción.",
    normas: ["RNE", "NTP", "Especificaciones técnicas del proyecto"],
    servicios: [
      "Control de calidad de materiales",
      "Verificación de planos y especificaciones",
      "Supervisión de procesos constructivos",
      "Control de compactación en campo",
      "Verificación de armaduras y encofrados",
      "Control de resistencia del concreto",
      "Informes periódicos de supervisión",
      "Acta de recepción de obra",
    ],
    imagenes: [
      "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1581094794329-8114a89e3f9b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    ],
  },
  topografia: {
    title: "LEVANTAMIENTOS TOPOGRÁFICOS",
    description:
      "Realizamos levantamientos topográficos de alta precisión utilizando equipos de última generación. Nuestros servicios incluyen modelos digitales de terreno, replanteos y planos topográficos para proyectos de ingeniería y construcción.",
    normas: ["NTP", "Especificaciones técnicas del proyecto"],
    servicios: [
      "Levantamiento con estación total",
      "Levantamiento con GPS diferencial",
      "Modelos digitales de terreno (DTM)",
      "Curvas de nivel",
      "Replanteo de obras",
      "Secciones transversales",
      "Cálculo de volúmenes",
      "Planos topográficos en CAD",
    ],
    imagenes: [
      "https://images.unsplash.com/photo-1581094794329-8114a89e3f9b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1581092160562-40aa08e78837?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    ],
  },
  catastro: {
    title: "REGULARIZACIÓN CATASTRAL DE PREDIOS",
    description:
      "Ofrecemos servicios completos de regularización catastral para predios urbanos y rurales. Gestionamos todo el proceso administrativo y técnico para el saneamiento físico legal de propiedades.",
    normas: ["Ley 27157", "Ley 29151", "Reglamento de la SUNARP"],
    servicios: [
      "Levantamiento catastral",
      "Planos perimétricos",
      "Planos de ubicación y localización",
      "Memoria descriptiva",
      "Declaratoria de fábrica",
      "Independización de predios",
      "Prescripción adquisitiva",
      "Subdivisión de lotes",
    ],
    imagenes: [
      "https://images.unsplash.com/photo-1581094794329-8114a89e3f9b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1581092160562-40aa08e78837?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    ],
  },
  expedientes: {
    title: "ELABORACIÓN Y EJECUCIÓN DE EXPEDIENTES TÉCNICOS",
    description:
      "Elaboramos expedientes técnicos completos para proyectos de ingeniería civil y arquitectura. Incluimos toda la documentación necesaria para la ejecución y licenciamiento de obras.",
    normas: ["RNE", "NTP", "Ley de Contrataciones del Estado"],
    servicios: [
      "Memoria descriptiva",
      "Planos de arquitectura e ingeniería",
      "Especificaciones técnicas",
      "Metrados",
      "Presupuesto de obra",
      "Análisis de precios unitarios",
      "Cronograma de ejecución",
      "Estudios básicos (suelos, topografía)",
    ],
    imagenes: [
      "https://images.unsplash.com/photo-1581094794329-8114a89e3f9b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1581092160562-40aa08e78837?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    ],
  },
  alquiler: {
    title: "ALQUILER DE EQUIPOS",
    description:
      "Ponemos a disposición equipos de alta calidad para alquiler, ideales para proyectos de corto y largo plazo. Todos nuestros equipos cuentan con certificados de calibración y mantenimiento.",
    normas: ["NTP", "ISO", "Certificados de calibración"],
    servicios: [
      "Estaciones totales",
      "Niveles de precisión",
      "GPS diferencial",
      "Moldes metálicos para probetas",
      "Equipos de laboratorio de suelos",
      "Equipos de laboratorio de concreto",
      "Martillo de Proctor",
      "Balanzas de precisión",
    ],
    imagenes: [
      "https://images.unsplash.com/photo-1581094794329-8114a89e3f9b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1581092160562-40aa08e78837?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    ],
  },
  otros: {
    title: "OTROS SERVICIOS",
    description:
      "Ofrecemos servicios complementarios en ingeniería civil, asesoría técnica especializada y capacitaciones para profesionales y empresas del sector construcción.",
    normas: ["NTP", "ISO", "RNE"],
    servicios: [
      "Asesoría técnica en proyectos",
      "Capacitaciones en laboratorio de suelos",
      "Capacitaciones en tecnología del concreto",
      "Consultoría en gestión de calidad",
      "Estudios especializados",
      "Peritajes técnicos",
      "Informes geotécnicos",
      "Elaboración de manuales de calidad",
    ],
    imagenes: [
      "https://images.unsplash.com/photo-1581094794329-8114a89e3f9b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1581092160562-40aa08e78837?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    ],
  },
};

// Función para abrir el modal del servicio
function openServiceModal(service) {
  console.log("Abriendo modal para:", service);

  const modal = document.getElementById("serviceModal");
  if (!modal) {
    console.error("Modal no encontrado");
    return;
  }

  currentService = service;
  const data = serviceData[service];

  if (!data) {
    console.error("Servicio no encontrado:", service);
    return;
  }

  document.getElementById("modalServiceTitle").textContent = data.title;
  document.getElementById("modalServiceDescription").textContent =
    data.description;

  // Cargar normas
  const normasContainer = document.getElementById("modalServiceNormas");
  normasContainer.innerHTML = "";
  data.normas.forEach((norma) => {
    const span = document.createElement("span");
    span.className = "service-tag";
    span.textContent = norma;
    normasContainer.appendChild(span);
  });

  // Cargar lista de servicios
  const listContainer = document.getElementById("modalServiceList");
  listContainer.innerHTML = "";
  data.servicios.forEach((servicio) => {
    const li = document.createElement("li");
    li.className = "flex items-start gap-2";
    li.innerHTML = `<i class="fas fa-check-circle text-cyan-600 mt-1"></i><span class="text-gray-600">${servicio}</span>`;
    listContainer.appendChild(li);
  });

  // Cargar imágenes del carrusel
  const carouselSlides = document.getElementById("carouselSlides");
  carouselSlides.innerHTML = "";
  data.imagenes.forEach((img, index) => {
    const slide = document.createElement("div");
    slide.className = "carousel-slide";
    slide.innerHTML = `
      <img src="${img}" alt="${data.title} - Imagen ${index + 1}">
      <div class="carousel-caption">
        <h4 class="text-xl font-bold">${data.title}</h4>
        <p class="text-sm opacity-90">Imagen ${index + 1} de ${data.imagenes.length}</p>
      </div>
    `;
    carouselSlides.appendChild(slide);
  });

  // Crear dots del carrusel
  const dotsContainer = document.getElementById("carouselDots");
  dotsContainer.innerHTML = "";
  data.imagenes.forEach((_, index) => {
    const dot = document.createElement("span");
    dot.className = `carousel-dot ${index === 0 ? "active" : ""}`;
    dot.onclick = () => goToSlide(index);
    dotsContainer.appendChild(dot);
  });

  currentSlide = 0;
  updateCarousel();

  // Mostrar modal
  modal.style.display = "flex";
  document.body.style.overflow = "hidden";

  // Iniciar carrusel automático
  startAutoSlide();
}

function closeServiceModal() {
  const modal = document.getElementById("serviceModal");
  if (modal) {
    modal.style.display = "none";
    document.body.style.overflow = "auto";
    stopAutoSlide();
  }
}

function changeSlide(direction) {
  const data = serviceData[currentService];
  if (!data) return;

  currentSlide =
    (currentSlide + direction + data.imagenes.length) % data.imagenes.length;
  updateCarousel();
  resetAutoSlide();
}

function goToSlide(index) {
  currentSlide = index;
  updateCarousel();
  resetAutoSlide();
}

function updateCarousel() {
  const slides = document.getElementById("carouselSlides");
  const dots = document.querySelectorAll("#carouselDots .carousel-dot");

  if (slides) {
    slides.style.transform = `translateX(-${currentSlide * 100}%)`;
  }

  dots.forEach((dot, index) => {
    dot.classList.toggle("active", index === currentSlide);
  });
}

function startAutoSlide() {
  slideInterval = setInterval(() => {
    changeSlide(1);
  }, 5000);
}

function stopAutoSlide() {
  if (slideInterval) {
    clearInterval(slideInterval);
  }
}

function resetAutoSlide() {
  stopAutoSlide();
  startAutoSlide();
}

// Pausar carrusel del modal al hacer hover
const modalCarousel = document.querySelector(".carousel-container");
if (modalCarousel) {
  modalCarousel.addEventListener("mouseenter", stopAutoSlide);
  modalCarousel.addEventListener("mouseleave", startAutoSlide);
}

// Cerrar modal con tecla ESC
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    closeServiceModal();
  }
});

// Funciones para expandir/contraer Misión y Visión
function toggleMission(element) {
  const card = element.closest(".mission-card");
  if (!card) return;
  const toggle = card.querySelector(".mission-toggle");
  const opened = !card.classList.contains("expanded");
  card.classList.toggle("expanded", opened);
  if (toggle) toggle.textContent = opened ? "-" : "+";
}

function toggleVision(element) {
  const card = element.closest(".vision-card");
  if (!card) return;
  const toggle = card.querySelector(".vision-toggle");
  const opened = !card.classList.contains("expanded");
  card.classList.toggle("expanded", opened);
  if (toggle) toggle.textContent = opened ? "-" : "+";
}

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      // Cerrar menú móvil si está abierto
      const mobileMenu = document.getElementById("mobile-menu");
      if (mobileMenu && !mobileMenu.classList.contains("hidden")) {
        mobileMenu.classList.add("hidden");
      }

      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

// Mobile menu toggle
const mobileMenuBtn = document.getElementById("mobile-menu-btn");
const mobileMenu = document.getElementById("mobile-menu");

if (mobileMenuBtn && mobileMenu) {
  mobileMenuBtn.addEventListener("click", function () {
    mobileMenu.classList.toggle("hidden");

    // Animar el icono
    const svg = this.querySelector("svg");
    svg.style.transform = mobileMenu.classList.contains("hidden")
      ? "rotate(0deg)"
      : "rotate(90deg)";
  });

  // Cerrar menú al hacer click fuera
  document.addEventListener("click", function (e) {
    if (!e.target.closest(".navbar-premium")) {
      mobileMenu.classList.add("hidden");
    }
  });
}

// Efecto de navbar al scroll
window.addEventListener("scroll", function () {
  const navbar = document.querySelector(".navbar-premium");
  if (window.scrollY > 10) {
    navbar.style.boxShadow = "0 20px 40px rgba(6, 182, 212, 0.15)";
  } else {
    navbar.style.boxShadow = "none";
  }
});

// Variables para el modal de ensayos
let currentEnsayoSlide = 0;
let currentEnsayo = '';
let ensayoSlideInterval;

// Datos completos de los ensayos (TODA la información)
const ensayoData = {
  concreto: {
    title: "TECNOLOGÍA DEL CONCRETO",
    description:
      "Realizamos ensayos completos de tecnología del concreto para garantizar la calidad y durabilidad de tus estructuras. Nuestro laboratorio cuenta con equipos de última generación y personal altamente calificado.",
    normas: ["MTC", "NTP", "ASTM", "AASHTO", "EG-2013"],
    ensayos: [
      {
        category: "🔬 ENSAYOS DE AGREGADOS (FÍSICOS)",
        items: [
          "Muestreo de agregados — MTC E 201",
          "Análisis granulométrico — MTC E 204",
          "Material que pasa malla Nº 200 — MTC E 202",
          "Peso unitario y porcentaje de vacíos — MTC E 203",
          "Gravedad específica y absorción (agregado fino) — MTC E 205",
          "Peso específico y absorción (agregado grueso) — MTC E 206",
          "Desgaste Los Ángeles — MTC E 207",
          "Partículas fracturadas — MTC E 210",
          "Partículas chatas y alargadas — MTC E 223",
          "Contenido de humedad — MTC E 215",
        ],
      },
      {
        category: "🧪 ENSAYOS DE AGREGADOS (QUÍMICOS)",
        items: [
          "Durabilidad al sulfato — MTC E 209",
          "Equivalente de arena — MTC E 114",
          "Sales solubles — NTP 339.152",
          "Contenido de Sulfatos — NTP 400.042",
          "Contenido de Cloruros — NTP 400.042",
          "Determinación de pH — NTP 339.176",
        ],
      },
      {
        category: "🏗️ DISEÑO Y CONTROL DE CONCRETO",
        items: [
          "Diseño de mezcla — EG-2013",
          "Revenimiento (Slump) — EG-2013",
          "Peso unitario del concreto fresco — EG-2013",
          "Elaboración y curado de probetas — EG-2013",
          "Resistencia a la compresión — EG-2013",
          "Extracción de testigos — EG-2013",
        ],
      },
    ],
    imagenes: [
      './imagenes/servicios/RESISTENCIALACOMPRESIÓNDELCONCRETO.png',
      './imagenes/servicios/DISEÑODEMEZCLAS.png',
      './imagenes/servicios/DISEÑODEMEZCLAS1.png'
    ],
  },
  suelos: {
    title: "ESTUDIO DE MECÁNICA DE SUELOS",
    description:
      "Realizamos estudios completos de mecánica de suelos para determinar las propiedades físicas y mecánicas del terreno. Nuestros ensayos siguen estrictamente las normas técnicas nacionales e internacionales.",
    normas: ["MTC E", "ASTM", "NTP", "AASHTO"],
    ensayos: [
      {
        category: "🔍 EXPLORACIÓN Y MUESTREO",
        items: [
          "Excavación y muestreo (calicatas / SPT) — MTC E 101",
          "Ensayo SPT — MTC E 101",
          "Densidad de campo in situ — MTC E 117",
          "Ensayo de placa de carga — MTC E 126",
          "Perfiles estratigráficos — ASTM D2488",
          "Muestreo con tubos de aluminio de pared delgada — ASTM D1587",
        ],
      },
      {
        category: "📊 ENSAYOS DE CLASIFICACIÓN",
        items: [
          "Contenido de humedad natural — MTC E 108",
          "Análisis granulométrico — MTC E 107",
          "Material que pasa malla Nº 200 — MTC E 137",
          "Límite líquido — MTC E 110",
          "Límite plástico e Índice de plasticidad — MTC E 111",
          "Peso específico de sólidos — MTC E 113",
        ],
      },
      {
        category: "⚙️ ENSAYOS DE COMPACTACIÓN",
        items: [
          "Proctor estándar — MTC E 115",
          "Proctor modificado — MTC E 116",
          "CBR — MTC E 132",
        ],
      },
      {
        category: "🧪 ENSAYOS QUÍMICOS",
        items: [
          "Contenido de Sales Solubles Totales — NTP 339.152",
          "Determinación de pH — NTP 339.176",
          "Contenido de Cloruros — NTP 339.177",
          "Contenido de Sulfatos — NTP 339.178",
        ],
      },
      {
        category: "💪 ENSAYOS DE RESISTENCIA Y DEFORMACIÓN",
        items: [
          "Corte directo — MTC E 131",
          "Triaxial (UU, CU, CD) — MTC E 133",
          "Consolidación (Edómetro) — MTC E 120",
          "Permeabilidad — MTC E 119",
        ],
      },
    ],
    imagenes: [
      "https://images.unsplash.com/photo-1581094794329-8114a89e3f9b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1581094794329-8114a89e3f9b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1581094794329-8114a89e3f9b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    ],
  },
  canteras: {
    title: "ESTUDIO DE CANTERAS",
    description:
      "Caracterización completa de materiales de cantera para determinar su calidad y aptitud para su uso en obras civiles, carreteras y construcciones.",
    normas: ["MTC", "ASTM", "NTP"],
    ensayos: [
      "Muestreo — MTC E 201",
      "Granulometría — MTC E 204",
      "Límites de Atterberg — MTC E 110 / 111",
      "Equivalente de arena — MTC E 114",
      "Proctor — MTC E 115 / 116",
      "CBR — MTC E 132",
      "Desgaste Los Ángeles — MTC E 207",
      "Durabilidad al sulfato — MTC E 209",
      "Partículas fracturadas — MTC E 210",
      "Peso unitario — MTC E 203",
    ],
    imagenes: [
      "https://images.unsplash.com/photo-1581094794329-8114a89e3f9b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1581094794329-8114a89e3f9b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1581094794329-8114a89e3f9b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    ],
  },
  albanileria: {
    title: "ENSAYOS EN ALBAÑILERÍA",
    description:
      "Evaluación completa de unidades de albañilería y prismas para garantizar la calidad y resistencia de las estructuras de mampostería.",
    normas: [
      "NTP 331.021",
      "NTP 339.605",
      "NTP 339.635",
      "NTP 399.604",
      "NTP 399.613",
    ],
    ensayos: [
      {
        category: "🧱 ENSAYOS EN UNIDADES Y PRISMAS DE ALBAÑILERÍA",
        items: [
          "Esfuerzo a compresión de ladrillo y formas refractarias — NTP 331.021",
          "Esfuerzo a compresión de prismas — NTP 331.021",
          "Construcción de prismas de albañilería — NTP 339.605",
          "Refrentado de prismas de albañilería — NTP 339.635",
        ],
      },
      {
        category: "🏛️ ALBAÑILERÍA DE CONCRETO",
        items: [
          "Esfuerzo a compresión — NTP 399.604",
          "Refrentado de unidades de albañilería — NTP 399.604",
          "Medición dimensional — NTP 399.604",
          "Absorción — NTP 399.604",
        ],
      },
      {
        category: "🧱 ALBAÑILERÍA DE ARCILLA",
        items: [
          "Esfuerzo a compresión — NTP 399.613",
          "Porcentaje de vacíos — NTP 399.613",
          "Refrentado con yeso — NTP 399.613",
          "Absorción — NTP 399.613",
          "Alabeo — NTP 399.613",
          "Succión — NTP 399.613",
          "Variación dimensional — NTP 331.017",
          "Eflorescencia (par) — NTP 399.613",
        ],
      },
    ],
    imagenes: [
      "https://images.unsplash.com/photo-1581094794329-8114a89e3f9b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1581094794329-8114a89e3f9b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1581094794329-8114a89e3f9b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    ],
  },
  varios: {
    title: "ENSAYOS VARIOS",
    description:
      "Realizamos una amplia gama de ensayos especializados en concreto, mortero, evaluación estructural, suelo-cemento, rocas, agua y otros ensayos complementarios.",
    normas: ["MTC E", "ASTM", "NTP"],
    ensayos: [
      {
        category: "🏗️ CONCRETO",
        items: [
          "Toma de muestras de concreto fresco — MTC E 701",
          "Elaboración y curado de especímenes en el laboratorio — MTC E 702",
          "Temperatura de mezclas de concreto — MTC E 724",
          "Asentamiento (Slump) — MTC E 705",
          "Contenido de aire (Método de presión) — MTC E 706",
          "Esfuerzo a compresión (Testigos cilíndricos) — MTC E 704",
          "Refrentado de cilindros de concreto (Capping) — MTC E 703",
          "Ensayo de tracción indirecta de cilindros — MTC E 708",
          "Resistencia a la flexión (Viga con cargas a los tercios) — MTC E 709",
          "Exudación del concreto — MTC E 713",
          "Determinación del valor pH — MTC E 718",
        ],
      },
      {
        category: "🧱 MORTERO",
        items: [
          "Fabricación y toma de muestras — ASTM C305",
          "Esfuerzo a compresión — ASTM C109",
        ],
      },
      {
        category: "🏔️ ROCAS",
        items: [
          "Compresión simple — ASTM D2938",
          "Carga Puntual — ASTM D5731",
          "Abrasión — ASTM C535",
          "Propiedades físicas (Humedad, Densidad, Absorción, Porosidad) — ASTM C97",
        ],
      },
      {
        category: "💧 AGUA",
        items: [
          "Sólidos en suspensión — ASTM C1603",
          "Materia Orgánica — NTP 339.072",
          "Álcalis — ASTM C114",
          "Contenido de Sulfatos — NTP 339.074",
          "Contenido de Cloruros — NTP 339.075",
          "Determinación de pH — NTP 339.073",
        ],
      },
      {
        category: "🧪 SUELO - CEMENTO",
        items: ["Esfuerzo a compresión — ASTM D1633"],
      },
    ],
    imagenes: [
      './imagenes/servicios/ESTUDIOS_GEOLOGICOS.png',
      './imagenes/servicios/ESCLEROMETRIA.png',
      './imagenes/servicios/COMPRESIÓN_DE_LADRILLOS.png'
    ],
  },
  estructural: {
    title: "EVALUACIÓN ESTRUCTURAL",
    description:
      "Pruebas no destructivas y destructivas para evaluar la calidad, resistencia y durabilidad de estructuras existentes de concreto armado.",
    normas: ["MTC E", "ASTM", "NTP"],
    ensayos: [
      "Esclerometría (Número de rebote) — MTC E 725",
      "Extracción de núcleos con diamantina (Toma de núcleos) — MTC E 707",
      "Medida de la longitud de núcleos de concreto — MTC E 712",
      "Ensayo de carbonatación (fenolftaleína)",
      "Cloruros solubles en concreto endurecido (Concentración de ión cloruro) — MTC E 720",
      "Refrentado de cilindros de concreto (Capping) — MTC E 703",
      "Ensayo de tracción indirecta de cilindros — MTC E 708",
      "Resistencia a la flexión (Viga con cargas a los tercios) — MTC E 709",
      "Exudación del concreto — MTC E 713",
      "Determinación del valor pH — MTC E 718",
    ],
    imagenes: [
      "./imagenes/clientes/evaluacionesEstructuras1.jpeg",
      "./imagenes/clientes/evaluacionesEstructuras2.jpeg",
      "./imagenes/clientes/evaluacionesEstructuras3.jpeg",
    ],
  },
  quimicos: {
    title: "ENSAYOS QUÍMICOS",
    description:
      "Análisis químicos especializados para determinar la composición y calidad de suelos, agregados, agua y concreto, identificando la presencia de elementos agresivos.",
    normas: ["NTP", "ASTM"],
    ensayos: [
      "Sales solubles totales — NTP 339.152",
      "Determinación de pH — NTP 339.176",
      "Cloruros solubles — NTP 339.177",
      "Sulfatos solubles — NTP 339.178",
      "Contenido de Materia Orgánica — NTP 339.072",
      "Contenido de Sulfatos en agregados — NTP 400.042",
      "Contenido de Cloruros en agregados — NTP 400.042",
      "Álcalis en agua — ASTM C114",
    ],
    imagenes: [
      "https://images.unsplash.com/photo-1581094794329-8114a89e3f9b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1581094794329-8114a89e3f9b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1581094794329-8114a89e3f9b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    ],
  },
  asfalto: {
    title: "ASFALTO Y PAVIMENTOS",
    description:
      "Ensayos de materiales asfálticos y evaluación de pavimentos flexibles para garantizar la calidad y durabilidad de vías y carreteras.",
    normas: ["ASTM", "MTC"],
    ensayos: [
      "Análisis granulométrico — ASTM D5444",
      "Lavado Asfáltico — ASTM D2172",
      "Medida De La deflexión De Un Pavimento Flexible Empleando La Viga Benkelman — MTC E 1002",
    ],
    imagenes: [
      "https://images.unsplash.com/photo-1581094794329-8114a89e3f9b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1581094794329-8114a89e3f9b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1581094794329-8114a89e3f9b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    ],
  },
};

// Función para abrir el modal de ensayos
function openEnsayoModal(ensayo) {
  currentEnsayo = ensayo;
  const data = ensayoData[ensayo];
  
  document.getElementById('ensayoModalTitle').textContent = data.title;
  document.getElementById('ensayoModalDescription').textContent = data.description;
  
  // Cargar normas
  const normasContainer = document.getElementById('ensayoModalNormas');
  normasContainer.innerHTML = '';
  data.normas.forEach(norma => {
    const span = document.createElement('span');
    span.className = 'service-tag';
    span.textContent = norma;
    normasContainer.appendChild(span);
  });

  // Cargar lista de ensayos
  const listContainer = document.getElementById('ensayoModalList');
  listContainer.innerHTML = '';
  
  if (Array.isArray(data.ensayos)) {
    if (data.ensayos.length > 0 && data.ensayos[0].category) {
      // Para ensayos con categorías
      data.ensayos.forEach(category => {
        const categoryDiv = document.createElement('div');
        categoryDiv.className = 'equipment-section';
        categoryDiv.innerHTML = `
          <div class="equipment-subtitle">
            <i class="fas fa-flask"></i> ${category.category}
          </div>
          <ul class="equipment-list">
            ${category.items.map(item => `<li><i class="fas fa-check-circle text-cyan-600"></i> ${item}</li>`).join('')}
          </ul>
        `;
        listContainer.appendChild(categoryDiv);
      });
    } else {
      // Para ensayos sin categorías (lista simple)
      const ul = document.createElement('ul');
      ul.className = 'equipment-list';
      data.ensayos.forEach(item => {
        const li = document.createElement('li');
        li.innerHTML = `<i class="fas fa-check-circle text-cyan-600"></i> ${item}`;
        ul.appendChild(li);
      });
      listContainer.appendChild(ul);
    }
  }

  // Cargar imágenes del carrusel
  const carouselSlides = document.getElementById('ensayoCarouselSlides');
  carouselSlides.innerHTML = '';
  data.imagenes.forEach((img, index) => {
    const slide = document.createElement('div');
    slide.className = 'carousel-slide';
    slide.innerHTML = `
      <img src="${img}" alt="${data.title} - Imagen ${index + 1}">
      <div class="carousel-caption">
        <h4 class="text-xl font-bold">${data.title}</h4>
        <p class="text-sm opacity-90">Imagen ${index + 1} de ${data.imagenes.length}</p>
      </div>
    `;
    carouselSlides.appendChild(slide);
  });

  // Crear dots del carrusel
  const dotsContainer = document.getElementById('ensayoCarouselDots');
  dotsContainer.innerHTML = '';
  data.imagenes.forEach((_, index) => {
    const dot = document.createElement('span');
    dot.className = `carousel-dot ${index === 0 ? 'active' : ''}`;
    dot.onclick = () => goToEnsayoSlide(index);
    dotsContainer.appendChild(dot);
  });

  currentEnsayoSlide = 0;
  updateEnsayoCarousel();

  // Mostrar modal
  document.getElementById('ensayoModal').classList.add('active');
  document.body.style.overflow = 'hidden';

  // Iniciar carrusel automático
  startEnsayoAutoSlide();
}

function closeEnsayoModal() {
  document.getElementById('ensayoModal').classList.remove('active');
  document.body.style.overflow = 'auto';
  stopEnsayoAutoSlide();
}

function changeEnsayoSlide(direction) {
  const data = ensayoData[currentEnsayo];
  if (!data) return;
  
  currentEnsayoSlide = (currentEnsayoSlide + direction + data.imagenes.length) % data.imagenes.length;
  updateEnsayoCarousel();
  resetEnsayoAutoSlide();
}

function goToEnsayoSlide(index) {
  currentEnsayoSlide = index;
  updateEnsayoCarousel();
  resetEnsayoAutoSlide();
}

function updateEnsayoCarousel() {
  const slides = document.getElementById('ensayoCarouselSlides');
  const dots = document.querySelectorAll('#ensayoCarouselDots .carousel-dot');
  
  slides.style.transform = `translateX(-${currentEnsayoSlide * 100}%)`;
  
  dots.forEach((dot, index) => {
    dot.classList.toggle('active', index === currentEnsayoSlide);
  });
}

function startEnsayoAutoSlide() {
  ensayoSlideInterval = setInterval(() => {
    changeEnsayoSlide(1);
  }, 5000);
}

function stopEnsayoAutoSlide() {
  if (ensayoSlideInterval) {
    clearInterval(ensayoSlideInterval);
  }
}

function resetEnsayoAutoSlide() {
  stopEnsayoAutoSlide();
  startEnsayoAutoSlide();
}

// Pausar carrusel del modal al hacer hover
const ensayoModalCarousel = document.querySelector('#ensayoModal .carousel-container');
if (ensayoModalCarousel) {
  ensayoModalCarousel.addEventListener('mouseenter', stopEnsayoAutoSlide);
  ensayoModalCarousel.addEventListener('mouseleave', startEnsayoAutoSlide);
}

// Cerrar modal con tecla ESC
document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') {
    if (document.getElementById('ensayoModal').classList.contains('active')) {
      closeEnsayoModal();
    }
  }
});

// Asegurar que las funciones estén disponibles globalmente
window.openServiceModal = openServiceModal;
window.closeServiceModal = closeServiceModal;
window.changeSlide = changeSlide;
window.goToSlide = goToSlide;
window.toggleMission = toggleMission;
window.toggleVision = toggleVision;
