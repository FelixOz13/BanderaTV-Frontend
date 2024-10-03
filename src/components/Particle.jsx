import { useEffect, useMemo, useState, useCallback } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

const Particle = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    console.log(container);
  }, []);

  const options = useMemo(
    () => ({
      autoPlay: true,
      background: {
        color: {
          value: "transparent",
        },
      },
      fullScreen: {
        enable: true,
        zIndex: -1,
      },
      detectRetina: true,
      fpsLimit: 120,
      interactivity: {
        detectsOn: "window",
        events: {
          onHover: {
            enable: true,
            mode: "grab",
          },
          resize: {
            delay: 0.5,
            enable: true,
          },
        },
        modes: {
          trail: {
            delay: 0.005,
            pauseOnStop: true,
            quantity: 225,
            particles: {
              color: {
                value: "#ff0000",
                animation: {
                  enable: true,
                  speed: 400,
                  sync: true,
                },
              },
              move: {
                speed: 2,
                outModes: {
                  default: "destroy",
                },
              },
              size: {
                value: { min: 1, max: 5 },
                animation: {
                  enable: true,
                  speed: 5,
                  sync: true,
                  startValue: "min",
                  destroy: "max",
                },
              },
            },
          },
        },
      },
      particles: {
        number: {
          density: {
            enable: true,
            width: 520,
            height: 1080,
          },
          value: 100,
        },
        color: {
          value: "#ff0000",
          animation: {
            h: {
              enable: true,
              speed: 50,
              sync: false,
            },
          },
        },
        move: {
          enable: true,
          speed: 2,
          outModes: {
            default: "out",
          },
        },
        opacity: {
          value: { min: 0.3, max: 0.8 },
          animation: {
            enable: true,
            speed: 0.5,
            startValue: "random",
          },
        },
        size: {
          value: { min: 1, max: 3 },
          animation: {
            enable: true,
            speed: 1,
          },
        },
        links: {
          enable: true,
          distance: 50,
          color: "random",
          opacity: 1,
          width: 1,
        },
      },
      pauseOnBlur: true,
      pauseOnOutsideViewport: true,
    }),
    []
  );

  if (!init) return null;

  return <Particles id="tsparticles" particlesLoaded={particlesLoaded} options={options} />;
};

export default Particle;
