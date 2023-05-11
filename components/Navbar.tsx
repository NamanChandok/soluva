import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

type Props = {
    contact?: boolean;
}

export default function Navbar({ contact }: Props) {
  return (
    <nav className="fixed z-20 bg-[#111] w-full h-auto md:px-12 p-4 py-6 items-center justify-between flex">
        <Link href="/" className="font-mango text-xl flex gap-2 items-center hover:translate-x-1 transition ease-in-out"><Image src="/logo.png" className="h-10" alt='soluvaa' />SOLUVA</Link>
        <div className="hidden items-center text-sm gap-6 md:flex underline decoration-transparent decoration-2">
            <Link href="/#work" className="hover:decoration-primary/50 transition ease-in-out">What we do</Link>
            <Link href="portfolio" className="hover:decoration-primary/50 transition ease-in-out">Our work</Link>
            <Link href="contact" className="hover:decoration-primary/50 transition ease-in-out">Who we are</Link>
        </div>
        {!contact && <Link className="px-4 p-2 bg-white/10 text-sm hover:bg-white/20 transition rounded-md ease-in-out hover:shadow-md" href="contact">Get in touch</Link>}
    </nav>
  )
}