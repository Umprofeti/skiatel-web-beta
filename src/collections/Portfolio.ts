import { CollectionConfig } from "payload/types";

const Portfolio: CollectionConfig = {
    slug: 'portfolio',
    access: {
        create: () => true,
        read: () => true,
        update: () => true,
        delete: () => true
    },
    fields: [
        {
            name: 'title',
            type: 'text',
            required: true
        },
        {
            name: 'image',
            type: 'upload',
            relationTo: 'media',
            required: true
        }
    ]
}

export default Portfolio;