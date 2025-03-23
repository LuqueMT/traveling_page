import React from 'react'
import IMG from '../../../public/img/wooden-bridge-koh-nangyuan-island-surat-thani-thailand.jpg'
import Image from 'next/image'
const data = new Array(15).fill({}).map((item, index) =>({
    id: index + 1,
    name: `Pacote de viagem ${index + 1}`,
    price: 'R$1.700,00',
    image:'https://img.freepik.com/free-photo/wooden-bridge-koh-nangyuan-island-surat-thani-thailand_335224-1082.jpg?t=st=1742495998~exp=1742499598~hmac=c5fef7091758e13699ef33e4cf95397a585756e405a9eba946cf8c1a3b889501&w=996'
}))
const Products = () => {
  return (
    <>
        <section id='price' className='mx-auto max-w-screen-lg'>
            <h1 className='mb-6 text-2xl font-bold text-zinc-700 p-2'>Pacotes de Viagens</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 p-2 bg-stone-100'>
                {data.map(item => (
                    <div key={item.id} className='p-2 bg-stone-50 hover:border-1 duration-100 transition-property:all'>
                        <img className='rounded w-full' src={item.image} alt={item.name}/>
                        <p className='text-xl mt-2 font-medium text-zinc-700'>{item.name}</p>
                        <span className='font-bold text-lime-700 text-xl'>{item.price}</span>
                        <button className='flex py-1 px-2 font-light text-white bg-lime-500 hover:bg-lime-700 transition-colors'>Ver Mais</button>
                    </div>
                ))}
            </div>
        </section>
    </>
  )
}

export default Products;
