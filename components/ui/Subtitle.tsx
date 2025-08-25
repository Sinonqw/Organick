import React, { ReactNode } from 'react'

interface ISubtitle {
  children: ReactNode
  color?: string
  size?: number
  className?: string
}

const Subtitle = ({ children, color = "#000", size = 36, className }: ISubtitle) => {
  return (
    <h3
      className={`yellowtail ${className}`}
      style={{ fontSize: `${size}px`, color }}
    >
      {children}
    </h3>
  )
}

export default Subtitle
