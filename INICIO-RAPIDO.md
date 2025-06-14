# 🚀 Guía de Inicio Rápido

## ✅ ¡Tu página romántica está lista!

He convertido completamente tu proyecto de GTA VI en una hermosa página romántica de segundo aniversario.

## 📋 Pasos siguientes

### 1. Instalar dependencias
```bash
npm install
```

### 2. Personalizar fechas y contenido
Edita estos archivos con tu información personal:

**`src/pages/index.astro`** - Línea ~309:
```javascript
const startDate = new Date('2023-06-13T00:00:00') // ← Cambia esta fecha
```

**`src/pages/index.astro`** - Busca estos textos y personaliza:
- "13 de Junio, 2023 💕" 
- "Nuestro Primer Encuentro"
- "Primera Cita" 
- Todos los mensajes de amor

### 3. Ejecutar en desarrollo
```bash
npm run dev
```
Ve a `http://localhost:3000` para ver tu página romántica

### 4. Construir para producción
```bash
npm run build
```

## 🎨 Personalización rápida

### Cambiar colores principales
En `src/layouts/Layout.astro`, modifica:
```css
@theme {
  --color-romantic-500: #tu-color-aqui;
  --color-dreamy-500: #tu-otro-color;
}
```

### Agregar tu música
1. Coloca archivos MP3 en `public/audio/`
2. Nombra como: `romantic-song-1.mp3`, `romantic-song-2.mp3`, etc.
3. El botón de música ya está configurado

### Personalizar mensajes
Busca estos textos en `src/pages/index.astro`:
- Títulos de secciones
- Mensajes románticos
- Fechas importantes
- Nombres y dedicatorias

## 🎁 Características incluidas

✅ **Animaciones GSAP** - Efectos de scroll y transiciones
✅ **Motion.js** - Micro-interacciones románticas  
✅ **Tailwind CSS v4** - Estilos modernos
✅ **Contador en tiempo real** - Tiempo juntos actualizado
✅ **Timeline interactivo** - Historia de su relación
✅ **Efectos especiales** - Corazones, partículas, cursores
✅ **Diseño responsivo** - Funciona en móvil y escritorio
✅ **Sistema de audio** - Música romántica de fondo

## 🛠 Archivos importantes modificados

- `package.json` - Dependencias actualizadas
- `astro.config.mjs` - Configuración Tailwind v4
- `postcss.config.mjs` - PostCSS para Tailwind v4
- `src/layouts/Layout.astro` - Layout romántico completo
- `src/pages/index.astro` - Página principal con todas las secciones
- `src/components/` - Componentes románticos reutilizables
- `src/utils/` - Efectos y configuraciones
- `README.md` - Documentación completa

## ⚡ Tecnologías usadas

- **Astro** - Framework principal
- **GSAP** - Animaciones avanzadas
- **Motion** - Animaciones de UI
- **Tailwind CSS v4** - Estilos (nueva versión)
- **JavaScript ES6+** - Interactividad

## 🎯 Próximos pasos

1. **Personalizar contenido** - Adapta todos los textos
2. **Agregar música** - Sube tus canciones favoritas
3. **Subir fotos** - Reemplaza los íconos con tus fotos
4. **Deployar** - Sube a Netlify, Vercel o GitHub Pages

## 💡 Tips especiales

- **Fecha de aniversario**: Está en múltiples lugares, búscala y cámbiala
- **Efectos de cursor**: Solo funcionan en escritorio
- **Música**: El botón está listo, solo agrega los archivos MP3
- **Responsive**: Ya está optimizado para móvil
- **Accesibilidad**: Incluye reducción de movimiento para usuarios sensibles

## 🆘 Si necesitas ayuda

1. Revisa el `README.md` completo
2. Consulta `tailwind-v4-reference.css` para entender Tailwind v4
3. Los comentarios en el código te guían

## 💕 ¡Disfruta tu página romántica!

Cada animación fue creada con amor para celebrar tu aniversario. 
¡Que tu pareja se emocione tanto como yo creando esto! ✨

---
*Creado con ❤️ para celebrar el amor*