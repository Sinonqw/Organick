import React from 'react'
import Image from 'next/image'

interface IOfferCard {
  img: string
  title: string
}

const OfferCard = ({ img, title }: IOfferCard) => {
  return (
    <article className='flex flex-col items-center group'>
      <div className='bg-white p-4 rounded-2xl overflow-hidden transform transition-transform duration-300 group-hover:scale-105'>
        <Image
          alt={title}
          src={img}
          width={310}
          height={290}
        />
      </div>
      <p className='text-center text-2xl font-medium mt-4 transform transition-transform duration-300 group-hover:scale-110'>{title}</p>
    </article>
  )
}

export default OfferCard