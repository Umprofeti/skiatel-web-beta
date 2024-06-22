import { CollectionConfig } from "payload";

const Portfolio: CollectionConfig = {
    slug: 'portfolio',
    access: {
        read: () => true,
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