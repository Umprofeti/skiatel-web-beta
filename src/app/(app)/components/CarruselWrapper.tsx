'use client'
import React from 'react'
//@ts-ignore
import { Splide, SplideSlide } from '@splidejs/react-splide';
import CarruselHero from './carruselBlocks/CarruselHero';
import {CarruselSkew} from './carruselBlocks/CarruselSkew';
import '@splidejs/react-splide/css/core'
import '@splidejs/react-splide/css';

const CarruselWrapper = ({data}) => {

    return (
        <Splide key={data[0].id} className="w-full bg-secondary" aria-label="Carrusel-wrapper">
            {/* Splide Data */}
            {
                data.map((item, index) => {
                    let ComponentsCarrusel: React.ReactNode[] = [];

                    switch (item.blockType) {
                        case 'heroTwo':
                            ComponentsCarrusel.push(
                                <SplideSlide key={`heroTwo-${index}`}>
                                    <CarruselHero key={`heroTwo-${index}`} data={item}/>
                                </SplideSlide>
                            )
                        break;
                        case 'carruselTwo':
                            ComponentsCarrusel.push(
                                <SplideSlide key={`carruselTwo-${index}`}>
                                    <div key={`containerVariant-2-${index}`} className='bg-secondary'>
                                        <CarruselSkew key={`carruselTwo-${index}`} item={item}/>
                                    </div>
                                </SplideSlide>
                            )
                        break;
                        default:
                            break;
                    }

                    return ComponentsCarrusel;
                })
            }
        </Splide>
    )
}

export default CarruselWrapper;