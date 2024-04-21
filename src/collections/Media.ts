import { CollectionConfig } from "payload/types";

const Media: CollectionConfig = {
    slug:'media',
    access: {
        read: ()=> true,
        update: ()=> true,
        delete: ()=> true,
        create: ()=> true
    },
    upload:{
        staticDir: 'media',
        //disableLocalStorage: true,
        adminThumbnail: 'thumbnail',
        mimeTypes: ['image/*']
    },
    fields: []

}

export default Media