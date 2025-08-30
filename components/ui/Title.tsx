import React, { ReactNode } from 'react'

interface ITitle {
  children: ReactNode
  color?: string
  size?: number
  className?: string
  bold?: string
}

const Title = ({ children, color = "#000", size = 24, className, bold = 'extrabold' }: ITitle) => {
  if (bold == 'medium'){
    return (
      <h4
      className={`roboto font-medium ${className}`}
      style={{ fontSize: `25px`, color }}
    >
      {children}
    </h4>
    )
  }

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