import React, { useState } from 'react';
import CarouselRow from './carruselRow';

const Carousel: React.FC = () => {
    const [leftIndex, setLeftIndex] = useState(0);
    const [rightIndex, setRightIndex] = useState(0);

    const items = [
        { src: 'path/to/image1.jpg', alt: 'Item 1', width: 100, height: 100 },
        { src: 'path/to/image2.jpg', alt: 'Item 2', width: 100, height: 100 },
        { src: 'path/to/image3.jpg', alt: 'Item 3', width: 100, height: 100 },
        { src: 'path/to/image4.jpg', alt: 'Item 4', width: 100, height: 100 },
        { src: 'path/to/image5.jpg', alt: 'Item 5', width: 100, height: 100 }
    ];

    const handleLeftNavigation = () => {
        setLeftIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : items.length - 1));
    };

    const handleRightNavigation = () => {
        setRightIndex((prevIndex) => (prevIndex < items.length - 1 ? prevIndex + 1 : 0));
    };

    return (
        <div>
            <CarouselRow items={items} direction="left" onNavigate={handleLeftNavigation} />
            <CarouselRow items={items} direction="right" onNavigate={handleRightNavigation} />
        </div>
    );
};

export default Carousel;