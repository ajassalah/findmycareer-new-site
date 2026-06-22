import Particles, { ParticlesProvider } from "@tsparticles/react";
import type { Engine } from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";

const init = async (engine: Engine) => { await loadSlim(engine); };

export function ParticleBackground() {
  return (
    <ParticlesProvider init={init}>
      <Particles
        id="hero-particles"
        className="absolute inset-0"
        options={{
          fullScreen: { enable: false },
          background: { color: { value: "transparent" } },
          fpsLimit: 60,
          particles: {
            number: { value: 50, density: { enable: true } },
            color: { value: ["#F59E0B", "#3B82F6", "#ffffff"] },
            opacity: { value: { min: 0.1, max: 0.5 } },
            size: { value: { min: 1, max: 2.5 } },
            move: { enable: true, speed: 0.4, outModes: { default: "out" } },
            links: { enable: true, distance: 120, color: "#3B82F6", opacity: 0.15, width: 1 },
          },
          detectRetina: true,
        }}
      />
    </ParticlesProvider>
  );
}
