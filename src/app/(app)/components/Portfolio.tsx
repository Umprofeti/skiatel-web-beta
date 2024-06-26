import { PaginatedDocs } from "payload";
import type { Portfolio } from "@/payload-types";
import React from "react";
import { CarruselSkew } from "./carruselBlocks/CarruselSkew";

const Portfolio = ({data, title}: {data: PaginatedDocs<Portfolio>, title:string}) => {
    let CarruselImages = data.docs.map(item => {
        return item.image
    })

    let item = {
        TitleCarrusel: '',
        CarruselImages
    }
    
    return (
        <section key={Math.random()}  className="bg-primary flex flex-col my-6 justify-center items-center">
            <h5 className=" font-Aeros text-4xl text-center text-black">{title}</h5>
            <CarruselSkew item={item} />
        </section>
    )
}

export default Portfolio;