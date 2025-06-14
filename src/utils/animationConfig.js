// src/utils/animationConfig.js
// Configuración centralizada para todas las animaciones

export const ANIMATION_DURATIONS = {
  fast: 0.3,
  normal: 0.6,
  slow: 1.2,
  verySlow: 2.0
};

export const EASING_CURVES = {
  romantic: "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
  bounce: "cubic-bezier(0.68, -0.55, 0.265, 1.55)",
  smooth: "cubic-bezier(0.4, 0, 0.2, 1)",
  elastic: "cubic-bezier(0.68, -0.6, 0.32, 1.6)"
};

export const GSAP_DEFAULTS = {
  duration: ANIMATION_DURATIONS.normal,
  ease: "power2.out",
  force3D: true
};

export const MOTION_DEFAULTS = {
  duration: ANIMATION_DURATIONS.normal,
  easing: EASING_CURVES.romantic
};

// Preset animations for common romantic effects
export const ROMANTIC_ANIMATIONS = {
  fadeInUp: {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: ANIMATION_DURATIONS.normal, easing: EASING_CURVES.smooth }
  },
  
  scaleIn: {
    initial: { opacity: 0, scale: 0.8 },
    animate: { opacity: 1, scale: 1 },
    transition: { duration: ANIMATION_DURATIONS.normal, easing: EASING_CURVES.bounce }
  },
  
  heartbeat: {
    animate: { 
      scale: [1, 1.1, 1],
      transition: { 
        duration: 1.5, 
        repeat: Infinity, 
        easing: EASING_CURVES.smooth 
      }
    }
  },
  
  float: {
    animate: { 
      y: [-10, 10, -10],
      transition: { 
        duration: 3, 
        repeat: Infinity, 
        easing: EASING_CURVES.smooth 
      }
    }
  },
  
  glow: {
    animate: {
      boxShadow: [
        "0 0 20px rgba(244, 63, 94, 0.4)",
        "0 0 40px rgba(244, 63, 94, 0.8)",
        "0 0 20px rgba(244, 63, 94, 0.4)"
      ],
      transition: {
        duration: 2,
        repeat: Infinity,
        easing: EASING_CURVES.smooth
      }
    }
  },

  sparkle: {
    animate: {
      rotate: [0, 360],
      scale: [1, 1.2, 1],
      transition: {
        duration: 2,
        repeat: Infinity,
        easing: "linear"
      }
    }
  }
};

// GSAP Timeline presets
export const GSAP_TIMELINES = {
  heroEntry: (elements) => {
    const tl = gsap.timeline();
    tl.fromTo(elements.title, 
      { opacity: 0, y: 100, scale: 0.8 },
      { opacity: 1, y: 0, scale: 1, duration: 1.5, ease: "back.out(1.7)" }
    )
    .fromTo(elements.subtitle,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out" },
      "-=0.8"
    )
    .fromTo(elements.heart,
      { opacity: 0, scale: 0 },
      { opacity: 1, scale: 1.2, duration: 0.8, ease: "elastic.out(1, 0.5)" },
      "-=0.5"
    );
    return tl;
  },

  timelineReveal: (items) => {
    const tl = gsap.timeline();
    items.forEach((item, index) => {
      tl.fromTo(item.icon,
        { opacity: 0, scale: 0, rotation: -180 },
        { opacity: 1, scale: 1, rotation: 0, duration: 0.6, ease: "back.out(1.7)" },
        index * 0.3
      )
      .fromTo(item.content,
        { opacity: 0, x: index % 2 === 0 ? -100 : 100, y: 50 },
        { opacity: 1, x: 0, y: 0, duration: 0.8, ease: "power3.out" },
        index * 0.3 + 0.2
      );
    });
    return tl;
  },

  cardHover: (card) => {
    const tl = gsap.timeline({ paused: true });
    tl.to(card, {
      y: -10,
      scale: 1.05,
      boxShadow: "0 20px 40px rgba(244, 63, 94, 0.3)",
      duration: 0.3,
      ease: "power2.out"
    });
    return tl;
  },

  heartExplosion: (x, y, count = 12) => {
    const hearts = [];
    const heartEmojis = ['💕', '💖', '💗', '💝', '💞', '💘', '❤️', '💓'];
    
    for (let i = 0; i < count; i++) {
      const heart = document.createElement('div');
      heart.textContent = heartEmojis[Math.floor(Math.random() * heartEmojis.length)];
      heart.className = 'fixed pointer-events-none text-3xl z-50';
      heart.style.left = x + 'px';
      heart.style.top = y + 'px';
      document.body.appendChild(heart);
      hearts.push(heart);
    }

    const tl = gsap.timeline({
      onComplete: () => hearts.forEach(heart => heart.remove())
    });

    hearts.forEach((heart, i) => {
      const angle = (Math.PI * 2 * i) / count;
      const distance = gsap.utils.random(100, 300);
      const targetX = x + Math.cos(angle) * distance;
      const targetY = y + Math.sin(angle) * distance;

      tl.fromTo(heart,
        { 
          x: 0, 
          y: 0, 
          scale: 0, 
          rotation: 0, 
          opacity: 1 
        },
        {
          x: targetX - x,
          y: targetY - y,
          scale: gsap.utils.random(1, 2),
          rotation: gsap.utils.random(360, 720),
          opacity: 0,
          duration: gsap.utils.random(1.5, 2.5),
          ease: "power2.out"
        },
        i * 0.05
      );
    });

    return tl;
  }
};

// ScrollTrigger configurations
export const SCROLL_CONFIGS = {
  fadeInUp: {
    trigger: null, // Will be set dynamically
    start: "top 80%",
    end: "bottom 20%",
    toggleActions: "play none none reverse"
  },

  parallax: {
    trigger: null,
    start: "top bottom",
    end: "bottom top",
    scrub: true
  },

  pin: {
    trigger: null,
    start: "top top",
    end: "+=100%",
    pin: true,
    scrub: 1
  },

  batch: {
    start: "top 85%",
    end: "bottom 15%",
    onEnter: (elements) => {
      gsap.fromTo(elements, 
        { opacity: 0, y: 60, scale: 0.8 },
        { opacity: 1, y: 0, scale: 1, duration: 0.8, stagger: 0.15, ease: "back.out(1.7)" }
      );
    },
    onLeave: (elements) => {
      gsap.to(elements, { opacity: 0.3, duration: 0.3 });
    },
    onEnterBack: (elements) => {
      gsap.to(elements, { opacity: 1, duration: 0.3 });
    }
  }
};

// Motion variants for complex animations
export const MOTION_VARIANTS = {
  container: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  },

  item: {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: EASING_CURVES.romantic
      }
    }
  },

  romantic: {
    rest: {
      scale: 1,
      rotate: 0,
      filter: "brightness(1)"
    },
    hover: {
      scale: 1.05,
      rotate: 5,
      filter: "brightness(1.2)",
      transition: {
        duration: 0.3,
        ease: EASING_CURVES.bounce
      }
    },
    tap: {
      scale: 0.95,
      transition: {
        duration: 0.1
      }
    }
  },

  love: {
    hidden: {
      scale: 0,
      opacity: 0,
      rotate: -180
    },
    visible: {
      scale: 1,
      opacity: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20
      }
    },
    exit: {
      scale: 0,
      opacity: 0,
      rotate: 180,
      transition: {
        duration: 0.3
      }
    }
  }
};

// Utility functions for animations
export const AnimationUtils = {
  // Create random romantic colors
  getRandomRomanticColor: () => {
    const colors = [
      'rgba(244, 63, 94, 0.8)',   // rose
      'rgba(236, 72, 153, 0.8)',  // pink
      'rgba(168, 85, 247, 0.8)',  // purple
      'rgba(139, 69, 19, 0.8)',   // brown
      'rgba(239, 68, 68, 0.8)'    // red
    ];
    return colors[Math.floor(Math.random() * colors.length)];
  },

  // Generate random position within bounds
  getRandomPosition: (bounds = { x: window.innerWidth, y: window.innerHeight }) => ({
    x: Math.random() * bounds.x,
    y: Math.random() * bounds.y
  }),

  // Create smooth transition between values
  lerp: (start, end, factor) => start + (end - start) * factor,

  // Clamp value between min and max
  clamp: (value, min, max) => Math.min(Math.max(value, min), max),

  // Get element center position
  getElementCenter: (element) => {
    const rect = element.getBoundingClientRect();
    return {
      x: rect.left + rect.width / 2,
      y: rect.top + rect.height / 2
    };
  }
};

export default {
  ANIMATION_DURATIONS,
  EASING_CURVES,
  GSAP_DEFAULTS,
  MOTION_DEFAULTS,
  ROMANTIC_ANIMATIONS,
  GSAP_TIMELINES,
  SCROLL_CONFIGS,
  MOTION_VARIANTS,
  AnimationUtils
};