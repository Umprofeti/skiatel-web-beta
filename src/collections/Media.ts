import { CollectionConfig } from "payload";

const Media: CollectionConfig = {
    slug:'media',
    access: {
        read: ()=> true,
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