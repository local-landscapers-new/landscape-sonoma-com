import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import Link from "next/link";
import Image from "next/image";
import { getPosts } from "../lib/posts";

export default function PortfolioBlock(props) {
  return (
    <section id="portfolio" className="p-5 m-2 text-center container mx-auto">
      <h2 className="text-4xl sm:text-6xl uppercase font-bold tracking-wider py-2 my-2">
        Our Portfolio
      </h2>

      <div classname="flex flex-row">
        {props.posts.map((post) => (
          <div className="bg-gray-900 rounded-md strong-shadow m-4 p-2 flex flex-col items-center img__wrap max-w-md">
            <Link href={`/posts/${post.slug}`}>
              <a>
                <img
                  src={post.feature_image}
                  className="img__img w-7/8 h-7/8"
                />
                <p class="block h-full img__description font-light italic text-2xl sm:text-4xl text-center tracking-wider text-gray-50">
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
