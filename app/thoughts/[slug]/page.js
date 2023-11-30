import { GraphQLClient, gql } from "graphql-request";

import Head from "next/head";
import BlogContent from "./ui/BlogContent";

const client = new GraphQLClient(process.env.NEXT_PUBLIC_HYGRAPH_URL);

export default async function Blog({ params }) {
  const slug = params.slug;

  const query = gql`
    query Blogs($slug: String!) {
      blog(where: { slug: $slug }) {
        excerpt
        blogDate
        postTitle
        id
        previewImage {
          url
        }
        blogContent {
          html
        }
        projectLink
      }
    }
  `;

  const { blog } = await client.request(query, { slug });

  return (
    <>
      <Head>
        <title>{blog?.postTitle}</title>

        <meta name="description" content={blog?.excerpt} />

        <meta name="title" content={blog?.postTitle} />

        {/* <meta property="og:url" content={blog?.meta.link} /> */}
        <meta property="og:type" content="website" />
        <meta property="og:image" content={blog?.previewImage?.url} />

        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="square43.com" />
        {/* <meta property="twitter:url" content={blog?.meta.link} /> */}
        <meta name="twitter:title" content={blog?.postTitle} />
        <meta name="twitter:description" content={blog?.excerpt} />
        <meta name="twitter:image" content={blog?.previewImage?.url} />
      </Head>

      <BlogContent blog={blog} />
    </>
  );
}
