import React from "react";
import { getPayload } from 'payload'
import configPromise from "@payload-config";
import { Amiko } from "next/font/google";
import Image from "next/image";
import type {Metadata, ResolvingMetadata } from "next";
import RichText from "../../components/RichText";
import CodeWrapper from "../../components/CodeWrapper";



type Props = {
    searchParams: {
        id: string
    }

}

const amiko = Amiko({subsets: ["latin"], weight: ["600", "400", "700"]})

const payload = await getPayload({ config: configPromise })
const dataPost= async (id: string) => await payload.find({
    collection: 'blog',
    depth: 2,
    where: {
        id: {
            equals: id
        }
    }
})

export default async function Page({searchParams}:Props) {
    const data = await dataPost(searchParams.id)
    let { title, createdAt, Thumbnail }= data.docs[0]
    let fechaCreacion:string = createdAt.toString()
    let dateFormat = new Date(fechaCreacion).toLocaleDateString('es-ES', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    })
    return (
        <section className="w-full px-10 mt-[70px] lg:mt-[150px] flex flex-col gap-10">
            <div className="w-full bg-secondary flex flex-col-reverse lg:flex-row gap-2 items-center justify-between rounded-lg py-6 px-4">
                <div className="w-full">
                    <span className={`text-primary text-left w-full mt-10 ${amiko.className}`}>Publicado el {dateFormat}</span>
                    <h3 className={`text-3xl text-left font-bold text-primary w-full ${amiko.className}`}>{title}</h3>
                    <span className={`text-primary text-left w-full ${amiko.className}`}>Por: Jonathan Rodríguez</span>
                </div>
                <Image
                        src={Thumbnail.url}
                        height={Thumbnail.height}
                        width={Thumbnail.width}
                        alt='Imagen Blog'
                        className="w-full max-w-[250px] mx-auto h-auto z-10 rounded-md"
                />
            </div>
            <article className="w-full bg-primary flex flex-col gap-3 px-2 lg:px-8 ">
                    {
                        data.docs[0].Layout.map((block) => {
                            switch (block.blockType) {
                                case 'parrafo':
                                    return <RichText key={block.id} node={block.Parrafo.root} />
                                case 'CodeBlock':
                                    return <CodeWrapper block={block} />
                                default:
                                    return null
                            }
                            
                        })
                    }
            </article>
        </section>
    )
}

export async function generateMetadata({searchParams}:Props, parent:ResolvingMetadata):Promise<Metadata> {
    const data = await dataPost(searchParams.id)
    let { title, Thumbnail, Excerpt } = data.docs[0] 

    return {
        title: title,
        description: Excerpt,
        metadataBase: new URL('https://www.skiatel.com'),
        openGraph: {
            title: title,
            description: Excerpt,
            images: [
                {
                    url: Thumbnail.url
                }
            ]
        }  
    }
}