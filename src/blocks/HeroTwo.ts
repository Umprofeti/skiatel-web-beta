import { Block } from "payload/types";

const HeroTwo: Block = {
    slug: 'heroTwo',
    interfaceName: 'Hero',
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
            type: 'upload',
            relationTo: 'media',
            name: 'Phtoto',
            required: true
        },
    ]
}

export default HeroTwo;