import React, { ReactNode } from 'react'

interface IDesc {
  children: ReactNode
  size?: number
  className?: string
}

const Desc = ({children, size = 18, className}:IDesc) => {
  return (
    <p className={`open-sans text-[#525c60] leading-[165%] ${className}`}
    style={{fontSize: size}}
    >{children}</p>
  )
}

export default Desc