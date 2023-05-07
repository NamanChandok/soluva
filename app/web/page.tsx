'use client';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar'
import Outro from '@/components/Outro';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="bg-[#111] text-white overflow-x-hidden scroll-smooth">
      
      <Navbar />

      <section id="hero" className="md:px-40 pt-32 p-8 text-center flex flex-col">
            <h3 className="bg-primary/20 p-2 px-4 rounded-full font-poppins tracking-widest text-xs text-primary w-max self-center shadow-lg shadow-primary/10">SERVICES</h3>
            <h1 className="font-poppins text-5xl py-4 leading-tight md:w-2/5 self-center font-semibold">Web Development</h1>
            <Image src='./web_dev.webp' alt='web development' className='h-96 w-3/5 object-cover self-center py-8'/>
            <p className="text-gray-300 text-md md:w-3/5 self-center text-left font-poppins px-4">The process of creating and maintaining websites involves a range of tasks, including web design, programming, and database management. <br /><br /> Web developers use programming languages like HTML, CSS, and JavaScript to create the visual elements and functionality of a website. They may also use content management systems like WordPress or Drupal to manage website content and streamline the development process. <br /><br />  Experienced web developers stay up to date with the latest trends and technologies to create modern, responsive, and user-friendly websites that meet the specific needs of their clients. Partnering with skilled web developers can help businesses create a professional and effective online presence that engages and informs their target audience.</p>
        </section>
      
        <section id="packages" className="p-8 md:px-32 bg-[#181818] flex flex-col">
            <h3 className="bg-white/20 p-2 px-4 rounded-full font-poppins tracking-widest text-xs text-white w-max self-center shadow-lg shadow-white/10">PACKAGES OFFERED</h3>
            <h4 className='font-poppins text-6xl py-16 font-semibold self-center'>Coming soon...</h4>
        </section>

        <Outro />

        <Footer />

    </main>
  )
}
