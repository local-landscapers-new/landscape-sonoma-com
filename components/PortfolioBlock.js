import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import Link from "next/link";
import Image from "next/image";
import Prismic from "prismic-javascript";
import { RichText } from "prismic-reactjs";
import { client } from "../prismic-configuration";

export default function PortfolioBlock(props) {
  return (
    <section
      id="portfolio"
      class="p-5 m-2 text-center container mx-auto max-w-5xl"
    >
      <h2 class="text-4xl sm:text-6xl uppercase font-bold tracking-wider py-2 my-2">
        Our Portfolio
      </h2>

      <div className="max-w-2xl mx-auto">
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
  );
}
