import { CollectionConfig } from "payload/types";
import FormBlock from "../blocks/FormBlock";
import Hero from "../blocks/Hero";
import CarruselBlock from "../blocks/CarruselBlock";
import BlogReference from "../blocks/BlogReference";
import PortfolioReference from "../blocks/PortfolioReference";

const Pages:CollectionConfig = {
    slug: 'pages',
    admin: {
        useAsTitle: 'title'
    },
    access: {
        read: () => true,
        update: () => true,
        delete: () => true,
        create: () => true
    },
    fields: [
        {
            type: 'text',
            name: 'title',
            required: true
        },
        {
            type: 'blocks',
            name: 'Layout',
            blocks: [ Hero, CarruselBlock, BlogReference, PortfolioReference]
        }
    ]

}

export default Pages;