import { useEffect, useState } from 'react'

const WORDS = ['beautifully', 'effortlessly', 'automatically', 'clearly', 'like a pro']

export default function HeroHeadline({ className = '' }) {
  const [index, setIndex] = useState(0)
  const [exiting, setExiting] = useState(false)

  useEffect(() => {
    const id = setInterval(() => {
      setExiting(true)
      setTimeout(() => {
        setIndex(i => (i + 1) % WORDS.length)
        setExiting(false)
      }, 320)
    }, 2800)
    return () => clearInterval(id)
  }, [])

  return (
    <h1 className={`text-[clamp(3.5rem,9vw,6.5rem)] font-bold tracking-[-0.04em] leading-[0.93] ${className}`}>
      <span className="gradient-text">Record</span>
      <br />
      <span
        key={index}
        className={`inline-block text-white ${exiting ? 'word-exit' : 'word-enter'}`}
      >
        {WORDS[index]}.
      </span>
    </h1>
  )
}
