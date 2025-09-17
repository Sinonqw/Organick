import React from 'react'
import Subtitle from '@/components/ui/Subtitle'
import Title from '@/components/ui/Title'
import Desc from '@/components/ui/Desc'
import TeamCard from './TeamCard'
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa'

const team = [
  {
    name: 'Giovanni Bacardo',
    prof: 'Farmer',
    img: '/team/giovani.png',
    media: [
      { name: 'facebook', icon: <FaFacebookF />, link: '#' },
      { name: 'twitter', icon: <FaTwitter />, link: '#' },
      { name: 'instagram', icon: <FaInstagram />, link: '#' },
    ],
  },
  {
    name: 'Marianne Loreno',
    prof: 'Designer',
    img: '/team/marianne.png',
    media: [
      { name: 'facebook', icon: <FaFacebookF />, link: '#' },
      { name: 'twitter', icon: <FaTwitter />, link: '#' },
      { name: 'instagram', icon: <FaInstagram />, link: '#' },
    ],
  },
  {
    name: 'Riga Pelore',
    prof: 'Farmer',
    img: '/team/riga.png',
    media: [
      { name: 'facebook', icon: <FaFacebookF />, link: '#' },
      { name: 'twitter', icon: <FaTwitter />, link: '#' },
      { name: 'instagram', icon: <FaInstagram />, link: '#' },
    ],
  },
]

const Team = () => {
  return (
    <section className='py-[177px]'>
      <div className='text-center mb-12'>
        <Subtitle className='text-3xl text-primary-green'>Team</Subtitle>
        <Title className='text-5xl text-primary-dark'>Our Organic Experts</Title>
        <Desc className='text-xl text-gray-600 mt-4 max-w-[900px] mx-auto'>Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.</Desc>
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
        {team.map((member, index) => (
          <TeamCard
            key={index}
            name={member.name}
            prof={member.prof}
            media={member.media}
            img={member.img}
          />
        ))}
      </div>
    </section>
  )
}

export default Team