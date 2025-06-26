# CÓDIGO GUERRERO: Budismo Secular para el Dominio Interno

Un sitio web completo para un curso de desarrollo personal basado en budismo secular, diseñado específicamente para hombres que buscan dominio mental y emocional.

## 🚀 Características

- **Diseño moderno y responsivo** con Astro.js y Tailwind CSS
- **Contenido completo** de 7 módulos de entrenamiento (50,000+ palabras)
- **Estética masculina** con colores oscuros y acentos naranja/rojo
- **Navegación intuitiva** entre módulos del curso
- **Optimizado para conversión** con CTAs estratégicos
- **SEO optimizado** con meta tags y estructura semántica

## 📁 Estructura del Proyecto

```
codigo-guerrero/
├── src/
│   ├── components/          # Componentes reutilizables
│   │   ├── Header.astro
│   │   ├── Footer.astro
│   │   └── Button.astro
│   ├── content/            # Contenido del curso
│   │   └── modulos/        # Archivos markdown de cada módulo
│   │       ├── semana-0.md
│   │       ├── modulo-1.md
│   │       ├── modulo-2.md
│   │       ├── modulo-3.md
│   │       ├── modulo-4.md
│   │       ├── modulo-5.md
│   │       └── modulo-6.md
│   ├── layouts/            # Layouts de página
│   │   └── Layout.astro
│   ├── pages/              # Páginas del sitio
│   │   ├── index.astro     # Página principal
│   │   └── curso/          # Páginas del curso
│   │       ├── index.astro
│   │       └── [slug].astro
│   └── styles/
│       └── global.css      # Estilos globales
├── public/                 # Archivos estáticos
│   ├── images/            # Imágenes del sitio
│   ├── favicon.svg
│   └── grid.svg
└── package.json
```

## 🎯 Contenido del Curso

### Semana 0: Protocolo de Inducción
Configuración mental inicial y establecimiento del "Contrato del Guerrero"

### Módulo 1: El Diagnóstico - El Origen del Ruido
La Primera Noble Verdad como diagnóstico clínico del sufrimiento mental

### Módulo 2: El Mapa del Terreno - Apego y Aversión  
La Segunda Noble Verdad: entender las fuerzas que impulsan el sufrimiento

### Módulo 3: La Posibilidad de Silencio - Inmunidad y No-Apego
La Tercera Noble Verdad: impermanencia y estrategias de inmunidad emocional

### Módulo 4: El Arsenal - El Óctuple Protocolo
La Cuarta Noble Verdad: el Noble Óctuple Sendero como framework de acción

### Módulo 5: Neuro-Tecnología del Guerrero - Hackeando tu Hardware
Evidencia científica, neuroplasticidad y autocompasión estratégica

### Módulo 6: Integración - El Dojo es el Mundo
Aplicación práctica en situaciones reales y análisis post-misión

## 🛠️ Tecnologías Utilizadas

- **Astro.js** - Framework web moderno para sitios estáticos
- **Tailwind CSS** - Framework de CSS utilitario
- **TypeScript** - Tipado estático para JavaScript
- **Markdown** - Para el contenido de los módulos

## 🚀 Instalación y Desarrollo

```bash
# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev

# Construir para producción
npm run build

# Vista previa de la build
npm run preview
```

## 🎨 Paleta de Colores

- **Primario**: Gris oscuro (#111827, #1f2937)
- **Acento**: Naranja (#d97706, #f59e0b)
- **Texto**: Blanco (#ffffff) y grises claros
- **Bordes**: Grises medios con acentos naranjas

## 📱 Responsividad

El sitio está completamente optimizado para:
- **Desktop** (1024px+)
- **Tablet** (768px - 1023px)  
- **Mobile** (320px - 767px)

## 🔧 Personalización

### Modificar Colores
Edita las variables CSS en `src/styles/global.css`

### Agregar Contenido
Crea nuevos archivos `.md` en `src/content/modulos/`

### Modificar Layout
Edita `src/layouts/Layout.astro` para cambios globales

## 📈 Optimizaciones SEO

- Meta tags optimizados
- Estructura semántica HTML5
- Open Graph para redes sociales
- Sitemap automático
- URLs amigables

## 🎯 Público Objetivo

Hombres de 25-45 años que buscan:
- Control emocional y mental
- Desarrollo personal basado en ciencia
- Herramientas prácticas sin misticismo
- Comunidad de apoyo masculina

## 📞 Soporte

Para modificaciones o soporte técnico, contacta al desarrollador.

---

**Desarrollado con ❤️ para guerreros modernos que buscan el dominio interno**

