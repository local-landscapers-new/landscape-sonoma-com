import { getPosts } from "../lib/posts";
import Link from "next/link";
import Layout from "../components/layout";

const Portfolio = (props) => (
  <Layout>
    <section id="portfolio" className="p-5 m-2 text-center container mx-auto">
      <h2 className="text-4xl sm:text-6xl uppercase font-bold tracking-wider py-2 my-2">
        Our Portfolio
      </h2>
      <div className="md:grid md:grid-cols-2">
        {props.posts.map((post) => (
          <div
            className="bg-gray-900 rounded-sm strong-shadow m-4 p-2 img__wrap inline-block"
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
    </section>
  </Layout>
);

export default Portfolio;

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
