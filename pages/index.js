import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import Link from "next/link";
import Image from "next/image";
import { getPosts } from "../lib/posts";
import Line from "../components/Line";
import HeroBlock from "../components/HeroBlock";
import IntroBlock from "../components/IntroBlock";
import ServicesBlock from "../components/ServicesBlock";
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
        <section
          id="portfolio"
          className="p-5 m-2 text-center container mx-auto"
        >
          <h2 className="text-4xl sm:text-6xl uppercase font-bold tracking-wider py-2 my-2">
            Our Portfolio
          </h2>
          <div className="md:grid md:grid-cols-2">
            {props.posts.map((post) => (
              <div
                className="bg-gray-900 rounded-md strong-shadow m-4 p-2 img__wrap inline-block"
                key={post.id}
              >
                <Link href={`/posts/${post.slug}`}>
                  <a>
                    <img src={post.feature_image} className="w-7/8 h-7/8" />
                    <p class="img__description font-light italic text-2xl sm:text-4xl text-center tracking-wider text-gray-50">
                      {post.title}
                    </p>
                  </a>
                </Link>
              </div>
            ))}
          </div>

          <div class="m-4">
            <div class="bg-gray-900 rounded-md strong-shadow p-2">
              <p class="text-xl py-2 my-2">
                <a class="text-gray-300" href="#">
                  See more of our favorite projects
                </a>
              </p>
            </div>
          </div>
        </section>
        <Line />
        <TestimonialsBlock />
        <Line />
        <AboutBlock />
        <Line />
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
