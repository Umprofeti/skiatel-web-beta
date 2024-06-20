import './globals.css'
import { getPayloadHMR } from '@payloadcms/next/utilities'
import configPromise from "@payload-config";
import "bootstrap-icons/font/bootstrap-icons.css"
import { Amiko } from 'next/font/google';

/* Components */
import { DesktopHeader } from './components/DesktopHeader';
import { MobileHeader } from './components/MobileHeader';
import SmoothScroll from './components/SmoothScroll';

const amiko = Amiko({subsets: ["latin"], weight: ["600", "400", "700"]})
const payload = await getPayloadHMR({ config: configPromise })

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
        <main className=' selection:bg-black selection:text-primary'>
          <SmoothScroll>
            {children}
          </SmoothScroll>
        </main>
        <footer className='bg-secondary py-4 px-3 flex flex-row items-center text-white justify-between gap-6 mt-6 selection:bg-black selection:text-primary'>
          {/* SocialMedia */}
          <div className='flex flex-row gap-2 w-[33%] px-8'>
            {
              data.SocialLinks.map(social => {
                return (
                  <a key={social.id} href={social.url} className='text-primary text-4xl hover:scale-110 transition-all'>
                    <i className={social.icon}></i>
                  </a>
                )
              })
            }
          </div>
          <div className={`${amiko.className} tracking-[.05em] text-md text-center w-[33%]`}>
            COPYRIGHT - TODOS LOS DERECHOS RESERVADOS
          </div>
          {/* Contact Info */}
          <div className='w-[33%] text-white text-xl flex flex-row gap-2 justify-end'>
              <i className='bi bi-envelope'></i>
              {
                data.Email
              }
          </div>
        </footer>
      </body>
    </html>
  )
}
