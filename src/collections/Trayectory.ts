import { CollectionConfig } from "payload";

const Trayectory: CollectionConfig = {
    slug: 'trayectory',
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
            name: 'description',
            type: 'textarea',
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

export default Trayectory;