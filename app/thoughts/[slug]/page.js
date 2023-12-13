import { GraphQLClient, gql } from "graphql-request";

import BlogContent from "./ui/BlogContent";

const client = new GraphQLClient(process.env.NEXT_PUBLIC_HYGRAPH_URL);

export async function generateMetadata({ params }, parent) {
  // read route params
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
  return {
    openGraph: {
      title: blog.postTitle,
      description: blog.excerpt,
      images: [{ url: blog.previewImage.url }],
      url: `https://square43.com/thoughts/${slug}`,
    },
    title: blog.postTitle,
    description: blog.excerpt,
    metadataBase: new URL(`https://square43.com/thoughts/${slug}`),
  };
}

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
      <BlogContent blog={blog} />
    </>
  );
}
