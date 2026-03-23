// Variables para el modal
let currentSlide = 0;
let currentService = '';
let slideInterval;

// Datos de los servicios (imágenes y descripciones)
const serviceData = {
  suelos: {
    title: 'LABORATORIO DE MECÁNICA DE SUELOS',
    description: 'Realizamos estudios completos de mecánica de suelos para determinar las propiedades físicas y mecánicas del terreno. Nuestros ensayos siguen estrictamente las normas técnicas nacionales e internacionales, garantizando resultados precisos y confiables para tus proyectos de construcción.',
    normas: ['NTP 339.129', 'ASTM D422', 'ASTM D4318', 'ASTM D698', 'AASHTO T89', 'AASHTO T90'],
    servicios: [
      'Análisis granulométrico por tamizado',
      'Límites de Atterberg (Líquido y Plástico)',
      'Clasificación de suelos SUCS y AASHTO',
      'Ensayo de compactación Proctor',
      'Corte directo',
      'Consolidación unidimensional',
      'Densidad máxima y mínima',
      'Contenido de humedad'
    ],
    imagenes: [
      'https://images.unsplash.com/photo-1581094794329-8114a89e3f9b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1581094794329-8114a89e3f9b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1581094794329-8114a89e3f9b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    ]
  },
  concreto: {
    title: 'LABORATORIO DE TECNOLOGÍA DEL CONCRETO',
    description: 'Ofrecemos ensayos completos de tecnología del concreto para garantizar la calidad y durabilidad de tus estructuras. Nuestro laboratorio cuenta con equipos de última generación y personal altamente calificado.',
    normas: ['NTP 339.034', 'ASTM C39', 'ASTM C31', 'ASTM C143', 'AASHTO T22'],
    servicios: [
      'Ensayo de resistencia a la compresión de probetas',
      'Diseño de mezclas de concreto',
      'Ensayo de asentamiento (Slump)',
      'Peso unitario del concreto',
      'Contenido de aire',
      'Temperatura del concreto',
      'Elaboración y curado de especímenes',
      'Ensayo de tracción indirecta'
    ],
    imagenes: [
      'https://images.unsplash.com/photo-1581094794329-8114a89e3f9b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1581094794329-8114a89e3f9b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1581094794329-8114a89e3f9b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    ]
  },
  supervision: {
    title: 'SUPERVISIÓN DE OBRAS',
    description: 'Brindamos servicios profesionales de supervisión de obras civiles, asegurando que los proyectos se ejecuten según las especificaciones técnicas, planos y normativa vigente, garantizando la calidad y seguridad de la construcción.',
    normas: ['RNE', 'NTP', 'Especificaciones técnicas del proyecto'],
    servicios: [
      'Control de calidad de materiales',
      'Verificación de planos y especificaciones',
      'Supervisión de procesos constructivos',
      'Control de compactación en campo',
      'Verificación de armaduras y encofrados',
      'Control de resistencia del concreto',
      'Informes periódicos de supervisión',
      'Acta de recepción de obra'
    ],
    imagenes: [
      'https://images.unsplash.com/photo-1581094794329-8114a89e3f9b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1581094794329-8114a89e3f9b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1581094794329-8114a89e3f9b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    ]
  },
  topografia: {
    title: 'LEVANTAMIENTOS TOPOGRÁFICOS',
    description: 'Realizamos levantamientos topográficos de alta precisión utilizando equipos de última generación. Nuestros servicios incluyen modelos digitales de terreno, replanteos y planos topográficos para proyectos de ingeniería y construcción.',
    normas: ['NTP', 'Especificaciones técnicas del proyecto'],
    servicios: [
      'Levantamiento con estación total',
      'Levantamiento con GPS diferencial',
      'Modelos digitales de terreno (DTM)',
      'Curvas de nivel',
      'Replanteo de obras',
      'Secciones transversales',
      'Cálculo de volúmenes',
      'Planos topográficos en CAD'
    ],
    imagenes: [
      'https://images.unsplash.com/photo-1581094794329-8114a89e3f9b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1581094794329-8114a89e3f9b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1581094794329-8114a89e3f9b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    ]
  },
  catastro: {
    title: 'REGULARIZACIÓN CATASTRAL DE PREDIOS',
    description: 'Ofrecemos servicios completos de regularización catastral para predios urbanos y rurales. Gestionamos todo el proceso administrativo y técnico para el saneamiento físico legal de propiedades.',
    normas: ['Ley 27157', 'Ley 29151', 'Reglamento de la SUNARP'],
    servicios: [
      'Levantamiento catastral',
      'Planos perimétricos',
      'Planos de ubicación y localización',
      'Memoria descriptiva',
      'Declaratoria de fábrica',
      'Independización de predios',
      'Prescripción adquisitiva',
      'Subdivisión de lotes'
    ],
    imagenes: [
      'https://images.unsplash.com/photo-1581094794329-8114a89e3f9b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1581094794329-8114a89e3f9b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1581094794329-8114a89e3f9b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    ]
  },
  expedientes: {
    title: 'ELABORACIÓN Y EJECUCIÓN DE EXPEDIENTES TÉCNICOS',
    description: 'Elaboramos expedientes técnicos completos para proyectos de ingeniería civil y arquitectura. Incluimos toda la documentación necesaria para la ejecución y licenciamiento de obras.',
    normas: ['RNE', 'NTP', 'Ley de Contrataciones del Estado'],
    servicios: [
      'Memoria descriptiva',
      'Planos de arquitectura e ingeniería',
      'Especificaciones técnicas',
      'Metrados',
      'Presupuesto de obra',
      'Análisis de precios unitarios',
      'Cronograma de ejecución',
      'Estudios básicos (suelos, topografía)'
    ],
    imagenes: [
      'https://images.unsplash.com/photo-1581094794329-8114a89e3f9b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1581094794329-8114a89e3f9b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1581094794329-8114a89e3f9b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    ]
  },
  alquiler: {
    title: 'ALQUILER DE EQUIPOS',
    description: 'Ponemos a disposición equipos de alta calidad para alquiler, ideales para proyectos de corto y largo plazo. Todos nuestros equipos cuentan con certificados de calibración y mantenimiento.',
    normas: ['NTP', 'ISO', 'Certificados de calibración'],
    servicios: [
      'Estaciones totales',
      'Niveles de precisión',
      'GPS diferencial',
      'Moldes metálicos para probetas',
      'Equipos de laboratorio de suelos',
      'Equipos de laboratorio de concreto',
      'Martillo de Proctor',
      'Balanzas de precisión'
    ],
    imagenes: [
      'https://images.unsplash.com/photo-1581094794329-8114a89e3f9b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1581094794329-8114a89e3f9b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1581094794329-8114a89e3f9b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    ]
  },
  otros: {
    title: 'OTROS SERVICIOS',
    description: 'Ofrecemos servicios complementarios en ingeniería civil, asesoría técnica especializada y capacitaciones para profesionales y empresas del sector construcción.',
    normas: ['NTP', 'ISO', 'RNE'],
    servicios: [
      'Asesoría técnica en proyectos',
      'Capacitaciones en laboratorio de suelos',
      'Capacitaciones en tecnología del concreto',
      'Consultoría en gestión de calidad',
      'Estudios especializados',
      'Peritajes técnicos',
      'Informes geotécnicos',
      'Elaboración de manuales de calidad'
    ],
    imagenes: [
      'https://images.unsplash.com/photo-1581094794329-8114a89e3f9b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1581094794329-8114a89e3f9b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1581094794329-8114a89e3f9b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    ]
  }
};

// Función para abrir el modal del servicio
function openServiceModal(service) {
  currentService = service;
  const data = serviceData[service];
  
  document.getElementById('modalServiceTitle').textContent = data.title;
  document.getElementById('modalServiceDescription').textContent = data.description;
  
  // Cargar normas
  const normasContainer = document.getElementById('modalServiceNormas');
  normasContainer.innerHTML = '';
  data.normas.forEach(norma => {
    const span = document.createElement('span');
    span.className = 'service-tag';
    span.textContent = norma;
    normasContainer.appendChild(span);
  });

  // Cargar lista de servicios
  const listContainer = document.getElementById('modalServiceList');
  listContainer.innerHTML = '';
  data.servicios.forEach(servicio => {
    const li = document.createElement('li');
    li.className = 'flex items-start gap-2';
    li.innerHTML = `<i class="fas fa-check-circle text-cyan-600 mt-1"></i><span class="text-gray-600">${servicio}</span>`;
    listContainer.appendChild(li);
  });

  // Cargar imágenes del carrusel
  const carouselSlides = document.getElementById('carouselSlides');
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
  const dotsContainer = document.getElementById('carouselDots');
  dotsContainer.innerHTML = '';
  data.imagenes.forEach((_, index) => {
    const dot = document.createElement('span');
    dot.className = `carousel-dot ${index === 0 ? 'active' : ''}`;
    dot.onclick = () => goToSlide(index);
    dotsContainer.appendChild(dot);
  });

  currentSlide = 0;
  updateCarousel();

  // Mostrar modal
  document.getElementById('serviceModal').classList.add('active');
  document.body.style.overflow = 'hidden';

  // Iniciar carrusel automático
  startAutoSlide();
}

function closeServiceModal() {
  document.getElementById('serviceModal').classList.remove('active');
  document.body.style.overflow = 'auto';
  stopAutoSlide();
}

function changeSlide(direction) {
  const data = serviceData[currentService];
  if (!data) return;
  
  currentSlide = (currentSlide + direction + data.imagenes.length) % data.imagenes.length;
  updateCarousel();
  resetAutoSlide();
}

function goToSlide(index) {
  currentSlide = index;
  updateCarousel();
  resetAutoSlide();
}

function updateCarousel() {
  const slides = document.getElementById('carouselSlides');
  const dots = document.querySelectorAll('#carouselDots .carousel-dot');
  
  slides.style.transform = `translateX(-${currentSlide * 100}%)`;
  
  dots.forEach((dot, index) => {
    dot.classList.toggle('active', index === currentSlide);
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
const modalCarousel = document.querySelector('.carousel-container');
if (modalCarousel) {
  modalCarousel.addEventListener('mouseenter', stopAutoSlide);
  modalCarousel.addEventListener('mouseleave', startAutoSlide);
}

// Cerrar modal con tecla ESC
document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') {
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
