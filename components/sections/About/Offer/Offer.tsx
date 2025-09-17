import React from 'react'
import Title from '@/components/ui/Title'
import Subtitle from '@/components/ui/Subtitle'
import OfferCard from './OfferCard'

const offerData = [
  { img: '/about/offer1.jpg', title: 'Spicy' },
  { img: '/about/offer2.jpg', title: 'Nuts & Feesd' },
  { img: '/about/offer3.jpg', title: 'Fruits' },
  { img: '/about/offer4.jpg', title: 'Vegetable' },
]

const Offer = () => {
  return (
    <section className='bg-[#2D4543] text-white py-24 px-8'>
      <div className='text-center mb-16'>
        <Subtitle className='text-3xl font-medium text-[#7EB693] mb-2'>
          About Us
        </Subtitle>
        <Title className='text-5xl font-extrabold' color='white'>What We Offer for You</Title>
      </div>
      <div className='flex flex-col md:flex-row justify-center items-center gap-6'>
        {offerData.map((item, index) => (
          <OfferCard key={index} img={item.img} title={item.title} />
        ))}
      </div>
    </section>
  )
}

export default Offer