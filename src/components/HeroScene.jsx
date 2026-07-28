import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float, MeshDistortMaterial } from '@react-three/drei'
import * as THREE from 'three'

function GoldSphere({ position, scale, speed }) {
  const ref = useRef()
  useFrame((s) => {
    if (ref.current) {
      ref.current.rotation.x = s.clock.elapsedTime * 0.15 * speed
      ref.current.rotation.y = s.clock.elapsedTime * 0.22 * speed
    }
  })
  return (
    <Float speed={speed * 1.5} floatIntensity={0.6} rotationIntensity={0.2}>
      <mesh ref={ref} position={position} scale={scale}>
        <icosahedronGeometry args={[1, 2]} />
        <meshStandardMaterial color="#C9963A" metalness={0.95} roughness={0.05} />
      </mesh>
    </Float>
  )
}

function MainOrb() {
  const ref = useRef()
  useFrame((s) => {
    if (ref.current) ref.current.rotation.y = s.clock.elapsedTime * 0.12
  })
  return (
    <mesh ref={ref}>
      <sphereGeometry args={[1.4, 48, 48]} />
      <MeshDistortMaterial
        color="#E0C060"
        metalness={1.0}
        roughness={0.03}
        distort={0.12}
        speed={1.2}
      />
    </mesh>
  )
}

function Ring({ radius, tube, speed, tiltX }) {
  const ref = useRef()
  useFrame((s) => {
    if (ref.current) {
      ref.current.rotation.z = s.clock.elapsedTime * speed
      ref.current.rotation.x = tiltX + Math.sin(s.clock.elapsedTime * 0.3) * 0.05
    }
  })
  return (
    <mesh ref={ref}>
      <torusGeometry args={[radius, tube, 16, 90]} />
      <meshStandardMaterial color="#C9963A" metalness={0.9} roughness={0.1} transparent opacity={0.6} />
    </mesh>
  )
}

function Particles() {
  const positions = useMemo(() => {
    const arr = new Float32Array(400 * 3)
    for (let i = 0; i < 400; i++) {
      const r = 2.5 + Math.random() * 7
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos(2 * Math.random() - 1)
      arr[i*3]   = r * Math.sin(phi) * Math.cos(theta)
      arr[i*3+1] = r * Math.sin(phi) * Math.sin(theta)
      arr[i*3+2] = r * Math.cos(phi)
    }
    return arr
  }, [])
  const geo = useMemo(() => {
    const g = new THREE.BufferGeometry()
    g.setAttribute('position', new THREE.BufferAttribute(positions, 3))
    return g
  }, [positions])
  const ref = useRef()
  useFrame((s) => { if (ref.current) ref.current.rotation.y = s.clock.elapsedTime * 0.025 })
  return (
    <points ref={ref} geometry={geo}>
      <pointsMaterial size={0.022} color="#C9963A" transparent opacity={0.55} />
    </points>
  )
}

export default function HeroScene() {
  return (
    <Canvas camera={{ position: [0, 0, 6], fov: 55 }} gl={{ antialias: true, alpha: true }} dpr={[1, 1.5]}>
      <ambientLight intensity={0.5} color="#FFF8E8" />
      <pointLight position={[6, 6, 4]} intensity={2} color="#E8C96A" />
      <pointLight position={[-4, -4, -2]} intensity={0.8} color="#FFF0D0" />
      <pointLight position={[0, -6, 2]} intensity={0.5} color="#C9963A" />
      <MainOrb />
      <Ring radius={2.0} tube={0.04} speed={0.15} tiltX={0.4} />
      <Ring radius={2.6} tube={0.03} speed={-0.1} tiltX={1.1} />
      <GoldSphere position={[3.5, 1.2, -1.5]} scale={0.3} speed={0.9} />
      <GoldSphere position={[-3.2, -1.0, -1]} scale={0.22} speed={1.3} />
      <GoldSphere position={[2.0, -2.8, -2]} scale={0.18} speed={0.7} />
      <Particles />
    </Canvas>
  )
}
