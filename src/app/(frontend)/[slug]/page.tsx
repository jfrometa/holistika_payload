import '@/scss/main.scss';

import type { Metadata } from 'next';
import { draftMode } from 'next/headers';
import { getPayload } from 'payload';
import React, { cache, Suspense } from 'react';
 
import { RenderBlocks } from '@/blocks/RenderBlocks';
import { PayloadRedirects } from '@/components/PayloadRedirects';
import { RenderHero } from '@/heros/RenderHero';
import type { Page as PageType } from '@/payload-types';
import Blogs from '@/ui/common/Blogs';
import About from '@/ui/homes/index-international-consulting/About';
import Facts from '@/ui/homes/index-international-consulting/Facts';
import Portfolio from '@/ui/homes/index-international-consulting/Portfolio';
import Service from '@/ui/homes/index-international-consulting/Service';
// import VideoOverlay from '@/ui/video/video_overlay';
import { generateMeta } from '@/utilities/generateMeta';
import configPromise from '@payload-config';

import PageClient from './page.client';
import VideoOverlay from '../components/video/background_video_slider';


interface PageParams {
  params: Promise<{
    slug?: string;
  }>;
}

export async function generateStaticParams() {
  const payload = await getPayload({ config: configPromise });
  const pages = await payload.find({
    collection: 'pages',
    draft: false,
    limit: 1000,
    overrideAccess: false,
    pagination: false,
    select: {
      slug: true,
    },
  });

  const params = pages.docs
    ?.filter(doc => {
      return doc.slug !== 'home';
    })
    .map(({ slug }) => {
      return { slug };
    });

  return params;
}

type Args = {
  params: Promise<{
    slug?: string;
  }>;
};

const videosData = [
  {
    brandName: 'CoolBrand 1',
    title: 'Promo Video #1',
    src: '/video/v1/assets/2g5tJ8oxsy15AphfCJTM8EBdQraev2OgZ3zIbr6YTFc',
    id: 'LaeaLHpLAXpXLOB01m0201NwSDbALTtQbW01kGVpIXHGa3I',
  },
  {
    brandName: 'CoolBrand 2',
    title: 'Promo Video #2',
    src: '/video/v1/assets/9aLXpmwq3A013ElaDBJns2qF1Y5kHmxAUwEPseZ923HA',
    id: '00pDGKVRzHZ5mxa00yyq7D00jspTOHnvuGVamPsys9GBCQ',
  },
  {
    brandName: 'CoolBrand 3',
    title: 'Promo Video #3',
    src: '/video/v1/assets/fBimU02lESFmgzsfsOHbWEHwk4omvQ0000h01WOnena8Hlo',
    id: '6o01v900YFXEamsii02BCIhH4Zb2eaYRkKoS01VUf00p01ncw',
  },
];

const rootPage = (
  <>
    <div className="splash-wrapper scrollSpyLinks">
      {/* <Topbar /> */}
      {/* <Header2
        btnClass="btn-default btn-small "
        parentClass="rainbow-header header-default header-left-align header-transparent header-sticky"
      /> */}

      <div>
        <div className="rainbow-gradient-circle"></div>
        <div className="rainbow-gradient-circle theme-pink"></div>
      </div>

      <div className="relative w-full h-screen ">
           <VideoOverlay videos={videosData} />
      </div>

      <Service />
      <About />
      <Facts />
      <Portfolio />

      <div className="rbt-separator-mid">
        <div className="container">
          <hr className="rbt-separator m-0" />
        </div>
      </div>

      {/* <Pricing /> */}

      <div className="rbt-separator-mid">
        <div className="container">
          <hr className="rbt-separator m-0" />
        </div>
      </div>

      <Blogs />
    </div>
  </>
);

export default async function Page({ params: paramsPromise }: Args) {
  const { slug = 'home' } = await paramsPromise;
  const url = '/' + slug;

  let page: PageType | null;

  page = await queryPageBySlug({
    slug,
  });

  // // Remove this code once your website is seeded
  if (page && slug === 'home') {
    return  rootPage 
    
  }

  if (page && slug === 'portfolio') {
    return (
      <div>
        <Portfolio />
      </div>
    );
  }

  if (!page) {
    return <PayloadRedirects url={url} />;
  }

  const { hero, layout } = page;

  return (
    <article className="pt-16 pb-24">
      <PageClient />
      {/* Allows redirects for valid pages too */}
      <PayloadRedirects disableNotFound url={url} />

      <RenderHero {...hero} />
      <RenderBlocks blocks={layout} />
    </article>
  );
}

export async function generateMetadata({ params: paramsPromise }: PageParams): Promise<Metadata> {
  const { slug = 'home' } = await paramsPromise;

  const page = await queryPageBySlug({
    slug,
  });

  return generateMeta({ doc: page });
}

const queryPageBySlug = cache(async ({ slug }: { slug: string }) => {
  const { isEnabled: draft } = await draftMode();

  const payload = await getPayload({ config: configPromise });

  const result = await payload.find({
    collection: 'pages',
    draft,
    limit: 1,
    pagination: false,
    overrideAccess: draft,
    where: {
      slug: {
        equals: slug,
      },
    },
  });

  return result.docs?.[0] || null;
});
