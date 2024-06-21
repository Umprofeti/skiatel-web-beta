import { Block } from "payload/types";

const HeroTwo: Block = {
    slug: 'heroTwo',
    interfaceName: 'HeroTwo',
    fields: [
        {
            type: 'text',
            name: 'title',
            required: true
        },
        {
            type: 'textarea',
            name: 'Content',
            required: true
        },
        {
            type: 'relationship',
            relationTo: 'media',
            name: 'Photo',
            required: true,
            hasMany: false
        },
    ]
}

export default HeroTwo;