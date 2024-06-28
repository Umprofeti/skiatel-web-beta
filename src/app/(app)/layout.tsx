import './globals.css'
import { getPayloadHMR } from '@payloadcms/next/utilities'
import configPromise from "@payload-config";
import "bootstrap-icons/font/bootstrap-icons.css"
import { Amiko } from 'next/font/google';
import type { Metadata } from 'next';
import { WithContext, WebSite } from 'schema-dts';
import Script from 'next/script';

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

export const metadata:Metadata = {
  title: data.title,
  description: data.description,
  icons: {
    icon: '/favicon.ico'
  },
  alternates: {
    canonical: 'https://www.skiatel.com/'
  },
  metadataBase: new URL('https://www.skiatel.com/'),
  openGraph: {
    title: 'Skiatel Web',
    type: 'website',
    description: 'Web Personal de Jonathan Rodríguez',
    url: 'https://www.skiatel.com/',
    images: [
      {
        url: `${data.Logo.url}`,
        alt: 'Logo Skiatel Web'
      }
    ],
    locale: 'es_ES',
  },
  twitter: {
    title: 'Skiatel Web',
    description: 'Web Personal de Jonathan Rodríguez',
    images: [
      {
        url: `${data.Logo.url}`,
        alt: 'Logo Skiatel Web'
      }
    ]
  }
}

const jsonLd:WithContext<WebSite> = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  mainEntity: [
    {
      "@type": "WebPage",
      "@id": "https://www.skiatel.com/"
    },
  ],
  headline: "Skiatel Web",
  image: [
    `${data.Logo.url}`
  ],
  datePublished: "2024-06-15",
  author: {
    "@type": "Person",
    name: "Jonathan Rodríguez"
  },
  description: "Web Personal de Jonathan Rodríguez"
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Script
        id='website-schema'
        type='application/ld+json'
        dangerouslySetInnerHTML={
          {__html: JSON.stringify(jsonLd)}
        }
      />
      <body className='bg-primary'>
        <header className='!z-50 relative'>
           {/* Mobile */}
           <h1 className='hidden'>SKIATEL</h1>
           <MobileHeader props={data}/>
            {/* Desktop */}
            <DesktopHeader props={data}/>
        </header>
        <main className=' selection:bg-black selection:text-primary'>
        <SmoothScroll>
        {children}
        </SmoothScroll>
        </main>
        <footer className='bg-secondary py-4 px-3 flex flex-col lg:flex-row items-center text-white justify-center lg:justify-between gap-6 mt-6 selection:bg-black selection:text-primary'>
          {/* SocialMedia */}
          <div className='flex flex-row gap-2 w-[33%] px-8 justify-center'>
            {
              data.SocialLinks.map(social => {
                return (
                  <a key={social.id} href={social.url} className='text-primary text-4xl hover:scale-110 transition-all flex flex-col gap-3 justify-center items-center'>
                    <i className={social.icon}></i>
                    <span className='text-sm'>{social.title}</span>
                  </a>
                )
              })
            }
          </div>
          <div className={`${amiko.className} tracking-[.05em] text-md text-center w-[33%]`}>
            COPYRIGHT - TODOS LOS DERECHOS RESERVADOS
          </div>
          {/* Contact Info */}
          <div className='w-[33%] text-white text-xl flex flex-row gap-2 justify-center lg:justify-end'>
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
