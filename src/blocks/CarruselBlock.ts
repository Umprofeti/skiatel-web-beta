import { Block } from "payload";
import HeroTwo from "./HeroTwo";
import CarruselTwo from "./CarruselTwo";
import CarruselThree from "./CarruselThree";



const CarruselBlock: Block = {
    slug: 'carrusel',
    interfaceName: 'Carrusel',
    fields: [
        {
            type: 'blocks',
            name: 'CarruselWrapper',
            required: true,
            blocks: [HeroTwo, CarruselTwo, CarruselThree]
        }
    ]
}

export default CarruselBlock