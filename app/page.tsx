'use client';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar'
import Outro from '@/components/Outro';
import Link from 'next/link'
import { Cursor, useTypewriter } from "react-simple-typewriter";
import Image from 'next/image';

export default function Home() {
  const [ text ] = useTypewriter({
    words: [
      "Digital Marketing",
      "Video Editing",
      "Web Development",
      "Mobile App Development",
      "Search Engine Optimization"
    ],
    loop: true,
    delaySpeed: 4000
  });  
  return (
    <main className="bg-[#111] text-white overflow-x-hidden scroll-smooth">
      
      <Navbar />

      <section id="hero" className="md:px-40 md:pb-20 pt-32 p-8 md:w-4/5">
        <h1 className="font-poppins text-5xl md:text-6xl pb-8 leading-snug font-medium">Choose <span className="font-mango underline decoration-primary/60">SOLUVA</span> as your IT solution partner.</h1>
        <Link className="px-4 p-2 bg-primary/50 hover:bg-primary/60 transition rounded-md ease-in-out hover:shadow-md hover:shadow-primary/20" href="contact.html">Get in touch</Link>
      </section>

      <section id="gallery" className="p-8 relative bg-gallery-pattern bg-no-repeat bg-cover bg-top">
        <div className="flex gap-8 justify-center md:flex-row flex-col">
          <Image src="/digital_market.jpg" alt='digital marketing' className="h-80 md:w-1/5 object-cover w-full object-[60%] rounded-2xl md:-translate-y-6" />
          <Image src="/video_edit.jpg" alt='video editing' className="h-80 md:w-1/5 object-cover w-full object-[60%] rounded-2xl md:translate-y-6" />
          <Image src="/web_dev.webp" alt='web development' className="h-80 md:w-1/5 object-cover w-full object-[60%] rounded-2xl md:-translate-y-6" />
          <Image src="/mobile_app.png" alt='mobile app development' className="h-80 md:w-1/5 object-cover w-full object-[60%] rounded-2xl md:translate-y-6" />
        </div>
        <h1 className="font-poppins text-4xl pt-20 pb-8 leading-snug text-center">
          We are the best choice for your <span className="text-primary/80">{text}</span>
          <Cursor />
        </h1>
      </section>
      
      <section id="work" className="p-8 md:px-32 bg-[#181818]">
            <div className="flex flex-col md:flex-row md:divide-x md:pb-8 divide-white/20">
                <div className="md:px-20 md:w-1/2 py-8">
                    <div className="border border-white/10 mb-6 w-16 h-16 text-xl flex items-center rounded-md justify-center"><i className="fas fa-store"></i></div>
                    <h2 className="text-2xl font-poppins font-semibold pb-2">Digital Marketing</h2>
                    <p className="text-gray-300 py-2 pb-6">Digital marketing services help businesses succeed online by enhancing their digital presence, generating leads and sales, and driving website traffic... {/* These services include SEO, PPC advertising, social media marketing, email marketing, and content marketing. SEO improves search engine rankings, while PPC advertising displays targeted ads on search engines and websites. Social media marketing engages potential customers on social media platforms, while email marketing sends promotional messages to an email list. Content marketing creates valuable content to attract and retain a specific audience. Partnering with experienced digital marketing professionals can help businesses effectively achieve their goals.*/}</p>
                    <a className="p-2 px-4 text-white rounded-md bg-primary/50 hover:bg-primary/60" href="digital">Learn more</a>
                </div>
                <div className="md:px-20 md:w-1/2 py-8">
                    <div className="border border-white/10 mb-6 w-16 h-16 text-xl flex items-center rounded-md justify-center"><i className="fas fa-video"></i></div>
                    <h2 className="text-2xl font-poppins font-semibold pb-2">Video Editing</h2>
                    <p className="text-gray-300 py-2 pb-6">Video editing is an essential component of any successful video production. It involves the process of selecting and manipulating video footage to create a compelling final product... {/*  Professional video editors use their expertise to refine raw footage, add visual and sound effects, and synchronize the elements to create a cohesive and engaging story. They have access to specialized software and tools to edit, enhance, and refine the video to ensure the highest quality output. Partnering with experienced video editors can help businesses and content creators achieve their vision by creating high-quality videos that are engaging, informative, and visually appealing to their target audience.*/}</p>
                    <a className="p-2 px-4 text-white rounded-md bg-primary/50 hover:bg-primary/60" href="video">Learn more</a>
                </div>
            </div>
            <div className="flex flex-col md:flex-row md:divide-x divide-white/20">
                <div className="md:px-20 md:w-1/2 py-8">
                    <div className="border border-white/10 mb-6 w-16 h-16 text-xl flex items-center rounded-md justify-center"><i className="fas fa-globe"></i></div>
                    <h2 className="text-2xl font-poppins font-semibold pb-2">Web Development</h2>
                    <p className="text-gray-300 py-2 pb-6">The process of creating and maintaining websites involves a range of tasks, including web design, programming, and database management... {/*  Web developers use programming languages like HTML, CSS, and JavaScript to create the visual elements and functionality of a website. They may also use content management systems like WordPress or Drupal to manage website content and streamline the development process.   Experienced web developers stay up to date with the latest trends and technologies to create modern, responsive, and user-friendly websites that meet the specific needs of their clients. Partnering with skilled web developers can help businesses create a professional and effective online presence that engages and informs their target audience.*/}</p>
                    <a className="p-2 px-4 text-white rounded-md bg-primary/50 hover:bg-primary/60" href="web">Learn more</a>
                </div>
                <div className="md:px-20 md:w-1/2 py-8">
                    <div className="border border-white/10 mb-6 w-16 h-16 text-xl flex items-center rounded-md justify-center"><i className="fas fa-mobile"></i></div>
                    <h2 className="text-2xl font-poppins font-semibold pb-2">Mobile App Development</h2>
                    <p className="text-gray-300 py-2 pb-6">Mobile app development involves a range of tasks, including user interface design, programming, and testing. Skilled mobile app developers use programming languages... {/*  such as Java or Swift to create apps for different platforms like iOS and Android. They also have experience with user interface design and understand the importance of creating a seamless and intuitive user experience.  Developing a mobile app requires careful planning and testing to ensure that the app is bug-free, performs well, and meets the specific needs of the target audience. Partnering with experienced mobile app developers can help businesses create high-quality, user-friendly mobile apps that enhance the user experience and improve engagement with their brand.*/}</p>
                    <a className="p-2 px-4 text-white rounded-md bg-primary/50 hover:bg-primary/60" href="mobile">Learn more</a>
                </div>
            </div>
        </section>
        
        <Outro />

        <Footer />

    </main>
  )
}
