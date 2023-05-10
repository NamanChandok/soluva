'use client';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar'
import Outro from '@/components/Outro';
import Project from '@/components/Project';
import { worksData } from './worksdata'

export default function Home() {
    const works = worksData;
    return (
        <main className="bg-[#111] text-white overflow-x-hidden scroll-smooth">
        
        <Navbar />

        <section id="hero" className="md:px-40 pt-32 p-8 text-center flex flex-col pb-16">
            <h3 className="bg-primary/20 p-2 px-4 rounded-full font-poppins tracking-widest text-xs text-primary w-max self-center shadow-lg shadow-primary/10">PORTFOLIO</h3>
            <h1 className="font-poppins text-5xl py-4 leading-tight md:w-2/5 self-center font-semibold">Our Work</h1>
            <p className="text-gray-300 text-md md:w-3/5 self-center font-poppins">A showcase of our past clients and their success stories with our IT solutions.</p>
        </section>
        
            <section id="works" className="p-8 md:px-32 bg-[#181818] flex flex-col">
                {works.map((project, i) => (
                        <Project key={i} invert={i%2===0} {...project}  />
                    ))}
            </section>
            
            <Outro />

            <Footer />

        </main>
    )
}
