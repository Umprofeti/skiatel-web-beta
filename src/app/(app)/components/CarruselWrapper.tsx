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
        <Splide key={data[0].id} className="w-full" aria-label="Carrusel-wrapper">
            {/* Splide Data */}
            {
                data.map((item, index) => {
                    let ComponentsCarrusel: React.ReactNode[] = [];

                    switch (item.blockType) {
                        case 'heroTwo':
                            ComponentsCarrusel.push(
                                <SplideSlide key={index}>
                                    <CarruselHero key={index} data={item}/>
                                </SplideSlide>
                            )
                        break;
                        case 'carruselTwo':
                            ComponentsCarrusel.push(
                                <SplideSlide key={index}>
                                    <CarruselSkew key={index} item={item}/>
                                </SplideSlide>
                            )
                        break;
                        case 'carruselThree':
                            ComponentsCarrusel.push(
                                <SplideSlide key={index}>
                                   <span>Hola</span>
                                </SplideSlide>
                            )
                        break;

                        default:
                            ComponentsCarrusel.push(
                                <SplideSlide key={index}>
                                    <span key={index}>Hola</span>
                                </SplideSlide>
                            )
                    }

                    return (
                        ComponentsCarrusel.map((item) => {
                            return item
                        })
                    )
                })
            }
        </Splide>
    )

}

export default CarruselWrapper