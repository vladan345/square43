import { useRouter } from "next/router";
import { useLoading } from "../../utils/hooks/LoadingContext";
import { GraphQLClient, gql } from "graphql-request";
import Image from "next/image";
import Link from "next/link";

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
    <div className={styles.Stories}>
      <div className={styles.wrapper}>
        <h1
          style={{
            animation: `fadeInRight 1s forwards ease-in-out`,
            opacity: 0,
          }}
          className={styles.title}
        >
          Lorem ipsum dolor
        </h1>
        <p className={styles.subheading}>
          Viverra blandit sed varius ante. Id diam ornare viverra diam nunc.
        </p>

        <section className={styles.stories}>
          <Link
            href={`insights/${blogs[0].slug}`}
            className={styles.latest}
            style={{
              background: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)) center center no-repeat, url(${blogs[0].featuredImage.url}) center center no-repeat`,
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
            <Image
              src={blogs[0].featuredImage.url}
              fill
              alt={blogs[0].postTitle}
            />
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
                  href={`/insights/${blog.slug}`}
                  className={styles.singleBlog}
                  onClick={handleClick}
                  style={{
                    background: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)) center center no-repeat, url(${blog.featuredImage.url}) center center no-repeat`,
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
  );
}

export default Blog;

export const getStaticProps = async () => {
  const query = gql`
    query Blogs {
      blogs {
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
