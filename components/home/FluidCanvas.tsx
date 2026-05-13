"use client"

/**
 * Animated gradient orbs background.
 * Replaces the previous custom WebGL fluid simulation with a simple,
 * reliable CSS-driven animation that works across all browsers.
 */
export default function FluidCanvas() {
  return (
    <div className="portfolio-bg-orbs" aria-hidden="true">
      <div className="portfolio-orb portfolio-orb--1" />
      <div className="portfolio-orb portfolio-orb--2" />
      <div className="portfolio-orb portfolio-orb--3" />
    </div>
  )
}
