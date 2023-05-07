import './globals.css'
import { Poppins } from 'next/font/google';
import Script from 'next/script';

const poppins = Poppins({ subsets: ['latin'], weight: ['400', '500', '600'] });

export const metadata = {
  title: 'Soluva | Leave it on us',
  description: 'Whether you need digital marketing, web development, video editing, IT consulting, or any other technology-related services, our team of experts is here to support you every step of the way.  ',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}
      <Script src='./fontawesome.js' crossOrigin='anonymous'></Script>
      </body>
    </html>
  )
}
