import { Block } from "payload";

const Hero:Block = {
    slug: 'hero',
    interfaceName: 'Hero',
    fields: [
        {
            type: 'text',
            name: 'title',
            required: true
        },
        {
            type: 'text',
            name: 'subtitle',
            required: true
        },
        {
            type: 'text',
            name: 'SplineAnimationLink',
            required: true
        },
        {
            type: 'checkbox',
            name: 'ShowCircleBackground',
        },
        {
            type: 'upload',
            name: 'SplineAnimationImage',
            relationTo: 'media',
            required: true
        }
    ]
}

export default Hero;