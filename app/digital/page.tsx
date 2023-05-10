'use client';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar'
import Outro from '@/components/Outro'
import Image from 'next/image';

export default function Home() {
  return (
    <main className="bg-[#111] text-white overflow-x-hidden scroll-smooth">
      
      <Navbar />

      <section id="hero" className="md:px-40 pt-32 p-8 text-center flex flex-col">
            <h3 className="bg-primary/20 p-2 px-4 rounded-full font-poppins tracking-widest text-xs text-primary w-max self-center shadow-lg shadow-primary/10">SERVICES</h3>
            <h1 className="font-poppins text-5xl py-4 leading-tight md:w-2/5 self-center font-semibold">Digital Marketing</h1>
            <img src='./digital_market.jpg' alt='digital marketing' className='h-96 w-3/5 object-cover self-center py-8'/>
            <p className="text-gray-300 text-md md:w-3/5 self-center text-left font-poppins px-4">Digital marketing services help businesses succeed online by enhancing their digital presence, generating leads and sales, and driving website traffic. <br /><br/>These services include SEO, PPC advertising, social media marketing, email marketing, and content marketing. SEO improves search engine rankings, while PPC advertising displays targeted ads on search engines and websites. Social media marketing engages potential customers on social media platforms, while email marketing sends promotional messages to an email list.  <br /><br/>Content marketing creates valuable content to attract and retain a specific audience. Partnering with experienced digital marketing professionals can help businesses effectively achieve their goals.</p>
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
