import React from 'react'
import Image from 'next/image'
import { getPayload } from 'payload'
import configPromise from "@payload-config";
import { motion } from 'framer-motion';



const CarruselHero = ({data}) => {

    let {title, Content, Photo, id} = data

    return (
        <section className='flex flex-col bg-secondary w-full h-full rounded-md gap-4 py-10 px-4' key={id}>
            <h3 className='text-white font-Aeros text-center w-full text-3xl'>{title.toUpperCase()}</h3>
            <div className='flex flex-row gap-4 justify-center items-start'>
                <p className='text-white text-left w-[70%] px-5 text-lg'>{Content}</p>
                <picture className='w-[30%] rounded-full border-2 border-dashed border-primary p-6'>
                    <Image  src={`http://localhost:3000${Photo.url}`}
                            height={Photo.height} 
                            width={Photo.width} 
                            alt={Photo.filename} 
                            key={Photo.id}
                            className='w-full mx-auto relative border-primary border-2 animate-none border-solid bg-secondary rounded-full'
                    />
                </picture>
            </div>
        </section>
    )
}
export default CarruselHero