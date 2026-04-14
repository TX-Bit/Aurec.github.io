import { useEffect, useState } from 'react'
import { copy } from '../i18n'

export default function HeroHeadline({ locale, className = '' }) {
  const [index, setIndex] = useState(0)
  const [exiting, setExiting] = useState(false)
  const heroCopy = copy[locale].hero
  const words = heroCopy.words

  useEffect(() => {
    const id = setInterval(() => {
      setExiting(true)
      setTimeout(() => {
        setIndex(i => (i + 1) % words.length)
        setExiting(false)
      }, 320)
    }, 2800)
    return () => clearInterval(id)
  }, [words.length])

  return (
    <h1 className={`text-[clamp(3.5rem,9vw,6.5rem)] font-bold tracking-[-0.04em] leading-[0.93] ${className}`}>
      <span className="gradient-text">{heroCopy.headlineVerb}</span>
      <br />
      <span
        key={index}
        className={`inline-block text-white ${exiting ? 'word-exit' : 'word-enter'}`}
      >
        {words[index]}.
      </span>
    </h1>
  )
}
