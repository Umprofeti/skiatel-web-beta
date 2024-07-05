import { ScriptHTML } from "@/blocks/ScriptHTML";
import { GlobalConfig } from "payload";

const WebConfig: GlobalConfig = {
    slug: 'webConfig',
    access: {
        read: () => true
    },
    fields: [
        {
            name: 'Logo',
            type: 'upload',
            relationTo: 'media',
            required: true
        },
        {
            name: 'IdDeLaPaginaDeInicio',
            type: 'text',
            required: true
        },
        {
            type: 'array',
            name: 'NavBarLinks',
            fields: [
                {
                    type: 'text',
                    name: 'Section',
                    required: true
                },
                {
                    type: 'text',
                    name: 'idSection',
                    required: true
                }
            ]
        },
        {
            type: 'array',
            name: 'SocialLinks',
            required: true,
            fields: [
                {
                    type: 'text',
                    name: 'title',
                    required: true
                },
                {
                    type: 'text',
                    name: 'url',
                    required: true
                },
                {
                    type: 'text',
                    name: 'icon',
                    required: true
                }
            ]
        },
        {
            type: 'text',
            name: 'Email',
            required: true
        },
        {
            type:'row',
            fields: [
                {
                    name: 'title',
                    type: 'text',
                    required: true
                },
                {
                    name: 'description',
                    type: 'text',
                    required: true
                },
            ],
            admin: {
                position: 'sidebar'
            }
        },
        {
            type: 'blocks',
            name: 'ScriptsHeader',
            blocks: [ScriptHTML]
        },
        {
            type: 'blocks',
            name: 'ScriptsFooter',
            blocks: [ScriptHTML]
        }
    ]
}

export default WebConfig;