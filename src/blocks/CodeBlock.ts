import { Block } from "payload/types";

const CodeBlock: Block = {
    slug: 'CodeBlock',
    interfaceName: 'BloqueDeCodigo',
    fields: [
        {
            type: 'code',
            name: 'BloqueDeCodigo',
            required: true
        }
    ]


}

export default CodeBlock;