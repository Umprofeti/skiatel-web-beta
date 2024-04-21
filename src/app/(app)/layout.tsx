import './globals.css'
import { getPayload } from 'payload'
import configPromise from "@payload-config";
import {WebConfig} from './types/globals'

const payload = await getPayload({ config: configPromise })

const data = await payload.findGlobal({
  slug: 'webConfig',
  depth: 2,
})

console.log()
export const metadata = {
  title: data.title,
  description: data.description,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <header>
          <h1>{data.title}</h1>
        </header>
        <main>
        {children}
        </main>
        <footer>
        </footer>
      </body>
    </html>
  )
}
