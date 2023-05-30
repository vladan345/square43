import { useRouter } from "next/router";
import { useLoading } from "../../utils/hooks/LoadingContext";
import { GraphQLClient, gql } from "graphql-request";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";

import styles from "../../styles/Insights.module.css";

const client = new GraphQLClient(process.env.NEXT_PUBLIC_HYGRAPH_URL);

function Blog({ blogs }) {
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

  const date = new Date(blogs[0].blogDate);
  const latestDate = `${date.getDate()} ${
    month[date.getMonth()]
  } ${date.getFullYear()}`;

  const router = useRouter();
  const { setLoading } = useLoading();
  const handleClick = (e) => {
    setLoading(true);
    e.preventDefault();
    let link = e.currentTarget.attributes[2].value;
    setTimeout(() => {
      router.push(link);
    }, 1000);
  };

  return (
    <>
      <Head>
        <title>Square43 Studio | Memos</title>
        <meta
          name="description"
          content=" Think of this as our status updates."
        />

        <meta name="title" content="Square43 Studio - Memos" />

        <meta property="og:url" content="https://square43.com/memos" />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://square43.com/images/About.png"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="square43.com" />
        <meta property="twitter:url" content="https://square43.com/memos" />
        <meta name="twitter:title" content="Square43 Studio - Memos" />
        <meta
          name="twitter:description"
          content=" Think of this as our status updates."
        />
        <meta
          name="twitter:image"
          content="https://square43.com/images/About.png"
        />
      </Head>
      <div className={styles.Stories}>
        <div className={styles.wrapper}>
          <h1
            style={{
              animation: `fadeInRight 1s forwards ease-in-out`,
              opacity: 0,
            }}
            className={styles.title}
          >
            Taking notes
          </h1>
          <p className={styles.subheading}>
            Think of this as our status updates.
          </p>

          <section className={styles.stories}>
            <Link
              href={`memos/${blogs[0].slug}`}
              className={styles.latest}
              style={{
                background: `url(${blogs[0].featuredImage.url}) center center no-repeat`,
                backgroundSize: "cover",
              }}
            >
              <div className={styles.overlay}></div>
              <h2 className={styles.latestHeading}>Latest Insight</h2>

              <div className={styles.row}>
                <p className={styles.date}>{latestDate}</p>
                <p className={styles.excerpt}>{blogs[0].excerpt}</p>
                <h3 className={styles.blogTitle}>{blogs[0].postTitle}</h3>
              </div>
              <div className={styles.row}>
                <h3 className={styles.blogTitle}>{blogs[0].postTitle}</h3>
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
                const dateObj = new Date(blog.blogDate);
                const dateString = `${dateObj.getDate()} ${
                  month[dateObj.getMonth()]
                } ${dateObj.getFullYear()}`;

                return (
                  <Link
                    key={blog.id}
                    href={`/memos/${blog.slug}`}
                    className={styles.singleBlog}
                    onClick={handleClick}
                    style={{
                      background: `url(${blog.featuredImage.url}) center center no-repeat`,
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
        </div>
      </div>
    </>
  );
}

export default Blog;

export const getStaticProps = async () => {
  const query = gql`
    query Blogs {
      blogs(orderBy: createdAt_DESC) {
        excerpt
        blogDate
        featuredImage {
          url
        }
        id
        postTitle
        slug
      }
    }
  `;
  const data = await client.request(query);

  return {
    props: { blogs: data.blogs },
    revalidate: 60 * 60,
  };
};
