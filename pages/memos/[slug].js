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
      const video = document.querySelector(".video video");

      video.muted = true;
    }, 1000);
  }, []);

  const month = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const date = new Date(blog.blogDate);
  const latestDate = `${date.getDate()} ${
    month[date.getMonth()]
  } ${date.getFullYear()}`;

  return (
    <div className={styles.Blog + " container"}>
      <img
        className={styles.featuredImage}
        src={blog.featuredImage.url}
        width={400}
        height={400}
        alt="featured Image"
      />
      <div className={styles.wrapper}>
        <span className={styles.date}>{latestDate}</span>
        <h1
          style={{
            animation: `fadeInRight 1s forwards ease-in-out`,
            opacity: 0,
          }}
          className={styles.title}
        >
          {blog.postTitle}
        </h1>
        <p className={styles.excerpt}>{blog.excerpt}</p>
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
