import { Block } from "payload/types";

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
            required: true,
        }
    ]
}

export default Hero;