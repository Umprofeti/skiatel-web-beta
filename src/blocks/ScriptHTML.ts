import { Block } from "payload";

export const ScriptHTML:Block = {
    slug: 'script-html',
    interfaceName: 'script',
    fields: [
        {
            type: 'textarea',
            name: 'ScriptHTML',
            required: true
        }
    ]
}