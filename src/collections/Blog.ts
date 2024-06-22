import { CollectionConfig } from "payload";
import RichTextBlock from "../blocks/RichText";
import CodeBlock from "../blocks/CodeBlock";


const Blog: CollectionConfig = {
    slug: 'blog',
    admin: {
        useAsTitle: 'title'
    },
    access: {
        read: () => true,
    },
    fields: [
        {
            type: 'text',
            name: 'title',
            required: true
        },
        {
            type: 'blocks',
            name: 'Layout',
            blocks: [
                RichTextBlock,
                CodeBlock
            ],
            required:true
        },
        {
            type: 'upload',
            relationTo: 'media',
            name: 'Thumbnail',
            admin: {
                position: 'sidebar'
            },
            required:true
        },
        {
            type: 'textarea',
            name: 'Excerpt',
            maxLength: 55,
            admin: {
                position: 'sidebar'
            },
            required:true
        }
    ]
}

export default Blog;