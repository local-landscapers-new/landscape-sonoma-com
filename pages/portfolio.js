import { getPosts } from "../lib/posts";
import Link from "next/link";
import Layout from "../components/layout";

const Portfolio = (props) => (
  <Layout>
  <ul>
    {props.posts.map((post) => (
      <li key={post.id}>
        <Link href={`/posts/${post.slug}`}>
          <a>
          <img src={post.feature_image} />
          <h3>{post.title}</h3>
          </a>
        </Link>
      </li>
    ))}
  </ul>
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
