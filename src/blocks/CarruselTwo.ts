import { Block } from "payload";

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
            required: true,
            hasMany: true
        }
    ]
}

export default CarruselTwo;