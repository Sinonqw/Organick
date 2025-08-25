import React, { ReactNode } from 'react'
import Image from 'next/image'
import Link from 'next/link'

interface IButton {
  children: ReactNode
  colorBg?: string
  colorText?: string
}

const Button = ({children, colorBg = '#000', colorText = 'white'}: IButton) => {
  return (
    <Link href={'/'} className='roboto font-bold text-[20px] py-7 px-9 rounded-[16px] flex gap-[10px] max-w-[220px]'
    style={{backgroundColor: colorBg, color: colorText  }}
    >
      {children}
      <Image src={'/arrow-icon.svg'} alt='' width={19} height={19}/>
    </Link>
  )
}

export default Button