import { Block } from "payload/types";


const CarruselThree: Block = {
    slug: 'carruselThree',
    interfaceName: 'CarruselTrayectory',
    fields: [
        {
            type: 'text',
            name: 'TitleCarrusel',
            required: true,
        },
        {
            type: 'relationship',
            relationTo: 'trayectory',
            name: 'TrayectoryPost',
            required: true,
            hasMany: true
        }
    ]
}

export default CarruselThree;