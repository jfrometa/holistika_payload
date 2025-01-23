'use client'
import React, { useEffect } from 'react'

import { useHeaderTheme } from '@/providers/HeaderTheme'

const PageClient: React.FC = () => {
  /* Force the header to be dark mode while we have an image behind it */
  const { setHeaderTheme } = useHeaderTheme()

  useEffect(() => {
    setHeaderTheme('light')
  }, [setHeaderTheme])
  return <React.Fragment />
}

export default PageClient




// function PageClient ({ page, slug, url, VideoContent })  {
//   /* Force the header to be dark mode while we have an image behind it */
//   const { setHeaderTheme } = useHeaderTheme()

//   useEffect(() => {
//     setHeaderTheme('light')
//   }, [setHeaderTheme])

//   const [error, setError] = useState(null);
//   const [isLoading, setIsLoading] = useState(true);

//   useEffect(() => {
//     try {
//       setIsLoading(false);
//     } catch (err) {
//       console.error('Error in PageContent:', err);
//       setError(err);
//       setIsLoading(false);
//     }
//   }, []);

//   if (error) {
//     return <div>Error loading content: {error}</div>;
//   }

//   if (isLoading) {
//     return <div>Loading...</div>;
//   }

//   <React.Fragment>
//   {error && <div>Error: {error}</div>}
  
//   {isLoading && <div>Loading...</div>}

//   {!error && !isLoading && page && slug === 'home' && (
//     <div className="splash-wrapper scrollSpyLinks">
//       <div>
//         <div className="rainbow-gradient-circle"></div>
//         <div className="rainbow-gradient-circle theme-pink"></div>
//       </div>

//       <div className="relative w-full h-screen overflow-hidden">
//         <VideoContent />
//       </div>

//       <Service />
//       <About />
//       <Facts />
//       <Portfolio />
      
//       <div className="rbt-separator-mid">
//         <div className="container">
//           <hr className="rbt-separator m-0" />
//         </div>
//       </div>

//       <div className="rbt-separator-mid">
//         <div className="container">
//           <hr className="rbt-separator m-0" />
//         </div>
//       </div>

//       <Blogs />
//     </div>
//   )}

//   {!error && !isLoading && page && slug === 'portfolio' && (
//     <div>
//       <Portfolio />
//     </div>
//   )}

//   {!error && !isLoading && !page && <PayloadRedirects url={url} />}

//   {!error && !isLoading && page && slug !== 'home' && slug !== 'portfolio' && (
//     <article className="pt-16 pb-24">
//       <PayloadRedirects disableNotFound url={url} />
//       <RenderHero {...page.hero} />
//       <RenderBlocks blocks={page.layout} />
//     </article>
//   )}
// </React.Fragment>
// }

// export default PageClient


