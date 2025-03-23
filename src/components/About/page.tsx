import React from 'react'
import IMG_2 from '../../assets/avião2.svg'
import Image from 'next/image'
const About = () => {
  return (
    <>
      <section id='about' className="w-full flex flex-col max-w-screen-xl  mx-auto p-5">
        <div className="items-center justify-items-center text-center md:text-left md:justify-between w-full grid-rows-1 grid md:flex mt-8">
          <Image className='w-ful max-w-1xl' src={IMG_2} alt="imagem figurativa de um avião" />
          <div className=''>
            <h2 className="text-center md:text-right text-6xl font-bold text-stone-800">Sobre Nós</h2>
            <p className="text-lg font-bold text-center md:text-right text-stone-600 mt-8">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis molestias ut quam et modi vero, accusamus veniam debitis aliquam harum distinctio, omnis soluta culpa saepe magnam nulla dolorem! Nesciunt facilis vel debitis reprehenderit mollitia quod laborum cupiditate in beatae necessitatibus.</p>
          </div>
        </div>
      </section>
    </>
  )
}

export default About
