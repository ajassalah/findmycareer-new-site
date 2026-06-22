import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

export function ParticleBackground() {
  const [ready, setReady] = useState(false);
  useEffect(() => {
    initParticlesEngine(async (engine) => { await loadSlim(engine); }).then(() => setReady(true));
  }, []);
  if (!ready) return null;
  return (
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
  );
}
