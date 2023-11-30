"use client";
import { useLoading } from "@/utils/hooks/LoadingContext";
import styles from "@/styles/BlogSingle.module.css";
import Image from "next/image";
import Link from "next/link";

export default function BlogContent({ blog }) {
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

  const { setLoading } = useLoading();
  setTimeout(() => {
    setLoading(false);
  }, 1000);
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
        {blog.projectLink && (
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
        )}
      </div>
    </div>
  );
}
