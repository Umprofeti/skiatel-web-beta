import React from 'react'
import './globals.css'
import { getPayload } from 'payload'
import configPromise from '@payload-config'

import CarruselWrapper from './components/CarruselWrapper'
import { HeroBlock } from './components/HeroBlock'
import SectionBlock from './components/SectionBlog'
import Portfolio from './components/Portfolio'
import type { Page } from '@/payload-types'

export const revalidate = 10


export default async function Page() {
  const payload = await getPayload({ config: configPromise })

  const dataConfig = await payload.findGlobal({
    slug: 'webConfig',
    depth: 2,
  })

  const data = await payload.find({
    collection: 'pages',
    depth: 2,
    limit: 2,
    where: {
      id: {
        equals: dataConfig.IdDeLaPaginaDeInicio,
      },
    },
  })

  const dataPosts = await payload.find({
    collection: 'blog',
  })

  const dataPortfolio = await payload.find({
    collection: 'portfolio',
  })

  return (
    <div className="mt-[6rem] lg:mt-[9rem]">
      {data.docs !== undefined &&
        data.docs[0].Layout.map((item) => {
          switch (item.blockType) {
            case 'hero':
              return (
                <section key={item.id}>
                  <HeroBlock key={item.id} item={item} />
                </section>
              )
            case 'carrusel':
              return (
                <section key={item.id}>
                  <CarruselWrapper key={item.id} data={item.CarruselWrapper} />
                </section>
              )
            case 'blogReference':
              return (
                <section key={item.id}>
                  <SectionBlock key={item.id} title={item.Title} data={dataPosts} />
                </section>
              )
            case 'portfolioReference':
              return (
                <section key={item.id}>
                  <Portfolio key={item.id} data={dataPortfolio} title={item.Title} />
                </section>
              )
            default:
              return null
          }
        })}
    </div>
  )
}
