window.particlesConfig = {
  fpsLimit: 60,
  background: { color: "transparent" },

  particles: {
    number: {
      value: 160,
      density: { enable: true, area: 1200 }
    },

    color: { value: ["#00e0ff", "#7b61ff", "#99f1ff"] },

    shape: {
      type: "circle"
    },

    opacity: {
      value: 0.5,
      animation: {
        enable: true,
        speed: 0.6,
        minimumValue: 0.2
      }
    },

    size: {
      value: { min: 1.5, max: 3.2 },
      animation: {
        enable: true,
        speed: 2,
        minimumValue: 1
      }
    },

    links: {
      enable: true,
      distance: 150,
      color: "#00e0ff",
      opacity: 0.25,
      width: 1.3,
      triangles: true
    },

    move: {
      enable: true,
      speed: 0.9,
      direction: "none",
      random: false,
      straight: false,
      outModes: { default: "out" },
      attract: { enable: true, rotateX: 600, rotateY: 1200 }
    }
  },

  interactivity: {
    events: {
      onHover: { enable: true, mode: "grab" },
      onClick: { enable: true, mode: "push" },
      resize: true
    },

    modes: {
      grab: {
        distance: 150,
        links: { opacity: 0.6 }
      },
      push: { quantity: 3 }
    }
  },

  detectRetina: true
};
