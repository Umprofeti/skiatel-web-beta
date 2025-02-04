import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Media } from '@/payload-types';

interface CarouselRowProps {
    items: Media[];
    directionI: 'left' | 'right';
}

const CarouselRow: React.FC<CarouselRowProps> = ({ items, directionI }) => {
    const scrollRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const scrollAmount = directionI === 'left' ? -1 : 1;
        const scrollInterval = setInterval(() => {
            if (scrollRef.current) {
                const newScrollLeft = scrollRef.current.scrollLeft + scrollAmount;

                if (newScrollLeft <= 0) {
                    scrollRef.current.scrollLeft = scrollRef.current.scrollWidth - scrollRef.current.clientWidth;
                } else if (newScrollLeft >= scrollRef.current.scrollWidth - scrollRef.current.clientWidth) {
                    scrollRef.current.scrollLeft = 0;
                } else {
                    scrollRef.current.scrollLeft = newScrollLeft;
                }
            }
        }, 30); // Aproximadamente 60 FPS

        return () => clearInterval(scrollInterval);
    }, [directionI]);

    return (
        <div className='w-[400px] sm:w-[550px] md:w-[700px]' style={{ display: 'flex', alignItems: 'center', overflow: 'hidden' }}>
            <motion.div
                ref={scrollRef}
                style={{ display: 'flex', overflowX: 'hidden', width: '900%' }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
            >
                {items.map((item, index) => (
                    <div className='mx-3' key={index} style={{ minWidth: '300px', maxWidth: '300px' }}>
                        <Image className='object-cover' src={item.url ?? ''} alt={item.filename ?? ''} width={item.width ?? 100} height={item.height ?? 100} />
                    </div>
                ))}
            </motion.div>
        </div>
    );
};

export default CarouselRow;