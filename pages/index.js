import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import Link from "next/link";
import Image from "next/image";
import { getPosts } from "../lib/posts";
import Line from "../components/Line";
import HeroBlock from "../components/HeroBlock";
import IntroBlock from "../components/IntroBlock";
import ServicesBlock from "../components/ServicesBlock";
import Portfolio from './portfolio';
import TestimonialsBlock from "../components/TestimonialsBlock";
import AboutBlock from "../components/AboutBlock";
import ContactBlock from "../components/ContactBlock";

export default function Home(props) {
  return (
    <>
      <Layout home>
        <Head>
          <title>{siteTitle}</title>
        </Head>
        <HeroBlock />
        <IntroBlock />
        <ServicesBlock />
        <Line />
       <section>
  <ul>
    {props.posts.map((post) => (
      <li key={post.id}>
        <Link href={`/posts/${post.slug}`}>
          <a>
            {post.title}
          </a>
        </Link>
      </li>
    ))}
  </ul>
       </section>
        <Line />
        <TestimonialsBlock />
        <AboutBlock />
        <ContactBlock />
      </Layout>
    </>
  );
}


export async function getStaticProps(context) {
  const posts = await getPosts();

  if (!posts) {
    return {
      notFound: true,
    };
  }

  return {
    props: { posts },
    revalidate: 10,
  };
}