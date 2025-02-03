import React, { useEffect, useRef } from 'react';
import Image from 'next/image';

interface CarouselRowProps {
    items: { src: string, alt: string, width: number, height: number }[];
    direction: 'left' | 'right';
    onNavigate: (direction: 'left' | 'right') => void;
}

const CarouselRow: React.FC<CarouselRowProps> = ({ items, direction, onNavigate }) => {
    const scrollRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const interval = setInterval(() => {
            if (scrollRef.current) {
                if (direction === 'left') {
                    scrollRef.current.scrollLeft -= 1;
                } else {
                    scrollRef.current.scrollLeft += 1;
                }
            }
        }, 10);

        return () => clearInterval(interval);
    }, [direction]);

    return (
        <div style={{ display: 'flex', alignItems: 'center' }}>
            {direction === 'left' && (
                <button onClick={() => onNavigate('left')}>{"<-"}</button>
            )}
            <div ref={scrollRef} style={{ display: 'flex', overflowX: 'auto', scrollBehavior: 'smooth' }}>
                {items.map((item, index) => (
                    <div key={index} style={{ minWidth: '100px', margin: '0 5px' }}>
                        <Image src={item.src} alt={item.alt} width={item.width} height={item.height} />
                    </div>
                ))}
            </div>
            {direction === 'right' && (
                <button onClick={() => onNavigate('right')}>{'->'}</button>
            )}
        </div>
    );
};

export default CarouselRow;