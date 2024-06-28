'use client'
import React from 'react'
import CanvasSpline from "./CanvasSpline";
import Image from 'next/image';
import './ajuste.css'
import type { Hero } from '@/payload-types';

export const HeroBlock = ({ item }:{item:Hero}) => {
  return (
    <div
      key={item.id}
      className="w-full lg:mt-8 flex flex-col justify-center items-center overflow-hidden"
    >
      <div className="relative ">
        <h2 className="text-xl lg:text-3xl font-Aeros text-center">{item.title}</h2>
        <h3 className="text-lg lg:text-xl font-Aeros text-center">{item.subtitle}</h3>
      </div>
      <div className="w-full lg:w-1/2">
        {item.ShowCircleBackground ? <Circle /> : null}
        {
          item.SplineAnimationLink && <CanvasSpline className={`lg:relative lg:bottom-9 mx-auto hidden lg:block lg:w-1/2 lg:h-1/2 z-20`} itemID={item.id} URLSpline={item.SplineAnimationLink} />
        }
        {
          item.SplineAnimationImage && <Image key={item.SplineAnimationImage.id} alt={item.SplineAnimationImage.filename} src={item.SplineAnimationImage.url} width={item.SplineAnimationImage.width} height={item.SplineAnimationImage.height}  className='lg:relative lg:bottom-9 mx-auto block  lg:hidden lg:w-1/2 lg:h-1/2 z-20' />
        }
      </div>
    </div>
  )
}

const Circle = () => {

    return(
        <div className="absolute w-1/2 h-1/2 overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center">
                <div className="absolute w-2/4 h-2/4 rounded-full border-2 border-secondary border-dashed">
                </div>
            </div>
        </div>
    )

}

