// src/utils/romanticEffects.js

// Romantic effects and utilities
export class RomanticEffects {
  constructor() {
    this.init()
  }

  init() {
    this.createTwinklingStars()
    this.initScrollProgress()
    this.initInteractiveElements()
    this.initSpecialEffects()
    this.initSoundEffects()
  }

  // Create twinkling stars background
  createTwinklingStars() {
    const starsContainer = document.getElementById('twinkling-stars')
    if (!starsContainer) return

    const starCount = 50
    for (let i = 0; i < starCount; i++) {
      const star = document.createElement('div')
      star.className = 'star'
      star.style.left = Math.random() * 100 + '%'
      star.style.top = Math.random() * 100 + '%'
      star.style.width = Math.random() * 3 + 1 + 'px'
      star.style.height = star.style.width
      star.style.animationDelay = Math.random() * 3 + 's'
      star.style.animationDuration = (Math.random() * 2 + 2) + 's'
      starsContainer.appendChild(star)
    }
  }

  // Initialize scroll progress indicator
  initScrollProgress() {
    const progressBar = document.getElementById('scroll-progress-bar')
    if (!progressBar) return

    window.addEventListener('scroll', () => {
      const winScroll = document.body.scrollTop || document.documentElement.scrollTop
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight
      const scrolled = (winScroll / height) * 100
      progressBar.style.width = scrolled + '%'
    })
  }

  // Interactive elements with romantic effects
  initInteractiveElements() {
    // Add click effects to buttons and interactive elements
    const buttons = document.querySelectorAll('button, .romantic-button')
    buttons.forEach(button => {
      button.addEventListener('click', (e) => {
        this.createClickEffect(e.pageX, e.pageY)
      })
    })

    // Add hover effects to cards
    const cards = document.querySelectorAll('.glass-romantic, .memory-card, .timeline-content')
    cards.forEach(card => {
      card.addEventListener('mouseenter', () => {
        this.addSparkleEffect(card)
      })
    })
  }

  // Create click effect with hearts
  createClickEffect(x, y) {
    const hearts = ['💕', '💖', '💗', '💝', '💞', '💘']
    
    for (let i = 0; i < 6; i++) {
      const heart = document.createElement('div')
      heart.textContent = hearts[Math.floor(Math.random() * hearts.length)]
      heart.className = 'fixed pointer-events-none text-2xl'
      heart.style.left = x + 'px'
      heart.style.top = y + 'px'
      heart.style.zIndex = '9999'
      document.body.appendChild(heart)

      // Animate the heart
      const angle = (Math.PI * 2 * i) / 6
      const distance = 100
      const targetX = x + Math.cos(angle) * distance
      const targetY = y + Math.sin(angle) * distance

      heart.animate([
        { 
          transform: 'translate(-50%, -50%) scale(0) rotate(0deg)', 
          opacity: 1 
        },
        { 
          transform: `translate(${targetX - x}px, ${targetY - y}px) scale(1) rotate(360deg)`, 
          opacity: 0 
        }
      ], {
        duration: 1000,
        easing: 'ease-out'
      }).onfinish = () => heart.remove()
    }
  }

  // Add sparkle effect to elements
  addSparkleEffect(element) {
    if (element.querySelector('.sparkle-overlay')) return

    const sparkleOverlay = document.createElement('div')
    sparkleOverlay.className = 'sparkle-overlay absolute inset-0 pointer-events-none'
    sparkleOverlay.style.background = `
      radial-gradient(circle at ${Math.random() * 100}% ${Math.random() * 100}%, rgba(255, 255, 255, 0.3) 0%, transparent 50%),
      radial-gradient(circle at ${Math.random() * 100}% ${Math.random() * 100}%, rgba(255, 255, 255, 0.2) 0%, transparent 50%)
    `
    
    element.style.position = 'relative'
    element.appendChild(sparkleOverlay)

    // Remove after animation
    setTimeout(() => {
      if (sparkleOverlay.parentNode) {
        sparkleOverlay.remove()
      }
    }, 2000)
  }

  // Special effects for romantic moments
  initSpecialEffects() {
    // Heart explosion effect on anniversary date
    const anniversaryDate = document.getElementById('anniversary-date')
    if (anniversaryDate) {
      anniversaryDate.addEventListener('click', () => {
        this.createHeartExplosion()
      })
    }

    // Romantic cursor trail
    this.initRomanticCursor()

    // Ambient particle system
    this.initAmbientParticles()
  }

  // Create heart explosion effect
  createHeartExplosion() {
    const centerX = window.innerWidth / 2
    const centerY = window.innerHeight / 2
    const hearts = ['💕', '💖', '💗', '💝', '💞', '💘', '❤️', '💓', '💔', '💟']

    for (let i = 0; i < 20; i++) {
      const heart = document.createElement('div')
      heart.textContent = hearts[Math.floor(Math.random() * hearts.length)]
      heart.className = 'fixed pointer-events-none text-3xl'
      heart.style.left = centerX + 'px'
      heart.style.top = centerY + 'px'
      heart.style.zIndex = '9999'
      document.body.appendChild(heart)

      const angle = (Math.PI * 2 * i) / 20
      const distance = Math.random() * 300 + 100
      const targetX = centerX + Math.cos(angle) * distance
      const targetY = centerY + Math.sin(angle) * distance

      heart.animate([
        { 
          transform: 'translate(-50%, -50%) scale(0) rotate(0deg)', 
          opacity: 1 
        },
        { 
          transform: `translate(${targetX - centerX}px, ${targetY - centerY}px) scale(1.5) rotate(720deg)`, 
          opacity: 0 
        }
      ], {
        duration: 2000,
        easing: 'cubic-bezier(0.4, 0, 0.2, 1)'
      }).onfinish = () => heart.remove()
    }
  }

  // Romantic cursor trail with hearts
  initRomanticCursor() {
    if (window.innerWidth <= 768) return // Skip on mobile

    const trails = []
    const trailLength = 8
    const hearts = ['💕', '💖', '💗']

    for (let i = 0; i < trailLength; i++) {
      const trail = document.createElement('div')
      trail.textContent = hearts[i % hearts.length]
      trail.className = 'fixed pointer-events-none text-sm opacity-0'
      trail.style.zIndex = '9998'
      document.body.appendChild(trail)
      trails.push(trail)
    }

    let mouseX = 0, mouseY = 0
    let lastTime = 0

    document.addEventListener('mousemove', (e) => {
      mouseX = e.clientX
      mouseY = e.clientY
      
      const currentTime = Date.now()
      if (currentTime - lastTime > 50) { // Throttle
        this.updateCursorTrail(trails, mouseX, mouseY)
        lastTime = currentTime
      }
    })
  }

  updateCursorTrail(trails, x, y) {
    trails.forEach((trail, index) => {
      setTimeout(() => {
        trail.style.left = x + 'px'
        trail.style.top = y + 'px'
        trail.style.opacity = (trails.length - index) / trails.length * 0.8
        trail.style.transform = `translate(-50%, -50%) scale(${(trails.length - index) / trails.length})`
      }, index * 50)
    })
  }

  // Ambient particle system
  initAmbientParticles() {
    const particleCount = 15
    const particles = []

    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement('div')
      particle.className = 'fixed pointer-events-none w-1 h-1 bg-rose-300/30 rounded-full'
      particle.style.zIndex = '1'
      document.body.appendChild(particle)
      
      particles.push({
        element: particle,
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        life: Math.random() * 1000 + 500
      })
    }

    const animateParticles = () => {
      particles.forEach(particle => {
        particle.x += particle.vx
        particle.y += particle.vy
        particle.life--

        // Bounce off edges
        if (particle.x <= 0 || particle.x >= window.innerWidth) {
          particle.vx *= -1
        }
        if (particle.y <= 0 || particle.y >= window.innerHeight) {
          particle.vy *= -1
        }

        // Reset particle when life ends
        if (particle.life <= 0) {
          particle.x = Math.random() * window.innerWidth
          particle.y = Math.random() * window.innerHeight
          particle.life = Math.random() * 1000 + 500
        }

        particle.element.style.left = particle.x + 'px'
        particle.element.style.top = particle.y + 'px'
        particle.element.style.opacity = Math.max(0, particle.life / 1000)
      })

      requestAnimationFrame(animateParticles)
    }

    animateParticles()
  }

  // Sound effects (placeholder for audio integration)
  initSoundEffects() {
    // Placeholder for romantic background music and sound effects
    const soundEffects = {
      click: () => {
        // Play gentle click sound
        console.log('♪ Gentle click sound')
      },
      hover: () => {
        // Play soft hover sound
        console.log('♪ Soft hover sound')
      },
      heartbeat: () => {
        // Play heartbeat sound
        console.log('♪ Heartbeat sound')
      }
    }

    // Add sound to interactive elements
    document.addEventListener('click', soundEffects.click)
    
    const hoverElements = document.querySelectorAll('.memory-card, .timeline-icon, .future-dream')
    hoverElements.forEach(element => {
      element.addEventListener('mouseenter', soundEffects.hover)
    })
  }

  // Create floating love messages
  createFloatingMessage(message, x, y) {
    const messageEl = document.createElement('div')
    messageEl.textContent = message
    messageEl.className = 'fixed pointer-events-none text-rose-300 font-cursive text-lg z-50'
    messageEl.style.left = x + 'px'
    messageEl.style.top = y + 'px'
    document.body.appendChild(messageEl)

    messageEl.animate([
      { 
        transform: 'translate(-50%, -50%) scale(0)', 
        opacity: 0 
      },
      { 
        transform: 'translate(-50%, -100px) scale(1)', 
        opacity: 1 
      },
      { 
        transform: 'translate(-50%, -200px) scale(0.8)', 
        opacity: 0 
      }
    ], {
      duration: 3000,
      easing: 'ease-out'
    }).onfinish = () => messageEl.remove()
  }

  // Generate random romantic messages
  getRandomLoveMessage() {
    const messages = [
      "Te amo 💕",
      "Eres mi todo ❤️",
      "Juntos para siempre 💞",
      "Mi corazón es tuyo 💖",
      "Eres mi felicidad 🌟",
      "Mi amor eterno 💗",
      "Contigo soy completo/a 💝"
    ]
    return messages[Math.floor(Math.random() * messages.length)]
  }
}

// Special date functions
export class AnniversaryUtils {
  static calculateTimeTogether(startDate) {
    const start = new Date(startDate)
    const now = new Date()
    const diff = now - start
    
    const days = Math.floor(diff / (1000 * 60 * 60 * 24))
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))
    
    return { days, hours, minutes }
  }

  static formatTimeMessage(timeObj) {
    return `${timeObj.days} días, ${timeObj.hours} horas y ${timeObj.minutes} minutos juntos 💕`
  }

  static generateAnniversaryFacts(years) {
    const facts = [
      `En ${years} años hemos compartido aproximadamente ${years * 365} días de felicidad`,
      `Hemos dicho "te amo" más de ${years * 365 * 3} veces`,
      `${years * 12} meses de aventuras juntos`,
      `Más de ${years * 52} semanas de sonrisas compartidas`
    ]
    return facts
  }
}

// Initialize romantic effects when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  new RomanticEffects()
  
  // Display time together
  const timeElement = document.getElementById('anniversary-date')
  if (timeElement) {
    const timeData = AnniversaryUtils.calculateTimeTogether('2023-06-13')
    timeElement.textContent = AnniversaryUtils.formatTimeMessage(timeData)
  }
})