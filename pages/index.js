import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import Link from 'next/link'
import Image from 'next/image'
import Prismic from "prismic-javascript";
import { RichText } from "prismic-reactjs";
import { client } from "../prismic-configuration";
import Line from '../components/Line'
import HeroBlock from '../components/HeroBlock'
import IntroBlock from '../components/IntroBlock'
import ServicesBlock from '../components/ServicesBlock'
import TestimonialsBlock from '../components/TestimonialsBlock'
import AboutBlock from '../components/AboutBlock'

export default function Home(props) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <HeroBlock />
      <Line />
      <IntroBlock />
      <ServicesBlock />
      <Line />
      <section id="portfolio" class="p-5 m-2 text-center container mx-auto max-w-5xl">
      
        <h2 class="text-4xl sm:text-6xl uppercase font-bold tracking-wider py-2 my-2">Our Portfolio</h2>
      <div className="mx-auto">
        <ul>
          {props.posts.results.map((post) => (
            <Link href="posts/[id]" as={`/posts/${post.uid}`}>
            <li key={post.uid}>
            <img src={post.data.heroimage.url} />
              {RichText.render(post.data.title)}
            </li> 
            
            </Link>
          ))}
        </ul>
      </div>
    </section>
    <Line />
    <TestimonialsBlock />
    <AboutBlock />
    </Layout>
  )
}



export async function getStaticProps() {
  const posts = await client.query(
    Prismic.Predicates.at("document.type", "post"),
    { orderings: "[my.post.date desc]" }
  )
  return {
    props: {
      posts,
    },
  }
}
