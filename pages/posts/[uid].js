import { client } from "../../prismic-configuration"
import { RichText } from "prismic-reactjs"
import Prismic from "prismic-javascript"
import Layout from "../../components/layout"

export default function Post({ data }) {
  return (
    <Layout>
      <article>
        <header>{RichText.asText(data.title)}</header>
        <main>{RichText.asText(data.post_body)}</main>
      </article>
      </Layout>
  )
}

export async function getStaticProps({ params }) {
  const { uid } = params
  const { data } = await client.getByUID("post", uid)
  return {
    props: { data },
  }
}

export async function getStaticPaths() {
  const { results } = await client.query(
    Prismic.Predicates.at("document.type", "post")
  )

  const paths = results.map(post => ({
    params: {
      uid: post.uid,
    },
  }))
  return {
    paths,
    fallback: false,
  }
}
