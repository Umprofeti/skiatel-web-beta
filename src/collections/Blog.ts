import { CollectionConfig } from "payload/types";
import RichTextBlock from "../blocks/RichText";
import CodeBlock from "../blocks/CodeBlock";


const Blog: CollectionConfig = {
    slug: 'blog',
    admin: {
        useAsTitle: 'title'
    },
    access: {
        read: () => true,
        update: () => true,
        delete: () => true,
        create: () => true
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
            ]
        },
        {
            type: 'upload',
            relationTo: 'media',
            name: 'Thumbnail',
            admin: {
                position: 'sidebar'
            }
        },
        {
            type: 'textarea',
            name: 'Excerpt',
            maxLength: 55,
            admin: {
                position: 'sidebar'
            }
        }
    ]
}

export default Blog;