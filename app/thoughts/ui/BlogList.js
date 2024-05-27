"use client";
import { useRouter } from "next/navigation";
import { useLoading } from "@/utils/hooks/LoadingContext";
import Image from "next/image";
import Link from "next/link";

import styles from "../Insights.module.css";

export default function BlogList({ blogs }) {
  const router = useRouter();
  const { setLoading } = useLoading();

  const handleClick = (e) => {
    setLoading(true);
    e.preventDefault();

    let link = e.currentTarget.getAttribute("href");

    setTimeout(() => {
      router.push(link);
    }, 1000);
  };

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

  const date = new Date(blogs[0].date);
  const latestDate = `${date.getDate()} ${
    month[date.getMonth()]
  } ${date.getFullYear()}`;

  return (
    <section className={styles.stories}>
      <Link
        href={`thoughts/${blogs[0].slug.current}`}
        className={styles.latest}
        onClick={handleClick}
        style={{
          background: `url(${blogs[0].cardimage.asset?.url}) center center no-repeat`,
          backgroundSize: "cover",
        }}
      >
        <div className={styles.overlay}></div>
        <h2 className={styles.latestHeading}>Latest Insight</h2>

        <div className={styles.row}>
          <p className={styles.date}>{latestDate}</p>
          <p className={styles.excerpt}>{blogs[0].excerpt}</p>
          <h3 className={styles.blogTitle}>{blogs[0].title}</h3>
        </div>
        <div className={styles.row}>
          <h3 className={styles.blogTitle}>{blogs[0].title}</h3>
          <p className={styles.excerpt}>{blogs[0].excerpt}</p>
          <div className={`${styles.blogLink} readMore`}>
            Read insight
            <div className="icon">
              <Image
                src="/images/arrow-white-r.svg"
                alt="Arrow icon"
                width={40}
                height={40}
              />
            </div>
          </div>
        </div>
      </Link>
      {blogs &&
        blogs.slice(1).map((blog) => {
          const dateObj = new Date(blog.date);
          const dateString = `${dateObj.getDate()} ${
            month[dateObj.getMonth()]
          } ${dateObj.getFullYear()}`;

          return (
            <Link
              key={blog._id}
              href={`/thoughts/${blog.slug.current}`}
              className={styles.singleBlog}
              onClick={handleClick}
              style={{
                background: `url(${blog.cardimage.asset?.url}) center center no-repeat`,
                backgroundSize: "cover",
              }}
            >
              <div className={styles.overlay}></div>
              <div>
                <p className={styles.date}>{dateString}</p>
                <h3 className={styles.blogTitle}>{blog.postTitle}</h3>
              </div>
              <div>
                <p className={styles.blogExcerpt}>{blog.excerpt}</p>
                <div className={`${styles.blogLink} readMore`}>
                  Read insight
                  <div className="icon">
                    <Image
                      src="/images/arrow-white-r.svg"
                      alt="Arrow icon"
                      width={40}
                      height={40}
                    />
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
    </section>
  );
}
