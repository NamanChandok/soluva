import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

type Props = {}

export default function Footer({}: Props) {
  return (
    <section id="footer" className="p-8 md:px-48 bg-[#181818]">
            <div className="justify-between items-center flex">
                <Link href="/" className="font-mango text-xl flex gap-2 items-center hover:translate-x-1 transition ease-in-out"><Image src="./logo.png" alt='soluvaa' className="h-10" />SOLUVAA</Link>
                <div className="text-gray-300 text-xl">
                    <Link href="https://instagram.com/we_atsoluva" className="hover:text-white transition ease-in-out pl-2"><i className="fab fa-instagram"></i></Link>
                    <Link href="#" className="hover:text-white transition ease-in-out pl-2"><i className="fab fa-twitter"></i></Link>
                    <Link href="#" className="hover:text-white transition ease-in-out pl-2"><i className="fab fa-facebook"></i></Link>
                </div>
            </div>
            <div className="flex flex-col md:flex-row text-gray-300 py-8">
                <ul className="md:w-1/4 py-4">
                    <h1 className="text-white pb-1 text-md">Digital Marketing</h1>
                    <li><Link className="hover:text-white transition ease-in-out underline underline-offset-2 text-sm decoration-transparent hover:decoration-primary/50" href="digital">Overview</Link></li>
                    <li><Link className="hover:text-white transition ease-in-out underline underline-offset-2 text-sm decoration-transparent hover:decoration-primary/50" href="digital">SEO</Link></li>
                    <li><Link className="hover:text-white transition ease-in-out underline underline-offset-2 text-sm decoration-transparent hover:decoration-primary/50" href="digital">Email marketing</Link></li>
                    <li><Link className="hover:text-white transition ease-in-out underline underline-offset-2 text-sm decoration-transparent hover:decoration-primary/50" href="digital">Analytics & Reporting</Link></li>
                </ul>
                <ul className="md:w-1/4 py-4">
                    <h1 className="text-white pb-1 text-md">Website Development</h1>
                    <li><Link className="hover:text-white transition ease-in-out underline underline-offset-2 text-sm decoration-transparent hover:decoration-primary/50" href="web">Overview</Link></li>
                    <li><Link className="hover:text-white transition ease-in-out underline underline-offset-2 text-sm decoration-transparent hover:decoration-primary/50" href="web">Front end</Link></li>
                    <li><Link className="hover:text-white transition ease-in-out underline underline-offset-2 text-sm decoration-transparent hover:decoration-primary/50" href="web">Ecommerce website</Link></li>
                </ul>
                <ul className="md:w-1/4 py-4">
                    <h1 className="text-white pb-1 text-md">Video Editing</h1>
                    <li><Link className="hover:text-white transition ease-in-out underline underline-offset-2 text-sm decoration-transparent hover:decoration-primary/50" href="video">Overview</Link></li>
                    <li><Link className="hover:text-white transition ease-in-out underline underline-offset-2 text-sm decoration-transparent hover:decoration-primary/50" href="video">Scriptwriting</Link></li>
                    <li><Link className="hover:text-white transition ease-in-out underline underline-offset-2 text-sm decoration-transparent hover:decoration-primary/50" href="video">Montage Editing</Link></li>
                    <li><Link className="hover:text-white transition ease-in-out underline underline-offset-2 text-sm decoration-transparent hover:decoration-primary/50" href="video">Advertisement Creation</Link></li>
                </ul>
                <ul className="md:w-1/4 py-4">
                    <h1 className="text-white pb-1 text-md">Mobile App Development</h1>
                    <li><Link className="hover:text-white transition ease-in-out underline underline-offset-2 text-sm decoration-transparent hover:decoration-primary/50" href="mobile">Overview</Link></li>
                    <li><Link className="hover:text-white transition ease-in-out underline underline-offset-2 text-sm decoration-transparent hover:decoration-primary/50" href="mobile">UI/UX design</Link></li>
                    <li><Link className="hover:text-white transition ease-in-out underline underline-offset-2 text-sm decoration-transparent hover:decoration-primary/50" href="mobile">IOS/Android App Development</Link></li>
                </ul>
            </div>
            <hr className="opacity-20" />
            <div className="text-gray-400 py-2 text-sm">
                <span>&copy; 2022 Soluvaa | All rights reserved</span>
            </div>
        </section> 
  )
}