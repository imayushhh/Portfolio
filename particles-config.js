// particles-config.js
// defines window.particlesConfig used by index.html

window.particlesConfig = {
  fpsLimit: 60,
  background: { color: "transparent" },
  interactivity: {
    detectsOn: "canvas",
    events: {
      onHover: { enable: true, mode: "repulse" },
      onClick: { enable: true, mode: "push" },
      resize: true
    },
    modes: {
      repulse: { distance: 110, duration: 0.45, speed: 0.5 },
      push: { quantity: 3 }
    }
  },
  particles: {
    number: { value: 250, density: { enable: true, area: 1000 } },
    color: { value: ["#00e0ff", "#3ecdf9", "#9ef6ff", "#7af7ff"] },
    shape: { type: "circle" },
    opacity: {
      value: 0.35,
      random: { enable: true, minimumValue: 0.2 },
      animation: { enable: true, speed: 0.4, minimumValue: 0.05, sync: false }
    },
    size: {
      value: { min: 1.5, max: 3.5 },
      random: true,
      animation: { enable: true, speed: 2, minimumValue: 1, sync: false }
    },
    links: {
      enable: true,
      distance: 140,
      color: "#00e0ff",
      opacity: 0.15,
      width: 1.2
    },
    move: {
      enable: true,
      speed: 0.9,
      direction: "none",
      random: true,
      straight: false,
      outModes: { default: "out" },
      attract: { enable: false }
    }
  },
  detectRetina: true
};
