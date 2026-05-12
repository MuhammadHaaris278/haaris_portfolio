"use client"

import { useState, useEffect } from "react"
import { useInView } from "react-intersection-observer"

interface CountUpProps {
  end: number
  duration?: number
  start?: number
}

export default function CountUp({ end, duration = 2, start = 0 }: CountUpProps) {
  const [count, setCount] = useState(start)
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  useEffect(() => {
    if (!inView) return

    let startTime: number
    let animationFrame: number

    const updateCount = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1)

      setCount(Math.floor(progress * (end - start) + start))

      if (progress < 1) {
        animationFrame = requestAnimationFrame(updateCount)
      }
    }

    animationFrame = requestAnimationFrame(updateCount)

    return () => {
      cancelAnimationFrame(animationFrame)
    }
  }, [inView, end, duration, start])

  return <span ref={ref}>{count}</span>
}

