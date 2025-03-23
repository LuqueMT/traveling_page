import Image from "next/image";
import airPlaneSvg from '../assets/airplane.svg';
import Navbar from "@/components/Navbar/page";
import Link from "next/link";
import Products from "@/components/Products/page";
import About from "@/components/About/page";
import Footer from "@/components/Footer/page";


export default function Home() {
  return (
    <>
      <main className="bg-stone-50">
        <section id="home" className="w-full flex flex-col max-w-screen-xl  mx-auto p-5" >
          <Navbar />
          <div className="items-center justify-items-center text-center md:text-left md:justify-between w-full grid-rows-1 grid md:flex mt-8">
            <div>
              <h1 className=" text-center md:text-left text-6xl font-bold text-stone-800">Seu destino, nossa <span className="text-lime-500">responsabilidade!</span></h1>
              <p className="text-lg font-bold text-stone-700 mt-8">Lorem, ipsum dolor sit amet consectetur adipisicing elit. <br />Sunt, nulla consequatur repellendus doloremque odit quisquam?</p>
            </div>
            <Image className="w-ful max-w-1xl" src={airPlaneSvg} alt="Flying around the world" />
          </div>
          <Link href="#" className="rounded-full bg-lime-500 px-5 py-3 font-medium text-white transition-colors hover:bg-lime-700 w-fit mx-auto">
            Começar Agora
          </Link>
        </section>
        <Products/>
        <About/>
        <Footer/>
      </main>
    </>
  );
}
