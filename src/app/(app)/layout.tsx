import './globals.css'
import { getPayload } from 'payload'
import configPromise from "@payload-config";
import {WebConfig} from './types/globals'

/* Components */
import { DesktopHeader } from './components/DesktopHeader';
import { MobileHeader } from './components/MobileHeader';

const payload = await getPayload({ config: configPromise })

const data = await payload.findGlobal({
  slug: 'webConfig',
  depth: 2,
})

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
      <body className='bg-primary'>
        <header className='mb-[7rem] !z-50 relative'>
           {/* Mobile */}
           <MobileHeader props={data}/>
            {/* Desktop */}
            <DesktopHeader props={data}/>
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
