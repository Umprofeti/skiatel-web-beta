import { mongooseAdapter } from '@payloadcms/db-mongodb'
// import { payloadCloud } from '@payloadcms/plugin-cloud'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
//import {s3Adapter} from '@payloadcms/plugin-cloud-storage/s3'
//import formBuilder from '@payloadcms/plugin-form-builder'
//import { cloudStorage } from '@payloadcms/plugin-cloud-storage'
import path from 'path'
import { buildConfig } from 'payload'
import sharp from 'sharp'
import { fileURLToPath } from 'url'

import Users from './collections/Users'
import Media from './collections/Media'
import Blog from './collections/Blog'
import Pages from './collections/Pages'
import Trayectory from './collections/Trayectory'
import WebConfig from './globals/WebConfig'
import Portfolio from './collections/Portfolio'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

/* 
TODO: Habilitar cuando esté disponible el plugin en la versión 3.0
const minioAdapter = s3Adapter({
  acl: 'private',
  config:{
    endpoint: process.env.MINIO_ENDPOINT,
    credentials:{
      accessKeyId: `${process.env.MINIO_ACCESS_KEY}`,
      secretAccessKey: `${process.env.MINIO_SECRET_KEY}`
    },
    forcePathStyle: true,
    region: process.env.MINIO_REGION,
  },
  bucket: `${process.env.MINIO_BUCKET}`
}) */

export default buildConfig({
  admin: {
    user: Users.slug,
  },
  collections: [Users, Media, Blog, Pages, Trayectory, Portfolio],
  globals: [WebConfig],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: mongooseAdapter({
    url: process.env.DATABASE_URI || '',
  }),
  sharp,
  plugins: [
    // storage-adapter-placeholder
  ],
})
