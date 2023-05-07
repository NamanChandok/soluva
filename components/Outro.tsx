import React from 'react'
import Link from 'next/link'

type Props = {}

export default function Outro({}: Props) {
  return (
    <section id="outro" className="p-8 md:p-20">
        <div className="flex flex-col md:flex-row">
            <h1 className="font-poppins text-4xl md:px-10 pb-4 leading-snug md:w-1/2 font-semibold">Ready to grow your brand with an IT solution agency you can trust?<br /> Contact us now!</h1>
            <div className="text-gray-300 md:w-1/2 md:px-10 md:pr-20">
                <p className="pt-4 pb-6">Soluvaa is committed to delivering high-quality services with a focus on transparency and communication. Their young and talented team stays up to date with the latest technologies and trends to provide exceptional results. Clients can trust Soluvaa as a reliable partner for enhancing their digital presence.</p>
                <Link className="px-4 p-2 bg-primary/50 hover:bg-primary/60 transition rounded-md ease-in-out hover:shadow-md hover:shadow-primary/20 text-white" href="contact">📝 Get in touch</Link>
            </div>
        </div>
    </section>
  )
}