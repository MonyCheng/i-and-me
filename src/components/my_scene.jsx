import React, { useRef, useEffect } from 'react'
// import { Diamond, DiamondIcon, ExternalLink, Gem } from "lucide-react"
import * as THREE from 'three'

// Three.js Scene Component
const ThreeScene = ({ className }) => {
    const mountRef = useRef(null)
    const sceneRef = useRef(null)
    const animationRef = useRef(null)

    useEffect(() => {
        if (!mountRef.current) return

        // Scene setup
        const scene = new THREE.Scene()
        scene.background = new THREE.Color(0x000000) // Black background

        const camera = new THREE.PerspectiveCamera(
            75,
            window.innerWidth / window.innerHeight,
            0.1,
            1000
        )

        const renderer = new THREE.WebGLRenderer({
            antialias: true,
            alpha: true
        })
        renderer.setSize(window.innerWidth, window.innerHeight)
        renderer.setPixelRatio(window.devicePixelRatio)
        mountRef.current.appendChild(renderer.domElement)

        // Create geometric objects (similar to Spline aesthetic)
        const geometry1 = new THREE.TorusGeometry(1, 0.3, 16, 100)
        const material1 = new THREE.MeshStandardMaterial({
            color: 0xe99b63,
            metalness: 0.8,
            roughness: 0.2,
            emissive: 0x332211
        })
        const torus = new THREE.Mesh(geometry1, material1)
        torus.position.set(2, 1, -2)
        scene.add(torus)

        // Add a sphere
        const geometry2 = new THREE.SphereGeometry(0.8, 32, 32)
        const material2 = new THREE.MeshStandardMaterial({
            color: 0x656565,
            metalness: 0.9,
            roughness: 0.1,
            emissive: 0x111111
        })
        const sphere = new THREE.Mesh(geometry2, material2)
        sphere.position.set(-1.5, -0.5, -1)
        scene.add(sphere)

        // Add a diamond-like shape
        const geometry3 = new THREE.OctahedronGeometry(0.6)
        const material3 = new THREE.MeshStandardMaterial({
            color: 0xffffff,
            metalness: 1,
            roughness: 0,
            emissive: 0x222222
        })
        const diamond = new THREE.Mesh(geometry3, material3)
        diamond.position.set(0.5, -1.5, -0.5)
        scene.add(diamond)

        // Add floating particles
        const particlesGeometry = new THREE.BufferGeometry()
        const particlesCount = 100
        const posArray = new Float32Array(particlesCount * 3)

        for (let i = 0; i < particlesCount * 3; i++) {
            posArray[i] = (Math.random() - 0.5) * 10
        }

        particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3))
        const particlesMaterial = new THREE.PointsMaterial({
            size: 0.02,
            color: 0xe99b63,
            transparent: true,
            opacity: 0.8
        })
        const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial)
        scene.add(particlesMesh)

        // Lighting
        const ambientLight = new THREE.AmbientLight(0x404040, 0.4)
        scene.add(ambientLight)

        const directionalLight = new THREE.DirectionalLight(0xe99b63, 1)
        directionalLight.position.set(5, 5, 5)
        scene.add(directionalLight)

        const pointLight = new THREE.PointLight(0x656565, 0.8)
        pointLight.position.set(-5, -5, 2)
        scene.add(pointLight)

        // Camera position
        camera.position.set(3, 2, 5)
        camera.lookAt(0, 0, 0)

        // Animation
        const animate = () => {
            animationRef.current = requestAnimationFrame(animate)

            // Rotate objects
            torus.rotation.x += 0.01
            torus.rotation.y += 0.005

            sphere.rotation.y += 0.008

            diamond.rotation.x += 0.02
            diamond.rotation.y += 0.015

            // Floating animation
            torus.position.y = 1 + Math.sin(Date.now() * 0.001) * 0.3
            sphere.position.y = -0.5 + Math.cos(Date.now() * 0.0015) * 0.2
            diamond.position.y = -1.5 + Math.sin(Date.now() * 0.002) * 0.25

            // Rotate particles
            particlesMesh.rotation.y += 0.0005

            // Subtle camera movement
            camera.position.x = 3 + Math.sin(Date.now() * 0.0005) * 0.5
            camera.position.y = 2 + Math.cos(Date.now() * 0.0003) * 0.3
            camera.lookAt(0, 0, 0)

            renderer.render(scene, camera)
        }

        animate()
        sceneRef.current = { scene, camera, renderer }

        // Handle resize
        const handleResize = () => {
            camera.aspect = window.innerWidth / window.innerHeight
            camera.updateProjectionMatrix()
            renderer.setSize(window.innerWidth, window.innerHeight)
        }

        window.addEventListener('resize', handleResize)

        // Cleanup
        return () => {
            window.removeEventListener('resize', handleResize)
            if (animationRef.current) {
                cancelAnimationFrame(animationRef.current)
            }
            if (mountRef.current && renderer.domElement) {
                mountRef.current.removeChild(renderer.domElement)
            }
            renderer.dispose()
        }
    }, [])

    return <div ref={mountRef} className={className} />
}

// Updated Hero Component
const MyScene = () => {
    return (
        <main className="flex lg:mt-20 flex-col lg:flex-row items-center justify-between min-h-[calc(90vh-6rem)]">
            <div className='max-w-xl ml-[5%] z-10 mt-[90%] md:mt-[60%] lg:mt-0'>
                <div className="relative w-[95%] sm:w-48 h-10 bg-gradient-to-r from-[#656565] to-[#e99b63] shadow-[0_0_15px_rgba(255,255,0,4)] rounded-full">
                    <div className="absolute inset-[3px] bg-black rounded-full flex items-center justify-center gap-1">
                        <Gem size={20} />
                        <span>INTRODUCING</span>
                    </div>
                </div>

                {/* Main Header */}
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-wider my-8">
                    EMAIL FOR
                    <br />
                    DEVELOPER
                </h1>

                {/* Description */}
                <p className="text-base sm:text-lg tracking-wider text-gray-400 max-w-[25rem] lg:max-w-[30rem]">
                    the best way to reach me instead of spam folder, deliver transaction and marketing email at scale.
                </p>

                {/* Buttons */}
                <div className="pt-2 flex gap-4">
                    <a href="#" className="inline-flex items-center gap-2 border border-[#2a2a2a] py-2 sm:py-3 px-8 sm:px-10 rounded-full sm:text-lg text-sm font-semibold tracking-wider transition-all duration-300 hover:text-gray-300">
                        Documentation
                        <ExternalLink size={20} />
                    </a>
                    <a href="#" className="inline-flex items-center gap-2 border border-[#2a2a2a] py-2 sm:py-3 px-8 sm:px-10 rounded-full sm:text-lg text-sm font-semibold tracking-wider transition-all duration-300 bg-gray-300 text-black hover:bg-gray-400">
                        Get Started
                        <ExternalLink size={20} />
                    </a>
                </div>
            </div>

            {/* Three.js Scene */}
            <ThreeScene className="absolute lg:top-0 top-[-20%] bottom-0 right-0 w-full h-full pointer-events-none" />
        </main>
    )
}

export default MyScene