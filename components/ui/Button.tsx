import React, { ReactNode } from 'react'
import Image from 'next/image'
import Link from 'next/link'

interface IButton {
  children: ReactNode
  colorBg?: string
  colorText?: string
  className?: string
  href?: string
}

const Button = ({children, colorBg = '#EFD372', colorText = 'white', className, href}: IButton) => {
  return (
    <Link 
      href={`${href}`} 
      className={`roboto font-bold rounded-[16px] gap-[10px] inline-flex items-center justify-center ${className}`}
      style={{backgroundColor: colorBg, color: colorText}}
    >
      {children}
      <Image src={'/arrow-icon.svg'} alt='' width={19} height={19} className='inline-block ml-[10px]'/>
    </Link>
  )
}

export default Button