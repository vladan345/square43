import { useState, useEffect } from "react";
import Image from "next/image";
import { GraphQLClient, gql } from "graphql-request";
import styles from "../../styles/BlogSingle.module.css";
import { useLoading } from "../../utils/hooks/LoadingContext";

const client = new GraphQLClient(process.env.NEXT_PUBLIC_HYGRAPH_URL);

export default function Blog({ blog }) {
  const { setLoading } = useLoading();
  setTimeout(() => {
    setLoading(false);
  }, 1000);
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
        src={blog.previewImage.url}
        width={620}
        height={620}
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
        <a
          href={blog.projectLink}
          className={`readMore ${styles.liveProject}`}
          target="_blank"
        >
          View project
          <div className="icon">
            <Image
              src="/images/arrow.svg"
              alt="Arrow icon"
              width={40}
              height={40}
            />
          </div>
        </a>
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
