import { Block } from "payload/types";

const RichTextBlock:Block = {
    slug: 'parrafo',
    interfaceName: 'Parrafo',
    fields: [
        {
            type: 'richText',
            name: 'Parrafo',
            required: true
        }
    ]
}

export default RichTextBlock;