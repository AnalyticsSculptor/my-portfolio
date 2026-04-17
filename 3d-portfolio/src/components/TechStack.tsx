import * as THREE from "three";
import { useMemo } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, Float, Html } from "@react-three/drei";
import { EffectComposer, N8AO } from "@react-three/postprocessing";
import "./styles/WhatIDo.css";

const textureLoader = new THREE.TextureLoader();

// Expanded tech stack based on your latest projects and expertise
const techData = [
  { name: "Python", url: "/images/python.png" },
  { name: "Docker", url: "/images/docker.png" },
  { name: "MS SQL", url: "/images/sql.png" },
  { name: "PyTorch", url: "/images/pytorch.png" },
  { name: "LangChain", url: "/images/langchain.png" },
  { name: "FastAPI", url: "/images/fastapi.png" },
  { name: "Scikit-Learn", url: "/images/scikit.png" },
  { name: "Git", url: "/images/git.png" },
  { name: "LangGraph", url: "/images/langgraph.png" },
  { name: "ChromaDB", url: "/images/chroma.png" },
  { name: "GCP", url: "/images/gcp.png" },
  { name: "Next.js", url: "/images/next.png" },
];

const textures = techData.map((tech) => textureLoader.load(tech.url));
const sphereGeometry = new THREE.SphereGeometry(1.2, 32, 32);

const TechStack = () => {
  const materials = useMemo(() => {
    return textures.map(
      (texture) =>
        new THREE.MeshPhysicalMaterial({
          map: texture,
          emissive: "#ffffff",
          emissiveMap: texture,
          emissiveIntensity: 0.2,
          metalness: 0.4,
          roughness: 1,
          clearcoat: 0.1,
        })
    );
  }, []);

  return (
    <div className="techstack">
      {/* Heading is now moved out of the Canvas flow via CSS for visibility */}
      <h2 className="techstack-title">My Techstack</h2>

      <Canvas
        shadows
        gl={{ alpha: true, stencil: false, depth: false, antialias: true }}
        camera={{ position: [0, 0, 22], fov: 35, near: 1, far: 100 }}
        onCreated={(state) => (state.gl.toneMappingExposure = 1.5)}
        className="tech-canvas"
      >
        <ambientLight intensity={1.5} />
        <spotLight
          position={[20, 20, 25]}
          penumbra={1}
          angle={0.2}
          color="white"
          castShadow
          shadow-mapSize={[512, 512]}
        />
        <directionalLight position={[0, 5, -4]} intensity={2} />
        
        <group position={[0, 1, 0]}> {/* Shifted group up slightly to make room for labels */}
          {materials.map((material, i) => {
            const columns = 4;
            const col = i % columns; 
            const row = Math.floor(i / columns);
            
            // Dynamic grid calculation to keep the stack perfectly centered
            const x = (col - (columns - 1) / 2) * 4.2; 
            const y = (row - 1) * -4.8; 

            return (
              <Float 
                key={i} 
                speed={2.5} 
                rotationIntensity={0.05} 
                floatIntensity={0.6} 
                floatingRange={[-0.2, 0.2]} 
              >
                <mesh
                  castShadow
                  receiveShadow
                  position={[x, y, 0]}
                  geometry={sphereGeometry}
                  material={material}
                  rotation={[0, 0, 0]} 
                />
                
                <Html 
                  position={[x, y - 1.9, 0]} 
                  center 
                  style={{ pointerEvents: "none" }}
                >
                  <div className="tech-label">
                    {techData[i].name}
                  </div>
                </Html>
              </Float>
            );
          })}
        </group>

        <Environment
          files="/models/char_enviorment.hdr"
          environmentIntensity={0.5}
          environmentRotation={[0, 4, 2]}
        />
        <EffectComposer enableNormalPass={false}>
          <N8AO color="#0f002c" aoRadius={2} intensity={1.15} />
        </EffectComposer>
      </Canvas>
    </div>
  );
};

export default TechStack;