'use client'
import React from 'react'
import CanvasSpline from "./CanvasSpline";

export const HeroBlock = ({ item }) => {
  return (
    <div
      key={item.id}
      className="w-full mt-8 flex flex-col justify-center items-center overflow-hidden"
    >
      <div className="relative ">
        <h2 className="text-3xl font-Aeros">{item.title}</h2>
        <h3 className="text-xl font-Aeros text-center">{item.subtitle}</h3>
      </div>
      <div className="w-1/2">
        {item.ShowCircleBackground ? <Circle /> : null}
        {
          item.SplineAnimationLink && <CanvasSpline itemID={item.id} URLSpline={item.SplineAnimationLink} />
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

