'use client'

// Fixed star positions to avoid hydration mismatch
const STARS = [
  { x: 4,  y: 6  }, { x: 91, y: 10 }, { x: 18, y: 22 }, { x: 76, y: 5  },
  { x: 33, y: 14 }, { x: 58, y: 8  }, { x: 84, y: 18 }, { x: 11, y: 35 },
  { x: 47, y: 3  }, { x: 68, y: 28 }, { x: 25, y: 42 }, { x: 89, y: 33 },
  { x: 7,  y: 55 }, { x: 95, y: 48 }, { x: 40, y: 19 }, { x: 62, y: 44 },
  { x: 15, y: 62 }, { x: 78, y: 52 }, { x: 52, y: 58 }, { x: 3,  y: 78 },
]

export default function Hero() {
  return (
    <section className="relative w-full h-screen bg-black overflow-hidden flex flex-col">

      {/* Stars */}
      {STARS.map((s, i) => (
        <div
          key={i}
          className="star"
          style={{ left: `${s.x}%`, top: `${s.y}%` }}
        />
      ))}

      {/* Headline */}
      <div className="relative z-30 flex flex-col items-center text-center pt-16 px-6 md:px-12 pointer-events-none select-none">
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white leading-[1.08] tracking-tight max-w-4xl">
          Your secret{' '}
          <em className="not-italic" style={{ color: '#D4601A' }}>edge</em>
          {' '}over<br />your classmates.
        </h1>
        <p className="mt-5 text-lg md:text-xl text-gray-400 max-w-xl leading-relaxed">
          Handwrite freely. Search everything. Ask AI anything.
        </p>
        <a
          href="#features"
          className="pointer-events-auto mt-10 inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium"
          style={{
            background: 'rgba(212,96,26,0.15)',
            border: '1px solid rgba(212,96,26,0.4)',
            color: '#E8722A',
          }}
        >
          See how it works
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M7 2L7 12M7 12L3 8M7 12L11 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </a>
      </div>

      {/* Moon */}
      <div
        className="moon-float absolute z-10"
        style={{ bottom: '22%', left: '50%' }}
      >
        <div
          style={{
            width: 280,
            height: 280,
            borderRadius: '50%',
            background: 'radial-gradient(circle at 38% 38%, #7EB8F7 0%, #2E6FD4 45%, #0A2E6B 100%)',
            boxShadow: '0 0 60px 20px rgba(46,111,212,0.35), 0 0 120px 40px rgba(10,46,107,0.15)',
          }}
        />
      </div>

      {/* Mountain silhouette — sits on top of moon */}
      <div className="absolute bottom-0 left-0 right-0 z-20 pointer-events-none">
        <svg
          viewBox="0 0 1440 480"
          preserveAspectRatio="xMidYMax slice"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full"
          style={{ display: 'block' }}
        >
          {/* Back range — slightly lighter dark */}
          <path
            d="M0 480 L0 360 L60 340 L110 350 L170 310 L230 330 L290 300 L360 320
               L420 290 L500 310 L570 280 L640 300 L710 260 L790 245 L860 265
               L940 250 L1010 270 L1090 290 L1160 275 L1240 295 L1320 310 L1440 300
               L1440 480 Z"
            fill="#0d0d0d"
          />
          {/* Front range — true black */}
          <path
            d="M0 480 L0 420 L55 400 L100 410 L150 385 L200 400 L265 370 L320 390
               L380 360 L440 380 L490 395 L540 380 L600 420 L680 360 L740 330
               L800 310 L855 325 L920 300 L975 320 L1040 340 L1100 325 L1170 350
               L1240 360 L1310 345 L1380 370 L1440 355 L1440 480 Z"
            fill="#000"
          />
        </svg>
      </div>

      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 z-20 pointer-events-none"
        style={{ background: 'linear-gradient(to bottom, transparent, #000)' }}
      />
    </section>
  )
}
