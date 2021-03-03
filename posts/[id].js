import Layout from '../../components/layout'
import { getAllPostIds, getPostData } from '../../lib/posts'
import Head from 'next/head'
import Date from '../../components/date'
import Image from 'next/image'
import '../article.module.css'

export default function Post({ postData }) {
  return (
    <Layout>
      <Head>

        <title>{postData.title}</title>
      </Head>
      <article>

      <div className="bg-gradient-to-b
                      from-indigo-700
                      to-indigo-500
                          h-68
                          pb-4
                         ">
            <Image
                src={postData.featurePhoto}
                layout="responsive"
                width={2000}
                height={1500}
                /> 

            <h2 className="
                       header-font tracking-tight text-center text-6xl text-white font-black
                       mt-10 mb-4
                       ">
              {postData.title}
            </h2>
            <h3 className="
            header-font tracking-tight text-center text-2xl text-white font-black italic
            mb-10
            ">{postData.latinName}</h3>
             
          </div> 

          <div className="my-10 p-4 flex flex-col items-center"> 
          
        
        <div id="blog-post" className="mx-auto" dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
        </div>
        <div className="text-gray-700 text-center
                            italic tracking-tight
                            my-4">
          <span>Published on <Date dateString={postData.date} /></span>
        </div>
      </article>

    </Layout>
  )
}

export async function getStaticPaths() {
  const paths = getAllPostIds()
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id)
  return {
    props: {
      postData
    }
  }
}
