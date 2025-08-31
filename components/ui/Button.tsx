import React, { ReactNode } from 'react'
import Image from 'next/image'
import Link from 'next/link'

interface IButton {
  children: ReactNode
  colorBg?: string
  colorText?: string
  className?: string
}

const Button = ({children, colorBg = '#EFD372', colorText = 'white', className}: IButton) => {
  return (
    <Link href={'/'} className={`roboto font-bold text-[20px] py-7 px-9 rounded-[16px] gap-[10px] inline-block ${className}`}
    style={{backgroundColor: colorBg, color: colorText  }}
    >
      {children}
      <Image src={'/arrow-icon.svg'} alt='' width={19} height={19} className='inline-block ml-[10px]'/>
    </Link>
  )
}

export default Button