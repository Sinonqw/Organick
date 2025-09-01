import React, { ReactNode } from 'react'

interface ISubtitle {
  children: ReactNode
  color?: string
  className?: string
}

const Subtitle = ({ children, color = "#7EB693", className }: ISubtitle) => {
  return (
    <h3
      className={`yellowtail ${className}`}
      style={{ color }}
    >
      {children}
    </h3>
  )
}

export default Subtitle