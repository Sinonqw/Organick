import React from 'react'
import Title from '@/components/ui/Title'

interface IBenefitCard {
    title: string
    text: string
}

const BenefitCard = ({title, text}: IBenefitCard) => {
  return (
    <div className='relative w-56 h-56 rounded-full border-4 border-[#7EB693] flex items-center justify-center'>
      <div className='w-full h-full rounded-full bg-[#F1F1F1] border-4 border-white flex flex-col items-center justify-center'>
        <Title size={50}>{title}</Title>
        <p className='font-semibold text-[#274C5B] text-center'>{text}</p>
      </div>
    </div>
  )
}

export default BenefitCard