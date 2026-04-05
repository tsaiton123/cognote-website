'use client'

import { useEffect, useRef, useState } from 'react'

interface FeatureSectionProps {
  index: number
  title: string
  subtitle: string
  description: string
  videoSrc: string
  align: 'left' | 'right'
}

export default function FeatureSection({
  index,
  title,
  subtitle,
  description,
  videoSrc,
  align,
}: FeatureSectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = sectionRef.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          videoRef.current?.play().catch(() => {})
        } else {
          videoRef.current?.pause()
        }
      },
      { threshold: 0.35 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const isRight = align === 'right'

  return (
    <section
      ref={sectionRef}
      id={`feature-${index}`}
      className="relative w-full min-h-screen flex items-center py-24 px-6 md:px-16 overflow-hidden"
      style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}
    >
      {/* Subtle background glow */}
      <div
        className="absolute pointer-events-none"
        style={{
          width: 500,
          height: 500,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(212,96,26,0.06) 0%, transparent 70%)',
          top: '50%',
          left: isRight ? '70%' : '30%',
          transform: 'translate(-50%, -50%)',
        }}
      />

      <div
        className={`relative z-10 w-full max-w-6xl mx-auto flex flex-col gap-16 items-center
          ${isRight ? 'md:flex-row-reverse' : 'md:flex-row'}`}
      >

        {/* Phone mockup */}
        <div
          className={`flex-1 flex justify-center feature-block ${visible ? 'visible' : ''}`}
        >
          <div className="square-frame">
            {videoSrc ? (
              <video
                ref={videoRef}
                src={videoSrc}
                muted
                loop
                playsInline
                preload="metadata"
              />
            ) : (
              <div className="phone-placeholder">clip coming soon</div>
            )}
          </div>
        </div>

        {/* Text */}
        <div
          className={`flex-1 feature-block delay-150 ${visible ? 'visible' : ''}`}
        >
          <span
            className="text-xs font-mono uppercase tracking-[0.2em]"
            style={{ color: 'rgba(212,96,26,0.8)' }}
          >
            {String(index + 1).padStart(2, '0')}
          </span>
          <p
            className="mt-3 text-sm font-medium uppercase tracking-widest"
            style={{ color: 'rgba(255,255,255,0.35)' }}
          >
            {subtitle}
          </p>
          <h2 className="mt-4 text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight">
            {title}
          </h2>
          <p className="mt-6 text-lg text-gray-400 leading-relaxed max-w-md">
            {description}
          </p>
        </div>

      </div>
    </section>
  )
}
