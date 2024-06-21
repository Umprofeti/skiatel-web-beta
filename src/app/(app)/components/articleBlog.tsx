import React from "react";
import type {Blog} from '@/payload-types';
import Image from "next/image";
import { Amiko } from "next/font/google";

const amiko = Amiko({subsets: ["latin"], weight: ["600", "400", "700"]})

const ArticleBlog = ({data}:{data:Blog}) => {
    return (
        <article className="flex flex-col gap-4 py-5 transition-all hover:shadow-md rounded-lg px-4 hover:cursor-pointer">
            <Image className="w-full rounded-md max-w-[300px] max-h-[250px]" src={data.Thumbnail.url} height={data.Thumbnail.height} width={data.Thumbnail.width} alt={data.Thumbnail.alt} />
            <div className="flex flex-col gap-3">
                <h3 className={`font-bold text-lg text-black text-left ${amiko.className}`}>{data.title}</h3>
                <p className={`text-secondary text-left ${amiko.className}`}>{data.Excerpt}</p>
            </div>
        </article>
    )
}

export default ArticleBlog