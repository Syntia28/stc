// script.js
function toggleContent(element, iconClass) {
  // Buscamos el contenedor que está justo después del header
  const content = element.nextElementSibling;
  const icon = element.querySelector(iconClass);

  // Alternamos la clase 'hidden'
  content.classList.toggle("hidden");

  // Cambiamos el icono según el estado
  if (content.classList.contains("hidden")) {
    icon.textContent = "+";
  } else {
    icon.textContent = "-";
  }
}

/* ===== NEW SERVICIOS SECTION SCRIPT ===== */

// Base de datos de ensayos
const ensayosDB = {
    humedad: {
        title: "(MTC E 108) DETERMINACIÓN DEL CONTENIDO DE HUMEDAD DE SUELO",
        desc: "Ensayo fundamental que determina la cantidad de agua presente en una muestra de suelo, expresada como porcentaje de su peso seco. Este parámetro es esencial para la clasificación de suelos, control de compactación y cálculo de relaciones de fase.",
        normas: "NTP 339.127, ASTM D2216, AASHTO T265, MTC E 108"
    },
    granulo: {
        title: "(MTC E 107) ANALISIS GRANULOMETRICO DE SUELO POR TAMIZADO",
        desc: "Procedimiento para determinar la distribución del tamaño de las partículas de una muestra de suelo mediante el uso de tamices normalizados. Permite clasificar el suelo según su gradación y es fundamental para diseños de filtros y mezclas.",
        normas: "NTP 339.128, ASTM D422, AASHTO T88, MTC E 107"
    },
    limites: {
        title: "(MTC E 110) DETERMINACIÓN DEL LIMITE LIQUIDO (LL)",
        desc: "Ensayo que determina el contenido de humedad que delimita el comportamiento plástico y líquido del suelo fino. Se realiza con el equipo de Casagrande y es fundamental para la clasificación de suelos cohesivos.",
        normas: "NTP 339.129, ASTM D4318, AASHTO T89, MTC E 110"
    },
    plasticidad: {
        title: "(MTC E 111) DETERMINACIÓN DEL LIMITE PLASTICO (IP) Y INDICE DE PLASTICIDAD",
        desc: "Determina el contenido de humedad donde el suelo deja de comportarse plásticamente. El Índice de Plasticidad (IP = LL - LP) indica el rango de humedad en que el suelo es plástico y es clave para clasificación de suelos.",
        normas: "NTP 339.129, ASTM D4318, AASHTO T90, MTC E 111"
    },
    gravedad: {
        title: "(MTC E 113) GRAVEDAD ESPECIFICA DE SOLIDOS DE SUELO",
        desc: "Relación entre la masa de las partículas sólidas del suelo y la masa de un volumen igual de agua destilada a 20°C. Este valor es necesario para cálculos de porosidad, relación de vacíos y en la carta de plasticidad.",
        normas: "NTP 339.131, ASTM D854, AASHTO T100, MTC E 113"
    },
    arena: {
        title: "(MTC E 114) EQUIVALENTE DE ARENA DE SUELOS",
        desc: "Ensayo que indica la proporción relativa de finos plásticos o arcillosos presentes en suelos y agregados finos. Valores altos indican suelos granulares limpios, adecuados para bases y subbases.",
        normas: "NTP 339.146, ASTM D2419, AASHTO T176, MTC E 114"
    },
    proctor: {
        title: "(MTC E 115) COMPACTACIÓN DE SUELOS (PROCTOR MODIFICADO)",
        desc: "Determina la relación entre el contenido de humedad y el peso unitario seco del suelo compactado. Establece la máxima densidad seca y la humedad óptima para control de compactación en terracerías.",
        normas: "NTP 339.141, ASTM D1557, AASHTO T180, MTC E 115"
    },
    cono: {
        title: "(MTC E 117) DENSIDAD INSITU - METODO DEL CONO DE ARENA",
        desc: "Método de campo para determinar la densidad y peso unitario del suelo en su lugar mediante la excavación de un hoyo y el reemplazo con arena calibrada. Esencial para control de compactación.",
        normas: "NTP 339.143, ASTM D1556, AASHTO T191, MTC E 117"
    }
};

// Función para abrir modal de servicios generales
function openServiceModal(title, desc) {
    document.getElementById('modal-title').innerText = title;
    document.getElementById('modal-desc').innerText = desc;
    
    // Ocultar sección de normas (no aplica para servicios generales)
    document.getElementById('modal-normas').style.display = 'none';
    
    // Mostrar modal
    document.getElementById('modal-overlay').style.display = 'flex';
}

// Función para abrir modal de ensayos
function openEnsayoModal(key) {
    const ensayo = ensayosDB[key];
    if (ensayo) {
        document.getElementById('modal-title').innerText = ensayo.title;
        document.getElementById('modal-desc').innerText = ensayo.desc;
        document.getElementById('normas-text').innerText = ensayo.normas;
        document.getElementById('modal-normas').style.display = 'block';
        document.getElementById('modal-overlay').style.display = 'flex';
    }
}

// Función para cerrar modal
function closeModal() {
    document.getElementById('modal-overlay').style.display = 'none';
}

// Función para solicitar servicio (simula acción)
function solicitarServicio() {
    const servicio = document.getElementById('modal-title').innerText;
    alert(`📱 Gracias por tu interés en: "${servicio}"\n\nUn asesor se comunicará contigo a la brevedad.\n\n📞 983 157 792\n📧 suelotechcontrol@gmail.com`);
    closeModal();
}

// Cerrar modal al hacer clic en el overlay
const modalOverlay = document.getElementById('modal-overlay');
if (modalOverlay) {
    modalOverlay.addEventListener('click', function(e) {
        if (e.target === this) {
            closeModal();
        }
    });
}

// Funcionalidad de menús desplegables
document.querySelectorAll('.toggle-services-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        const targetId = this.dataset.target;
        const targetMenu = document.getElementById(targetId);
        if(targetMenu) {
            targetMenu.classList.toggle('show');
            this.innerHTML = targetMenu.classList.contains('show') ? '▲ Ocultar servicios' : '▼ Ver servicios adicionales';
        }
    });
});
