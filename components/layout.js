import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import Nav from './Nav'
import Logo from './Logo'
import HeroBlock from './HeroBlock'
import Line from './Line'
import IntroBlock from './IntroBlock'
import ServicesBlock from './ServicesBlock'
import TestimonialsBlock from './TestimonialsBlock'
import AboutBlock from './AboutBlock'
import Footer from './Footer'

export const siteTitle = 'Local Landscapers'

export default function Layout({ children, home }) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.svg" />
        <meta
          name="description"
          content="Landscape contractors in Sonoma, California."
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.zeit.co%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>


      <div className="body-font antialiased text-lg text-black bg-gray-300">

      <Logo />
      <Nav />

      {home ? (
      <>
      <HeroBlock />
      

      <Line />
      <IntroBlock />
      <ServicesBlock />
      <Line />

      <section id="portfolio" class="p-5 m-2 text-center container mx-auto max-w-5xl">
      
        <h2 class="text-4xl sm:text-6xl uppercase font-bold tracking-wider py-2 my-2">Our Portfolio</h2>


        <div class="sm:grid sm:grid-cols-2">

          {children}

        </div>

        <div class="m-4">
          <div class="bg-gray-900 rounded-sm strong-shadow p-2">
            <p class="text-xl py-2 my-2">
              <a class="text-gray-300" href="#">See more of our favorite projects</a>
            </p>

            
          </div>
        </div>

      </section>

      <Line />
      <TestimonialsBlock />
      <AboutBlock />

      </>
      ) : null }
      
      

      {!home && (
        <div className="p-5">
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </div>
      )}

    <Footer />

    </div>
    </>
  )
}
