'use client';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar'

export default function Home() {
  return (
    <main className="bg-[#111] text-white overflow-x-hidden scroll-smooth">

        <Navbar contact/>

        <section id="hero" className="md:px-40 pt-32 p-8 text-center flex flex-col">
            <h3 className="bg-primary/20 p-2 px-4 rounded-full font-poppins tracking-widest text-xs text-primary w-max self-center shadow-lg shadow-primary/10">CONTACT US</h3>
            <h1 className="font-poppins text-5xl py-4 leading-tight md:w-2/5 self-center font-semibold">Get in touch with us for collaboration</h1>
            <p className="text-gray-300 text-md md:w-3/5 self-center font-poppins">Whether you need digital marketing, web development, video editing, IT consulting, or any other technology-related services, our team of experts is here to support you every step of the way.</p>
        </section>

        <section id="contact" className="p-8 flex flex-col">
            <ul className="text-left self-center rounded-md border-2 border-white/10 md:w-2/5 md:px-12 p-8">
                <span className="text-sm text-gray-300 tracking-widest">SOLUVAA OFFICE</span>
                <h1 className="text-3xl font-poppins font-semibold pt-2 pb-8">New Delhi, India</h1>
                <li className="flex items-center gap-3 py-2"><div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center text-primary"><i className="fas fa-phone"></i></div> +91 90588 13967</li>
                <li className="flex items-center gap-3 py-2"><div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center text-primary"><i className="fas fa-envelope"></i></div> soluvatech@gmail.com</li>
                <li className="flex items-center gap-3 py-2"><div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center text-primary"><i className="fas fa-map"></i></div> Peeragarhi Industrial Area, Paschim Vihar, New Delhi - 110087</li>
            </ul>
        </section>

        <section id="form" className="p-8 flex flex-col">
            <h1 className="font-poppins text-3xl py-4 leading-tight self-center font-semibold">Drop Us a Line</h1>
            <p className="text-gray-300 text-sm self-center font-poppins">Please fill out the form below.</p>     
            <form className="flex flex-col space-y-3 w-2/5 mx-auto my-4">
                <div className="flex-col flex space-x-0 md:flex-row md:space-x-2 space-y-3 md:space-y-0">
                    <input
                        type="text"
                        name="name"
                        placeholder="Full Name *"
                        className="outline-none bg-slate-400/10 rounded-md w-1/2 border-b-2 border-gray-600 px-6 py-4 text-gray-500 placeholder-white/30 transition-all focus:text-white focus:border-primary/50"
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Email *"
                        className="outline-none bg-slate-400/10 rounded-md w-1/2 border-b-2 border-gray-600 px-6 py-4 text-gray-500 placeholder-white/30 transition-all focus:text-white focus:border-primary/50"
                    />
                </div>
                <input
                    type="text"
                    name="subject"
                    placeholder="Subject *"
                    className="outline-none bg-slate-400/10 rounded-md border-b-2 border-gray-600 px-6 py-4 text-gray-500 placeholder-white/30 transition-all focus:text-white focus:border-primary/50"
                />
                <textarea
                    name="message"
                    placeholder="Enter your message here..."
                    className="outline-none bg-slate-400/10 rounded-md border-b-2 border-gray-600 px-6 py-4 text-gray-500 placeholder-white/30 transition-all focus:text-white focus:border-primary/50"
                ></textarea>
                <input
                    type="submit"
                    value="Submit"
                    className="bg-primary/40 text-white cursor-pointer px-6 py-3 w-full rounded-md hover:bg-primary/60 transition transition-400 ease-in-out"
                />
            </form>
        </section>

        <Footer />

    </main>
  )
}
