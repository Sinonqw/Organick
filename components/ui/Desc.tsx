import React, { ReactNode } from 'react'

const Desc = ({children}:{children: ReactNode}) => {
  return (
    <p className='open-sans text-[18px] text-[#525c60] leading-[165%]'>{children}</p>
  )
}

export default Desc