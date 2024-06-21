"use client"
import { useState, useRef, useEffect } from 'react';
import { useScroll, useSpring, useTransform, motion } from 'framer-motion';

const SmoothScroll = ({children}:{children:React.ReactNode}) => {
    const { scrollYProgress } = useScroll();
    const smoothProgress = useSpring(scrollYProgress, { mass: 0.1 })
    const contentRef = useRef<HTMLDivElement>(null);
    const [contentHeight, setContentHeight] = useState(0);
    
    useEffect(() => {
      const handleResize = () => {
        if (contentRef.current) {
          setContentHeight(contentRef.current.scrollHeight)
        }
      }

        handleResize();
        window.addEventListener("load", handleResize);

        return () => {
            window.removeEventListener("load", handleResize);
        }
      }, [contentRef, children]);
    
      let y;

      if( typeof window != 'undefined'){
        y = useTransform(smoothProgress, value => {
           if(typeof window != 'undefined'){
             return value * -(contentHeight - window.innerHeight);
           }
        });
      }
    
    return (
        <>
        <div style={{ height: contentHeight }} />
            <motion.div
                className="w-[100vw] fixed top-[-45px] flex flex-col"
                ref={contentRef}
                style={{ y }}
            >
                {children}
            </motion.div>
        </>
    )
}

export default SmoothScroll;