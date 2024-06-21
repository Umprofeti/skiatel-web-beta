import React from "react";
import { getPayloadHMR } from '@payloadcms/next/utilities'
import configPromise from "@payload-config";
import { Amiko } from "next/font/google";
import Image from "next/image";

const amiko = Amiko({subsets: ["latin"], weight: ["600", "400", "700"]})

const payload = await getPayloadHMR({ config: configPromise })
const dataPost= async (id: string) => await payload.find({
    collection: 'blog',
    depth: 2,
    where: {
        id: {
            equals: id
        }
    }
})

export default async function Page({searchParams}) {
    const data = await dataPost(searchParams.id)
    let { title, createdAt, Thumbnail } = data.docs[0]
    let dateFormat = new Date(createdAt).toLocaleDateString('es-ES', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    })
    return (
        <section className="w-full px-10 mt-[150px]">
            <div className="w-full bg-secondary flex flex-row gap-2 items-center justify-between rounded-lg py-6 px-4">
                <div className="w-full">
                    <span className={`text-primary text-left w-full mt-10 ${amiko.className}`}>Publicado el {dateFormat}</span>
                    <h3 className={`text-3xl text-left font-bold text-primary w-full ${amiko.className}`}>{title}</h3>
                    <span className={`text-primary text-left w-full ${amiko.className}`}>Por: Jonathan Rodríguez</span>
                </div>
                <Image
                        src={Thumbnail.url}
                        height={Thumbnail.height}
                        width={Thumbnail.width}
                        alt={Thumbnail.alt}
                        className="w-1/2 max-w-[250px] h-auto z-10 rounded-md"
                />
            </div>
        </section>
    )
}