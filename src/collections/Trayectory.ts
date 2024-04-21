import { CollectionConfig } from "payload/types";

const Trayectory: CollectionConfig = {
    slug: 'trayectory',
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