import React from 'react'
import Image from 'next/image'

type Props = {
    title: string;
    imgUrl: string;
    url: string;
    invert?: boolean;
}

export default function Project({title, imgUrl, url, invert}: Props) {
  return (
    <div className={`flex flex-col w-full items-center gap-8 py-4 ` + (invert ? `md:flex-row-reverse` : `md:flex-row` )}>
        <div className='w-1/2 flex flex-col gap-6 px-16'>
            <h2 className='font-semibold text-5xl leading-tight'>{title}</h2>
            <a href={url} className="uppercase tracking-wider rounded-full w-max text-sm bg-primary/50 hover:bg-primary/60 transition ease-in-out p-2 px-4">View Project on Web</a>
        </div>
        <div className='w-1/2 flex justify-center'>
            <img src={imgUrl} alt={title} className="w-[90%] h-auto" />
        </div>
    </div>
  )
}