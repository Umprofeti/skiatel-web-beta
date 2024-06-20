import React from 'react'
import Image from 'next/image'

type CarruselTwo = {
  TitleCarrusel: string
  CarruselImages: CarruselImages[]
}

type CarruselImages = {
  id: string
  filename: string
  filesize: number
  height: number
  width: number
  url: string
}

export const CarruselSkew = ({ item }: { item: CarruselTwo }) => {

  return (
    <div className="w-full bg-transparent flex flex-col rounded-md gap-4 py-10 px-4">
      <h2 className="text-white font-Aeros text-center text-2xl">{item.TitleCarrusel}</h2>
      <div className="overflow-hidden">
        <GridContainer items={item.CarruselImages} />
      </div>
    </div>
  )
}

const GridItem = ({ item }: { item: CarruselImages }) => {
  return (
    <div
      key={item.id}
      className="w-full h-auto max-w-[250px] bg-primary mx-2 rounded-md skew-x-[34deg] skew-y-[-11deg] shadow-md hover:scale-105 transition-all"
    >
      <Image
        src={`http://localhost:3000${item.url}`}
        alt={item.filename}
        className="w-full h-auto drop-shadow-md m-auto aspect-video rounded-md"
        width={item.width}
        height={item.height}
      />
    </div>
  )
}


const GridContainer = ({ items }: { items: CarruselImages[] }) => {
    let middleItems: React.ReactNode[] = []
    let firtsItem: React.ReactNode[] = []
    let lastItem: React.ReactNode[] = []
    items.map((item, index) => {

      if(index === 0) {
          firtsItem.push(
              <GridItem item={item} key={item.id} />
          );
      }

      if(index === items.length -1) {
          lastItem.push(
              <GridItem item={item} key={item.id} />
          );
      }

      if(index !== 0 && index !== items.length - 1) {
          middleItems.push(
              <div className='w-full h-auto  px-4 mx-4 my-5 py-3' key={index}>
                  <GridItem item={item} key={item.id} />
              </div>
          );
      }
    })


    return (
        <div className='rotate-[-15deg]'>
            <div className='grid grid-rows-1 grid-cols-4 animate-infiniteScrool mt-10 px-10 justify-center items-center gap-10  transition-all'>
                <div className='col-span-1'>
                    {firtsItem}
                </div>
                <div className='col-span-2 grid grid-rows-2 grid-flow-col auto-cols-auto'>
                    {middleItems}
                </div>
                <div className='col-span-1 mx-10'>
                    {lastItem}
                </div>
            </div>
        </div>
    );
}