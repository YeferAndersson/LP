# 💕 Página Romántica de Segundo Aniversario

Una hermosa página web interactiva creada con amor para celebrar dos años de felicidad juntos. Construida con Astro, GSAP, Motion y Tailwind CSS v4 para crear una experiencia mágica y romántica.

## ✨ Características

- **Animaciones románticas** con GSAP y Motion
- **Efectos de scroll interactivos** y parallax
- **Timeline de amor** con la historia de la relación
- **Contador en tiempo real** de tiempo juntos
- **Notas de amor interactivas** con efectos especiales
- **Partículas flotantes** y efectos visuales
- **Diseño responsive** optimizado para móvil y escritorio
- **Efectos de cursor románticos** (solo escritorio)
- **Paleta de colores romántica** personalizada

## 🚀 Instalación y Configuración

### Prerrequisitos
- Node.js 18+ 
- npm o yarn

### Pasos de instalación

1. **Instalar dependencias:**
```bash
npm install
```

2. **Configurar fechas personales:**
Edita `src/pages/index.astro` y cambia la fecha de inicio:
```javascript
const startDate = new Date('2023-06-13T00:00:00') // Cambia por tu fecha
```

3. **Personalizar contenido:**
- Edita los textos en las secciones
- Cambia los nombres y mensajes personales
- Actualiza las fechas y eventos especiales

4. **Ejecutar en desarrollo:**
```bash
npm run dev
```

5. **Construir para producción:**
```bash
npm run build
```

## 🎨 Personalización

### Configuración de Tailwind CSS v4
En lugar del archivo `tailwind.config.js`, Tailwind v4 usa configuración CSS directa:
- **Configuración**: Se hace en `src/layouts/Layout.astro` usando `@theme {}`
- **Colores**: Definidos como variables CSS (`--color-romantic-*`)
- **Utilidades personalizadas**: Creadas con `@utility`
- **Animaciones**: Definidas como `@keyframes` regulares

### Colores románticos
El proyecto incluye colores personalizados:
- `romantic-*`: Tonos de rosa y rojo
- `dreamy-*`: Tonos de púrpura y violeta

### Animaciones
Las animaciones están configuradas directamente en CSS:
- Duraciones personalizables con variables CSS
- Curvas de easing románticas
- Efectos preconfigurados

### Fuentes
- **Sans**: Inter (texto general)
- **Cursive**: Dancing Script (títulos románticos)

## 📁 Estructura del proyecto

```
src/
├── layouts/
│   └── Layout.astro          # Layout principal con estilos globales
├── pages/
│   └── index.astro           # Página principal romántica
├── components/
│   └── RomanticComponents.astro # Componentes románticos reutilizables
└── utils/
    ├── romanticEffects.js    # Efectos especiales románticos
    └── animationConfig.js    # Configuración de animaciones
```

## 🎭 Secciones incluidas

1. **Hero romántico** - Título principal con animaciones
2. **Timeline de amor** - Historia cronológica de la relación
3. **Contador en vivo** - Tiempo transcurrido desde el inicio
4. **Carta de amor** - Mensaje romántico principal
5. **Galería de recuerdos** - Momentos especiales
6. **Sueños futuros** - Planes y metas juntos
7. **Notas interactivas** - Mensajes clickeables
8. **Mensaje final** - Declaración de amor

## 🎮 Efectos interactivos

- **Clic en corazones**: Explosión de corazones
- **Hover en tarjetas**: Efectos de brillo y escala
- **Scroll parallax**: Movimiento suave de elementos
- **Cursor trail**: Rastro de corazones (escritorio)
- **Partículas flotantes**: Ambiente romántico
- **Estrellas fugaces**: Efectos especiales aleatorios

## 📱 Responsive Design

La página está optimizada para:
- **Móvil**: 375px - 768px
- **Tablet**: 768px - 1024px  
- **Escritorio**: 1024px+
- **4K**: 1600px+

## 🎵 Características adicionales

### Música (Placeholder)
El botón de música está preparado para integrar audio:
```javascript
// En src/pages/index.astro
document.getElementById('music-toggle')?.addEventListener('click', () => {
  // Agregar lógica de música de fondo aquí
})
```

### Efectos de sonido
Los efectos están configurados en `romanticEffects.js` para:
- Sonidos de clic suaves
- Efectos de hover
- Latidos del corazón

## 🛠 Tecnologías utilizadas

- **[Astro](https://astro.build)** - Framework estático moderno
- **[GSAP](https://greensock.com/gsap/)** - Animaciones premium
- **[Motion](https://motion.dev)** - Animaciones React/JavaScript
- **[Tailwind CSS v4](https://tailwindcss.com)** - Framework CSS utility-first (nueva versión)
- **[Google Fonts](https://fonts.google.com)** - Tipografías
- **JavaScript ES6+** - Interactividad moderna

## 🔧 Configuración de Tailwind v4

Este proyecto usa **Tailwind CSS v4** que tiene cambios importantes:

### Diferencias principales:
- ❌ **No más `tailwind.config.js`**
- ✅ **Configuración CSS**: Se usa `@theme {}` en el CSS
- ✅ **Importación**: `@import "tailwindcss"` en lugar de `@tailwind`
- ✅ **Plugin de Vite**: `@tailwindcss/vite` para mejor rendimiento

### Estructura de configuración:
```css
@import "tailwindcss";

@theme {
  --color-romantic-500: #ea546c;
  --font-cursive: "Dancing Script", cursive;
  --breakpoint-3xl: 1600px;
}

@utility text-gradient {
  background: linear-gradient(135deg, #f43f5e, #ec4899, #a855f7);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
```

## 🎨 Paleta de colores

```css
/* Romántico */
--color-romantic-400: #f27a93
--color-romantic-500: #ea546c
--color-romantic-600: #d83454

/* Soñador */
--color-dreamy-400: #c4a1ff
--color-dreamy-500: #a855f7
--color-dreamy-600: #9333ea

/* Gradientes */
background: linear-gradient(135deg, #f43f5e, #ec4899, #a855f7)
```

## 📝 Personalización avanzada

### Agregar nuevas secciones
1. Crea el HTML en `index.astro`
2. Agrega animaciones en el script
3. Estiliza con clases de Tailwind CSS

### Modificar colores temáticos
Edita las variables CSS en `src/layouts/Layout.astro`:
```css
@theme {
  --color-tu-color-500: #tu-hex-aqui;
  --color-tu-color-600: #otro-hex;
}
```

### Agregar utilidades personalizadas
```css
@utility mi-estilo {
  background: tu-fondo;
  color: tu-color;
}
```

### Modificar timeline
Edita el array de eventos en la sección timeline:
```javascript
const timelineEvents = [
  {
    title: "Nuestro encuentro",
    date: "Fecha personalizada", 
    description: "Tu historia única"
  }
]
```

### Cambiar efectos
Modifica `romanticEffects.js` para:
- Diferentes tipos de partículas
- Nuevos efectos de cursor
- Animaciones personalizadas

### Agregar nuevas animaciones
En `src/layouts/Layout.astro`:
```css
@keyframes mi-animacion {
  0% { transform: scale(1); }
  50% { transform: scale(1.1); }
  100% { transform: scale(1); }
}

@utility animate-mi-animacion {
  animation: mi-animacion 2s ease-in-out infinite;
}
```

## 🌟 Consejos de personalización

1. **Fecha de aniversario**: Actualiza en múltiples lugares
2. **Colores temáticos**: Modifica las variables CSS en `@theme {}`
3. **Mensajes personales**: Cambia todos los textos
4. **Fotos**: Agrega tus propias imágenes
5. **Música**: Integra tu canción especial
6. **Utilidades CSS**: Usa `@utility` para estilos personalizados
7. **Variables de diseño**: Define todo en `@theme {}` en lugar de JS

## ⚡ Diferencias con Tailwind v3

Si vienes de Tailwind v3, ten en cuenta estos cambios:

### ❌ Lo que ya no se usa:
- `tailwind.config.js`
- `@tailwind base; @tailwind components; @tailwind utilities;`
- Configuración JavaScript del tema

### ✅ Lo que ahora se usa:
- `@import "tailwindcss"`
- `@theme {}` para configuración
- `@utility` para utilidades personalizadas
- Variables CSS nativas (`--color-*`, `--font-*`, etc.)

### Migración rápida:
```css
/* Antes (v3) */
@tailwind base;
@tailwind components;
@tailwind utilities;

/* Ahora (v4) */
@import "tailwindcss";
```

## 📞 Soporte

Para personalización adicional o problemas:
- Revisa la documentación de Astro
- Consulta la documentación de GSAP
- Verifica la configuración de Tailwind v4

## 💖 Créditos

Creado con amor para celebrar momentos especiales. La magia está en los detalles y cada animación lleva un pedacito del corazón.

**¡Feliz aniversario! 💕**

---

*"El amor no se mide en tiempo, sino en momentos que nos quitan el aliento."* ✨