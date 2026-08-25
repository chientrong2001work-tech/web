import { useEffect, useRef, useState } from 'react'
import { ROW_1_ITEMS, ROW_2_ITEMS, type MarqueeItem } from '../data/marqueeImages'

const TRIPLED_ROW_1 = [...ROW_1_ITEMS, ...ROW_1_ITEMS, ...ROW_1_ITEMS]
const TRIPLED_ROW_2 = [...ROW_2_ITEMS, ...ROW_2_ITEMS, ...ROW_2_ITEMS]

function MarqueeTile({ item, alt }: { item: MarqueeItem; alt: string }) {
  const className = 'h-[270px] w-[420px] flex-shrink-0 rounded-2xl object-cover'

  if (item.type === 'video') {
    return (
      <video
        className={className}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
      >
        {item.webmSrc && <source src={item.webmSrc} type="video/webm" />}
        <source src={item.src} type="video/mp4" />
      </video>
    )
  }

  return <img src={item.src} alt={alt} loading="lazy" className={className} />
}

export default function MarqueeSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [offset, setOffset] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const section = sectionRef.current
      if (!section) return

      const sectionTop = section.getBoundingClientRect().top + window.scrollY
      const nextOffset =
        (window.scrollY - sectionTop + window.innerHeight) * 0.3
      setOffset(nextOffset)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section
      ref={sectionRef}
      className="overflow-hidden bg-[#0C0C0C] pb-10 pt-24 sm:pt-32 md:pt-40"
    >
      <div className="flex flex-col gap-3">
        <div
          className="flex gap-3"
          style={{
            transform: `translateX(${offset - 200}px)`,
            willChange: 'transform',
          }}
        >
          {TRIPLED_ROW_1.map((item, i) => (
            <MarqueeTile key={i} item={item} alt={`Project preview ${i + 1}`} />
          ))}
        </div>

        <div
          className="flex gap-3"
          style={{
            transform: `translateX(${-(offset - 200)}px)`,
            willChange: 'transform',
          }}
        >
          {TRIPLED_ROW_2.map((item, i) => (
            <MarqueeTile key={i} item={item} alt={`Project preview ${i + 1}`} />
          ))}
        </div>
      </div>
    </section>
  )
}
