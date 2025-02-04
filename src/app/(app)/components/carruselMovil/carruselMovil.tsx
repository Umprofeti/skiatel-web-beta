'use client'
import React, { useState } from 'react';
import CarouselRow from './carruselRow';
import {Media} from '@/payload-types'

interface items{
    item: Media[]
}


const Carousel: React.FC<items> = ({item}) => {
    const [leftIndex, setLeftIndex] = useState(0);
    const [rightIndex, setRightIndex] = useState(0);

    const handleLeftNavigation = () => {
        setLeftIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : item.length - 1));
    };

    const handleRightNavigation = () => {
        setRightIndex((prevIndex) => (prevIndex < item.length - 1 ? prevIndex + 1 : 0));
    };
    // Divide the items into two halves
    const middleIndex = Math.ceil(item.length / 2);
    const leftItems = item.slice(0, middleIndex);
    const rightItems = item.slice(middleIndex);

    return (
        <div className='flex flex-col gap-6 lg:hidden'>
            <CarouselRow items={leftItems} directionI='right'/>
            <CarouselRow items={rightItems} directionI='left'/>
        </div>
    );
};

export default Carousel;