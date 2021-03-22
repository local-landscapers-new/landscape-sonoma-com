import { getSinglePost, getPosts } from "../../lib/posts";
import Layout from "../../components/layout"

const PostPage = (props) => {
  return (
    <Layout>
      <h1 className="postPage">{props.post.title}</h1>
      <img className="postPage" src={props.post.feature_image} />
      
      <div className="postPage" dangerouslySetInnerHTML={{ __html: props.post.html }} />
    </Layout>
  );
};

export default PostPage;

export async function getStaticPaths() {
  const posts = await getPosts();

  // Get the paths we want to create based on posts
  const paths = posts.map((post) => ({
    params: { slug: post.slug },
  }));

  return { paths, fallback: false };
}

// Pass the page slug over to the "getSinglePost" function
// In turn passing it to the posts.read() to query the Ghost Content API
export async function getStaticProps(context) {
  const post = await getSinglePost(context.params.slug);

  if (!post) {
    return {
      notFound: true,
    };
  }

  return {
    props: { post },
    revalidate: 1000,
  };
}
