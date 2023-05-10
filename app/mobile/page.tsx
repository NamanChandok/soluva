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
            <h1 className="font-poppins text-5xl py-4 leading-tight md:w-2/5 self-center font-semibold">Mobile App Development</h1>
            <Image src='/mobile_app.png' alt='mobile app development' className='h-96 w-3/5 object-cover self-center py-8'/>
            <p className="text-gray-300 text-md md:w-3/5 self-center text-left font-poppins px-4">Mobile app development involves a range of tasks, including user interface design, programming, and testing. Skilled mobile app developers use programming languages such as Java or Swift to create apps for different platforms like iOS and Android. <br/><br/> They also have experience with user interface design and understand the importance of creating a seamless and intuitive user experience.  Developing a mobile app requires careful planning and testing to ensure that the app is bug-free, performs well, and meets the specific needs of the target audience. <br/><br/> Partnering with experienced mobile app developers can help businesses create high-quality, user-friendly mobile apps that enhance the user experience and improve engagement with their brand.</p>
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
