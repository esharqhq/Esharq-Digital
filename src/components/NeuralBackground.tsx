'use client'

import { useEffect, useRef } from 'react'

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  radius: number
}

export const NeuralBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const mouseRef = useRef({ x: 0, y: 0 })

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animationFrameId: number
    let particles: Particle[] = []

    const PARTICLE_COUNT = 100
    const CONNECTION_DIST = 150
    const CONNECTION_DIST_SQ = CONNECTION_DIST * CONNECTION_DIST // avoid sqrt in hot path
    const MOUSE_RADIUS = 200
    const MOUSE_RADIUS_SQ = MOUSE_RADIUS * MOUSE_RADIUS

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      initParticles()
    }

    const initParticles = () => {
      particles = Array.from({ length: PARTICLE_COUNT }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        radius: Math.random() * 2 + 1,
      }))
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      ctx.fillStyle = '#27DFE9'
      ctx.strokeStyle = '#27DFE9'

      const { x: mx, y: my } = mouseRef.current

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i]
        p.x += p.vx
        p.y += p.vy

        // Mouse repulsion — compare squared distances to avoid sqrt
        const dx = p.x - mx
        const dy = p.y - my
        const distSq = dx * dx + dy * dy
        if (distSq < MOUSE_RADIUS_SQ) {
          const dist = Math.sqrt(distSq)
          const force = (MOUSE_RADIUS - dist) / MOUSE_RADIUS
          p.x += dx * force * 0.02
          p.y += dy * force * 0.02
        }

        // Boundary bounce
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1

        // Draw particle
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2)
        ctx.fill()

        // Draw connections — squared distance check avoids most sqrt calls
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j]
          const cdx = p.x - p2.x
          const cdy = p.y - p2.y
          const cdistSq = cdx * cdx + cdy * cdy

          if (cdistSq < CONNECTION_DIST_SQ) {
            const cdist = Math.sqrt(cdistSq)
            ctx.globalAlpha = 1 - cdist / CONNECTION_DIST
            ctx.lineWidth = 0.5
            ctx.beginPath()
            ctx.moveTo(p.x, p.y)
            ctx.lineTo(p2.x, p2.y)
            ctx.stroke()
          }
        }
        ctx.globalAlpha = 1
      }

      animationFrameId = requestAnimationFrame(draw)
    }

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY }
    }

    window.addEventListener('resize', resize, { passive: true })
    window.addEventListener('mousemove', handleMouseMove, { passive: true })
    resize()
    draw()

    return () => {
      window.removeEventListener('resize', resize)
      window.removeEventListener('mousemove', handleMouseMove)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ background: '#151616' }}
    />
  )
}
