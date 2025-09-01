import React, { ReactNode } from 'react'

interface IDesc {
  children: ReactNode
  className?: string
}

const Desc = ({children, className}:IDesc) => {
  return (
    <p className={`open-sans text-[#525c60] leading-[165%] ${className}`}
    >{children}</p>
  )
}

export default Desc