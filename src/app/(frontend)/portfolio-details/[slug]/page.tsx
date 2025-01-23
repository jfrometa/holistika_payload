import type { Metadata } from 'next';
import { draftMode } from 'next/headers';
import Image from 'next/image';
import { getPayload } from 'payload';
import React, { cache } from 'react';

import { RelatedPosts } from '@/blocks/RelatedPosts/Component';
import { PayloadRedirects } from '@/components/PayloadRedirects';
import RichText from '@/components/RichText';
import { PostHero } from '@/heros/PostHero';
import type { Post } from '@/payload-types';
import BreadCumb from '@/ui/portfolio/BreadCumb';
import { generateMeta } from '@/utilities/generateMeta';
import configPromise from '@payload-config';

import PageClient from './page.client';

export async function generateStaticParams() {
  const payload = await getPayload({ config: configPromise });
  const portfolioDetailsData = await payload.find({
    collection: 'portfolio-details',
    draft: false,
    limit: 1000,
    overrideAccess: false,
    pagination: false,
    select: {
      slug: true,
    },
  });

  const params = portfolioDetailsData.docs.map(({ slug }) => {
    return { slug };
  });

  return params;
}

type Args = {
  params: Promise<{
    slug?: string;
  }>;
};

// export function PortfolioDetails({ portfolioDetailsData }) {
export default async function PortfolioDetails({ params: paramsPromise }: Args) {
  const { slug = '' } = await paramsPromise;
  const url = '/portfolio-details/' + slug;
  const portfolioDetails = await queryPostBySlug({ slug });

  if (!portfolioDetails) return <PayloadRedirects url={url} />;

  return (
    <div className="rainbow-portfolio-details rainbow-section-gap">
      <div className="container">
        <BreadCumb title={portfolioDetails.title} />
        <div className="row">
          <div className="col-lg-12">
            <div
              className="section-title text-center mb--50"
              // data-sal="slide-up"
              // data-sal-duration={700}
              // data-sal-delay={100}
            >
              <h4 className="subtitle">
                <span className="theme-gradient">Portfolio Default</span>
              </h4>
              <h2 className="title w-600 mb--20">You can customize everything!</h2>
              <p className="description b1" />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-10 offset-lg-1">
            <div className="inner">
              <div className="details-list">
                <div className="thumbnail alignwide">
                  <Image
                    className="radius w-100"
                    alt="Corporate Image"
                    src="/assets/images/portfolio/portfolio-01.jpg"
                    width={1270}
                    height={950}
                  />
                </div>
                <div className="row mt--40 row--30">
                  <div className="col-lg-6">
                    <div className="content-left">
                      <h4 className="title">
                        {portfolioDetails.title ? portfolioDetails.title : 'App Development'}
                      </h4>
                      <div className="single-list-wrapper">
                        <div className="single-list">
                          <label>Date:</label>
                          <span>30 May {new Date().getFullYear()}</span>
                        </div>
                        <div className="single-list">
                          <label>Client:</label>
                          <span>Rainbow Themes</span>
                        </div>
                        <div className="single-list">
                          <label>Category:</label>
                          <span>development</span>
                        </div>
                      </div>
                      <div className="view-btn mt--50">
                        <a className="btn-default btn-large round" href="/portfolio">
                          Ver Proyectos
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 mt_md--30 mt_sm--30">
                    <div className="content-right">
                      <h5 className="subtitle">Branded client</h5>
                      <div className="description">
                        <p>{portfolioDetails.title}</p>
                        <br />
                        <p>
                          that are required by many components within an application. Context
                          provides a way to share values like these between components without
                          having to explicitly pass a prop through every level of the tree.
                        </p>
                        <br />
                        <p>
                          that are required by many components within an application. Context
                          provides a way to share values like these between components without
                          having to explicitly pass a prop through every level of the tree.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="portfolio-gallery mt--40">
                <div className="gallery mt--30">
                  <div className="thumbnail">
                    <Image
                      className="radius w-100"
                      alt="Corporate Image"
                      src="/assets/images/portfolio/portfolio-01.jpg"
                      width={1270}
                      height={950}
                    />
                  </div>
                </div>
                <div className="gallery mt--30">
                  <div className="thumbnail">
                    <Image
                      className="radius w-100"
                      alt="Corporate Image"
                      src="/assets/images/portfolio/portfolio-02.jpg"
                      width={1270}
                      height={950}
                    />
                  </div>
                </div>
                <div className="gallery mt--30">
                  <div className="thumbnail">
                    <Image
                      className="radius w-100"
                      alt="Corporate Image"
                      src="/assets/images/portfolio/portfolio-03.jpg"
                      width={1270}
                      height={950}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// export default async function Post({ params: paramsPromise }: Args) {
//   const { slug = '' } = await paramsPromise;
//   const url = '/portfolio-details/' + slug;
//   const portfolioDetails = await queryPostBySlug({ slug });

//   if (!portfolioDetails) return <PayloadRedirects url={url} />;

//   return (
//     <article className="pt-16 pb-16">
//       <PageClient />

//       {/* Allows redirects for valid pages too */}
//       <PayloadRedirects disableNotFound url={url} />

//       <PostHero post={portfolioDetails} />

//       <div className="flex flex-col items-center gap-4 pt-8">
//         <div className="container">
//           <RichText
//             className="max-w-[48rem] mx-auto"
//             content={portfolioDetails.content}
//             enableGutter={false}
//           />
//           {portfolioDetails.relatedPosts && portfolioDetails.relatedPosts.length > 0 && (
//             <RelatedPosts
//               className="mt-12 max-w-[52rem] lg:grid lg:grid-cols-subgrid col-start-1 col-span-3 grid-rows-[2fr]"
//               docs={portfolioDetails.relatedPosts.filter(post => typeof post === 'object')}
//             />
//           )}
//         </div>
//       </div>
//     </article>
//   );
// }

export async function generateMetadata({ params: paramsPromise }: Args): Promise<Metadata> {
  const { slug = '' } = await paramsPromise;
  const porfolioDetails = await queryPostBySlug({ slug });

  return generateMeta({ doc: porfolioDetails });
}

const queryPostBySlug = cache(async ({ slug }: { slug: string }) => {
  const { isEnabled: draft } = await draftMode();

  const payload = await getPayload({ config: configPromise });

  const result = await payload.find({
    collection: 'portfolio-details',
    draft,
    limit: 1,
    overrideAccess: draft,
    pagination: false,
    where: {
      slug: {
        equals: slug,
      },
    },
  });

  return result.docs?.[0] || null;
});
