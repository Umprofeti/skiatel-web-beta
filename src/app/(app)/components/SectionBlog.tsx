import React from "react";
import {Amiko, Actor} from 'next/font/google';
import { PaginatedDocs } from "payload";
import { Blog } from "@/payload-types";
import Link from "next/link";

const amiko = Amiko({subsets: ["latin"], weight: ["600", "400", "700"]})
const actor = Actor({subsets: ["latin"], weight: ["400"]})

const SectionBlock = ({title, data}: {title:string, data:PaginatedDocs<Blog>}) => {
    return(
        <section key={32232131} className="bg-primary flex flex-col lg:flex-row w-full h-auto items-center justify-center my-8 gap-10">
            <h3 className="text-center text-4xl font-Aeros flex-[0.5_1_0%]">{title}</h3>
            {/* Contenido del blog */}
            <div className="bg-secondary py-5 px-4 text-white rounded-lg flex-1 flex flex-col justify-center items-center">
                <h4 className={`${amiko.className} text-center text-2xl font-bold`}>ÚLTIMOS ARTÍCULOS</h4>
                <section className="flex flex-col gap-4 text-white px-10 py-3 w-full">
                    {
                     data.docs.map(article => {
                        let slugTitle = article.title.replace(/\s+/g, '-').toLowerCase()
                        return (
                            <Link href={{
                                pathname: `/blog/${slugTitle}`,
                                query: {id: article.id}
                            }}>
                                <article className={`${amiko.className} w-full text-white text-lg text-left hover:translate-x-2 transition-all cursor-pointer`}>
                                    <h5 className=" font-normal">{article.title}</h5>
                                </article>
                            </Link>
                        )
                     })   
                    }
                </section>
                <a href="/blog" className="w-full flex justify-center items-center">
                    <button className={`rounded-full bg-primary text-secondary ${actor.className} px-3 py-2 w-[25%] lg:w-[15%] hover:border-primary hover:border hover:shadow-primary hover:shadow-sm hover:text-white transition-all hover:scale-105 hover:bg-secondary`}>VER MÁS</button>
                </a>
            </div>
        </section>
    )
}


export default SectionBlock;