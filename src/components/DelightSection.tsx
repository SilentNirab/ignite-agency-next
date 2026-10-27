'use client';

import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import confetti from 'canvas-confetti';
import { Sparkles, Heart, Smile } from 'lucide-react';

export default function DelightSection() {
  const mountRef = useRef<HTMLDivElement>(null);
  const [activeTab, setActiveTab] = useState<'3d' | 'physics'>('3d');

  // Trigger confetti burst
  const triggerConfetti = () => {
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#ff3454', '#ffffff', '#34ff48', '#ff7e36'],
    });
  };

  useEffect(() => {
    if (!mountRef.current) return;

    const container = mountRef.current;
    const width = container.clientWidth;
    const height = container.clientHeight || 450;

    // Scene
    const scene = new THREE.Scene();

    // Camera
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.z = 4.2;

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.2);
    scene.add(ambientLight);

    const dirLight1 = new THREE.DirectionalLight(0xff3454, 2.5);
    dirLight1.position.set(3, 4, 3);
    scene.add(dirLight1);

    const dirLight2 = new THREE.DirectionalLight(0x34ff48, 1.8);
    dirLight2.position.set(-3, -2, 2);
    scene.add(dirLight2);

    const pointLight = new THREE.PointLight(0xffffff, 2, 10);
    pointLight.position.set(0, 0, 3);
    scene.add(pointLight);

    // Build the iconic 3D Bolt
    // Bolt SVG Path translated into 2D Shape
    const shape = new THREE.Shape();
    // Scaled coordinates of the bolt
    shape.moveTo(-0.7, 1.4);
    shape.lineTo(-0.25, 0.1);
    shape.lineTo(-0.75, 0.1);
    shape.lineTo(0.7, -1.4);
    shape.lineTo(0.3, -0.2);
    shape.lineTo(0.8, -0.2);
    shape.closePath();

    const extrudeSettings = {
      steps: 1,
      depth: 0.28,
      bevelEnabled: true,
      bevelThickness: 0.08,
      bevelSize: 0.05,
      bevelSegments: 5,
    };

    const geometry = new THREE.ExtrudeGeometry(shape, extrudeSettings);
    geometry.center();

    // Texture Loader for local crystal matcap
    const textureLoader = new THREE.TextureLoader();
    const matcap = textureLoader.load('/images/crystal_matcap-desat (1).png');

    const material = new THREE.MeshStandardMaterial({
      color: 0x111111,
      metalness: 0.85,
      roughness: 0.15,
      envMap: matcap,
      envMapIntensity: 1.5,
    });

    const boltMesh = new THREE.Mesh(geometry, material);
    scene.add(boltMesh);

    // Mouse interaction tracking
    let targetRotationX = 0;
    let targetRotationY = 0;
    let mouseX = 0;
    let mouseY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      mouseX = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      mouseY = -((e.clientY - rect.top) / rect.height) * 2 + 1;
      targetRotationY = mouseX * 0.8;
      targetRotationX = -mouseY * 0.6;
    };

    container.addEventListener('mousemove', handleMouseMove);

    // Scroll trigger rotation
    const handleScroll = () => {
      const scrollY = window.scrollY;
      boltMesh.rotation.z = scrollY * 0.001;
    };
    window.addEventListener('scroll', handleScroll, { passive: true });

    // Render loop
    let animId: number;
    const animate = () => {
      animId = requestAnimationFrame(animate);

      // Inertial damping
      boltMesh.rotation.y += (targetRotationY - boltMesh.rotation.y) * 0.08;
      boltMesh.rotation.x += (targetRotationX - boltMesh.rotation.x) * 0.08;

      // Gentle floating oscillation
      boltMesh.position.y = Math.sin(Date.now() * 0.002) * 0.08;

      renderer.render(scene, camera);
    };
    animate();

    // Resize handler
    const handleResize = () => {
      if (!container) return;
      const newWidth = container.clientWidth;
      const newHeight = container.clientHeight || 450;
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animId);
      container.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      geometry.dispose();
      material.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <section className="section_delight_new py-28 md:py-36 px-6 md:px-12 bg-[#090909] text-white relative overflow-hidden">
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left Text & Interactive Trigger Controls */}
        <div className="space-y-8">
          <p className="text-xs font-mono uppercase tracking-widest text-[#ff3454]">
            [ 02 // DIGITAL CRAFT & DELIGHT ]
          </p>

          <h2 className="text-4xl sm:text-6xl font-bold tracking-tight leading-[1.08]">
            Obsessed with <br />
            <span className="text-[#ff3454]">Micro-Interactions</span> &amp; Joy.
          </h2>

          <p className="text-base sm:text-lg text-white/70 leading-relaxed max-w-xl">
            Modern websites shouldn&apos;t just inform — they should spark emotion. We build tailored 3D experiences, physics-driven canvases, and responsive feedback loops that make your brand unforgettable.
          </p>

          {/* Action triggers */}
          <div className="flex flex-wrap gap-4 pt-4">
            <button
              onClick={triggerConfetti}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#ff3454] hover:bg-[#ff1f43] text-white text-xs font-bold uppercase tracking-wider transition-all duration-300 shadow-[0_0_20px_rgba(255,52,84,0.4)] hover:scale-105 active:scale-95"
            >
              <Sparkles className="w-4 h-4" />
              <span>Launch Confetti Blast</span>
            </button>

            <button
              onClick={() => {
                triggerConfetti();
              }}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 hover:bg-white/15 text-white text-xs font-bold uppercase tracking-wider transition-all duration-300 hover:scale-105"
            >
              <Heart className="w-4 h-4 text-[#ff3454] fill-[#ff3454]" />
              <span>Drop Love</span>
            </button>
          </div>
        </div>

        {/* Right 3D Interactive Bolt Stage */}
        <div className="relative h-[420px] sm:h-[500px] w-full rounded-3xl bg-[#111111] border border-white/10 flex items-center justify-center overflow-hidden shadow-2xl">
          <div className="absolute top-6 left-6 text-xs font-mono text-white/40 tracking-wider">
            [ INTERACTIVE 3D WEBGL BOLT // DRAG &amp; HOVER ]
          </div>

          {/* Three.js Canvas Mount */}
          <div ref={mountRef} className="w-full h-full cursor-grab active:cursor-grabbing" />

          {/* Ambient Glow */}
          <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_50%_50%,rgba(255,52,84,0.15),transparent_60%)]" />
        </div>
      </div>
    </section>
  );
}
