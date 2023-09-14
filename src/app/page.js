import Image from 'next/image'
import Banner from '../../components/Banner'
import Trending from '../../components/Trending'
import Galery from '../../components/Galery'
import Contacto from '../../components/Contacto'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
    {/*  <Banner/> */}
     <Galery/>
   {/* <Trending/> */}  
     {/* <Contacto/> */}
    </main>
  )
}
