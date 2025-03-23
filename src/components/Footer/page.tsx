import React from 'react'
import IMG_3 from '@/assets/avião3.svg'
import Image from 'next/image'
const Footer = () => {
   return (
      <>
         <section className='flex flex-col-3 justify-between content-center bg-stone-100'>
            <div className=''>
               <h2 className='text-6xl text-center text-lime-700'>Nexus</h2>
               <Image width={250} height={250} src={IMG_3} alt="Imagem figurativa de um avião" />
            </div>
            <div className='p-6'>
               <h3 className='text-2xl md:text-xl font-bold'>Informações</h3>
               <ul>
                  <li><a className='text-sm font-bold md:font-normal' href="#">Contrato de Transporte</a></li>
                  <li><a className='text-sm font-bold md:font-normal' href="#">Politica de Cookies</a></li>
                  <li><a className='text-sm font-bold md:font-normal' href="#">Dicas de Segurança</a></li>
                  <li><a className='text-sm font-bold md:font-normal' href="#">Politica de Privacidade e Segurança</a></li>
                  <li><a className='text-sm font-bold md:font-normal' href="#">Informações Necessárias para Embarque</a></li>
                  <li><a className='text-sm font-bold md:font-normal' href="#">Passagens para Tratamento Médico</a></li>
               </ul>
            </div>
            <div className='p-6 pr-[20px] md:pr-[60px]'>
               <h3 className='text-2xl md:text-xl font-bold'>Minha Conta</h3>
               <ul>
                  <li><a className='text-sm font-bold md:font-normal' href="#">Passaporte</a></li>
                  <li><a className='text-sm font-bold md:font-normal' href="#">Email</a></li>
                  <li><a className='text-sm font-bold md:font-normal' href="#">Minhas Viagens</a></li>
                  <li><a className='text-sm font-bold md:font-normal' href="#">Meu Perfil</a></li>
                  <li><a className='text-sm font-bold md:font-normal' href="#">Informações de Segurança da Conta</a></li>
                  <li><a className='text-sm font-bold md:font-normal' href="#">Deletar Conta</a></li>
               </ul>
            </div>
         </section>
         <div className='text-center text-lg p-2'><p>Todos os direitos reservados® 2025</p></div>
      </>
   )
}

export default Footer
