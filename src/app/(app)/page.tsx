import React from "react";
import './globals.css'
import { getPayloadHMR } from '@payloadcms/next/utilities'
import configPromise from "@payload-config";

import CarruselWrapper from "./components/CarruselWrapper";
import { HeroBlock } from "./components/HeroBlock";
import SectionBlock from "./components/SectionBlog";
import Portfolio from "./components/Portfolio";


const payload = await getPayloadHMR({ config: configPromise })

const data = await payload.find({
    collection: 'pages',
    depth: 2,
    limit: 1,
})

const dataPosts = await payload.find({
    collection: 'blog'
})

const dataPortfolio = await payload.find({
    collection: 'portfolio'
})

const Page = () => {
    return (
        <div className="mt-[9rem]">
            {
                data.docs[0].Layout.map(item => {
                    
                    return (
                        <section key={item.id}>
                            {
                                item.blockType  === 'hero' ?
                                    <HeroBlock key={item.id} item={item}/>    
                                : null
                            }
                            {
                                item.CarruselWrapper && <CarruselWrapper data={item.CarruselWrapper}/> 
                            }
                            {
                                item.blockType === 'blogReference'?
                                <SectionBlock title={item.Title} data={dataPosts}/>
                                :null
                            }
                            {
                                item.blockType === 'portfolioReference' ? 
                                <Portfolio key={item.id} data={dataPortfolio} title={item.Title}/>
                                :null
                            }
                        </section>
                    )
                })
            }
        </div>
    );
}

export default Page

