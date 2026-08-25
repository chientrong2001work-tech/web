import { motion, useScroll, useTransform, type MotionValue } from 'framer-motion'
import { useRef, type CSSProperties } from 'react'

interface AnimatedTextProps {
  text: string
  className?: string
  style?: CSSProperties
}

interface CharProps {
  char: string
  index: number
  total: number
  progress: MotionValue<number>
}

function Char({ char, index, total, progress }: CharProps) {
  const start = index / total
  const end = start + 1 / total
  const opacity = useTransform(progress, [start, end], [0.2, 1])

  return (
    <span className="relative inline-block">
      <span className="invisible">{char}</span>
      <motion.span className="absolute left-0 top-0" style={{ opacity }}>
        {char}
      </motion.span>
    </span>
  )
}

export default function AnimatedText({ text, className, style }: AnimatedTextProps) {
  const ref = useRef<HTMLParagraphElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.8', 'end 0.2'],
  })

  const words = text.split(' ')
  const totalChars = text.replace(/ /g, '').length
  const wordStartIndices = words.reduce<number[]>((acc, _word, wi) => {
    acc.push(wi === 0 ? 0 : acc[wi - 1] + words[wi - 1].length)
    return acc
  }, [])

  return (
    <p ref={ref} className={className} style={style}>
      {words.map((word, wi) => {
        const wordSpan = (
          <span key={wi} className="inline-block">
            {word.split('').map((char, ci) => {
              const i = wordStartIndices[wi] + ci
              return (
                <Char
                  key={ci}
                  char={char}
                  index={i}
                  total={totalChars}
                  progress={scrollYProgress}
                />
              )
            })}
          </span>
        )

        return wi < words.length - 1 ? (
          <span key={`w-${wi}`}>
            {wordSpan}
            {' '}
          </span>
        ) : (
          wordSpan
        )
      })}
    </p>
  )
}
