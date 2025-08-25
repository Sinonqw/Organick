import React, { ReactNode } from 'react'

interface ITitle {
  children: ReactNode
  color?: string
  size?: number
  className?: string
}

const Title = ({ children, color = "#000", size = 24, className }: ITitle) => {
  return (
    <h2
      className={`roboto font-extrabold ${className}`}
      style={{ fontSize: `${size}px`, color }}
    >
      {children}
    </h2>
  )
}
export default Title