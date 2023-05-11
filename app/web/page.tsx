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
            <Image src='/web_dev.webp' alt='web development' className='h-96 md:w-3/5 object-cover self-center py-8'/>
            <p className="text-gray-300 text-md md:w-3/5 self-center text-left font-poppins px-4">The process of creating and maintaining websites involves a range of tasks, including web design, programming, and database management. <br /><br /> Web developers use programming languages like HTML, CSS, and JavaScript to create the visual elements and functionality of a website. They may also use content management systems like WordPress or Drupal to manage website content and streamline the development process. <br /><br />  Experienced web developers stay up to date with the latest trends and technologies to create modern, responsive, and user-friendly websites that meet the specific needs of their clients. Partnering with skilled web developers can help businesses create a professional and effective online presence that engages and informs their target audience.</p>
        </section>
      
        <section id="packages" className="p-8 md:px-32 bg-[#181818] flex flex-col">
            <h3 className="bg-white/20 p-2 px-4 rounded-full font-poppins tracking-widest text-xs text-white w-max self-center shadow-lg shadow-white/10">PACKAGES OFFERED</h3>
            {/* <h4 className='font-poppins text-6xl py-16 font-semibold self-center'>Coming soon...</h4> */}
            <div className="flex flex-col md:flex-row gap-6 py-6">
                <div className="w-full md:w-1/3 rounded-md text-center border-2 border-white/10 shadow-lg shadow-white/10">
                  <div className='w-full bg-white/10 pt-6 pb-4'>
                    <h3 className="text-xs tracking-widest uppercase mb-2">Basic</h3>
                    <h1 className="font-poppins font-semibold text-2xl">Rs. 10,700 <i className="far fa-info-circle opacity-70 text-xl"></i></h1>
                  </div>
                    <div className="p-6 pb-8 w-full border-t-2 border-white/10 text-left text-gray-300">
                        <ul>
                            <li className="py-2">A Simple Website with basic functions. Basic functionalities contact page, etc. will be provided.</li>
                            <li className="text-sm py-1"><i className="fal fa-clock text-primary/60"></i> 14 Days Delivery</li>
                            <li className="text-sm"><i className="fal fa-repeat text-primary/60"></i> 1 revision</li>
                        </ul>
                    </div>
                </div>
                <div className="w-full md:w-1/3 rounded-md text-center border-2 border-white/10 shadow-lg shadow-white/10">
                  <div className='w-full bg-white/10 pt-6 pb-4'>
                    <h3 className="text-xs tracking-widest uppercase mb-2">Standard</h3>
                    <h1 className="font-poppins font-semibold text-2xl">Rs. 21,500 <i className="far fa-info-circle opacity-70 text-xl"></i></h1>
                    </div>
                    <div className="p-6 pb-8 w-full border-t-2 border-white/10 text-left text-gray-300">
                        <ul>
                            <li className="py-2">A Dynamic Website with various functionalities according to the client&apos;s need.</li>
                            <li className="text-sm py-1"><i className="fal fa-clock text-primary/60"></i> 45 Days Delivery</li>
                            <li className="text-sm"><i className="fal fa-repeat text-primary/60"></i> 3 revisions</li>
                        </ul>
                    </div>
                </div>
                <div className="w-full md:w-1/3 rounded-md text-center border-2 border-white/10 shadow-lg shadow-white/10">
                  <div className='w-full bg-white/10 pt-6 pb-4'>
                    <h3 className="text-xs tracking-widest uppercase mb-2">Premium</h3>
                    <h1 className="font-poppins font-semibold text-2xl">Rs. 43,000 <i className="far fa-info-circle opacity-70 text-xl"></i></h1>
                    </div>
                    <div className="p-6 pb-8 w-full border-t-2 border-white/10 text-left text-gray-300">
                        <ul>
                            <li className="py-2">A Dynamic Website with admin portal and additional 1 year tech support.</li>
                            <li className="text-sm py-1"><i className="fal fa-clock fa-repeat text-primary/60"></i> 60 Days Delivery</li>
                            <li className="text-sm"><i className="fal fa-repeat fa-repeat text-primary/60"></i> 5 revisions</li>
                        </ul>
                    </div>
                </div>
            </div>
            <h3 className="text-xs text-gray-300 tracking-widest uppercase self-center"><i className="fal fa-info-circle"></i> Rates may vary as per specific requirements</h3>
        </section>

        <Outro />

        <Footer />

    </main>
  )
}
