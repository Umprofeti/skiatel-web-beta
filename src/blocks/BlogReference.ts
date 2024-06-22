import {Block } from "payload";


const BlogReference:Block = {
    slug: 'blogReference',
    interfaceName: 'BlogReference',
    fields: [
        {
            type: 'text',
            name: 'Title',
            required: true
        },
        {
            type: 'select',
            name: 'TitlePosition',
            options: [
                'left',
                'right'
            ],
        }
    ]
}

export default BlogReference;