import { useState, useEffect } from "react";
import Image from "next/image";
import { GraphQLClient, gql } from "graphql-request";
import styles from "../../styles/BlogSingle.module.css";
import { useLoading } from "../../utils/hooks/LoadingContext";

const client = new GraphQLClient(process.env.NEXT_PUBLIC_HYGRAPH_URL);

export default function Blog({ blog }) {
  const { setLoading } = useLoading();

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <div className={styles.Blog + " container"}>
      <div className={styles.wrapper}>
        <Image
          src={blog.featuredImage.url}
          alt="blog 1 image"
          width={800}
          height={420}
        />
        <h1
          style={{
            animation: `fadeInRight 1s forwards ease-in-out`,
            opacity: 0,
          }}
          className={styles.title}
        >
          {blog.postTitle}
        </h1>
        <span className={styles.date}>{blog.blogDate}</span>
        <div
          className={styles.content}
          dangerouslySetInnerHTML={{ __html: blog.blogContent.html }}
        />
      </div>
    </div>
  );
}

export const getStaticProps = async ({ params }) => {
  const slug = params.slug;

  const query = gql`
    query Blogs($slug: String!) {
      blog(where: { slug: $slug }) {
        excerpt
        blogDate
        postTitle
        id
        featuredImage {
          url
        }
        blogContent {
          html
        }
      }
    }
  `;

  const data = await client.request(query, { slug });

  if (!data.blog) {
    return {
      notFound: true,
    };
  }

  return {
    props: { blog: { ...data.blog } },
    revalidate: 60 * 60,
  };
};

export const getStaticPaths = async () => {
  const query = gql`
    query Blogs {
      blogs {
        slug
      }
    }
  `;
  const data = await client.request(query);

  return {
    paths: data.blogs.map((blog) => ({ params: { slug: blog.slug } })),
    fallback: "blocking",
  };
};
