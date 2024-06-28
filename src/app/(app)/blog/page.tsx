import React from "react";
import { getPayloadHMR } from '@payloadcms/next/utilities'
import configPromise from '@payload-config'
import CanvasSpline from "../components/CanvasSpline";
import ArticleBlog from "../components/articleBlog";
import "bootstrap-icons/font/bootstrap-icons.css";
import BackGround from '../../../../public/Random cube waves@1-1536x735.png'
import Image from "next/image";
import Link from "next/link";

const paylaod = await getPayloadHMR({ config: configPromise })


export const revalidate = 10
export default async function Page(){
    const data = await paylaod.find({
        collection: 'blog',
        depth: 2
    })
    
    return (
        <div className="flex flex-col">
            {/* Hero Section */}
            <section className="flex flex-col justify-center items-center text-primary w-full h-auto max-h-[500px]">
                <h2 className="text-center absolute font-Aeros text-4xl z-20">BLOG</h2>
                <Image className="relative max-h-[800px] w-full block lg:hidden z-10"  width={700} height={600} src={BackGround.src} alt="Fondo-Img"/>
                <CanvasSpline className="relative max-h-[500px] hidden lg:block" itemID={data.docs[0].id} URLSpline={'https://prod.spline.design/XVAmy2pqABwM8Oq5/scene.splinecode'} />
            </section>
            {/* ContentSection */}
            <section className="z-30 bg-primary relative flex flex-row justify-center items-center rounded-t-md top-[-50px] py-9">
                <div className="flex flex-col items-center justify-center px-3 lg:px-0">
                    <h3 className="text-center text-xl font-Aeros">ÚLTIMAS PLUBLICACIONES</h3>
                    {/* Contenido del blog */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center items-start px-4 w-full">  
                        {
                            data.docs.map(item => {
                                return (
                                   <Link href={{
                                       pathname: `/blog/${item.title.replace(/\s+/g, '-').toLowerCase()}`,
                                       query: {id: item.id}
                                   }}>
                                     <ArticleBlog key={item.id} data={item} />
                                   </Link>
                                )
                            })
                        }
                    </div>
                </div>
            </section>
        </div>
    )
}
