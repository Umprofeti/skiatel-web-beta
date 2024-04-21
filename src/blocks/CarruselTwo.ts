import { Block } from "payload/types";

const CarruselTwo: Block = {
    slug: 'carruselTwo',
    interfaceName: 'CarruselImages',
    fields: [
        {
            type: 'text',
            name: 'TitleCarrusel',
            required: true,
        },
        {
            type: 'relationship',
            relationTo: 'media',
            name: 'CarruselImages',
            required: true
        }
    ]
}

export default CarruselTwo;