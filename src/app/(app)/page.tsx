import React from "react";
import './globals.css'
import { getPayload } from 'payload'
import configPromise from "@payload-config";

import CarruselWrapper from "./components/CarruselWrapper";
import { HeroBlock } from "./components/HeroBlock";


const payload = await getPayload({ config: configPromise })

const data = await payload.find({
    collection: 'pages',
    depth: 2,
    limit: 1,
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
                        </section>
                    )
                })
            }
        </div>
    );
}

export default Page

