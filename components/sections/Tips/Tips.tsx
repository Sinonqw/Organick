import React from 'react'
import TipsCard from './TipsCard'

const Tips = () => {
  return (
    <section className='flex gap-10 py-[187px] bg-[#F1F8F4]'>
        <TipsCard img='/TipsCards/juice.jpg' text='Organic Juice'/>
        <TipsCard img='/TipsCards/food.jpg' text='Organic Food'/>
        <TipsCard img='/TipsCards/nuts.jpg' text='Nuts Cookis'/>
    </section>
  )
}

export default Tips