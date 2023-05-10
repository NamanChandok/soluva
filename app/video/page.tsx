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
            <h1 className="font-poppins text-5xl py-4 leading-tight md:w-2/5 self-center font-semibold">Video Editing</h1>
            <img src='./video_edit.jpg' alt='video editing' className='h-96 w-3/5 object-cover self-center py-8'/>
            <p className="text-gray-300 text-md md:w-3/5 self-center text-left font-poppins px-4">Video editing is an essential component of any successful video production. It involves the process of selecting and manipulating video footage to create a compelling final product. <br />Professional video editors use their expertise to refine raw footage, add visual and sound effects, and synchronize the elements to create a cohesive and engaging story. They have access to specialized software and tools to edit, enhance, and refine the video to ensure the highest quality output. <br />Partnering with experienced video editors can help businesses and content creators achieve their vision by creating high-quality videos that are engaging, informative, and visually appealing to their target audience.</p>
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
