import { useRouter } from "next/router";
import { useLoading } from "../../utils/hooks/LoadingContext";
import { GraphQLClient, gql } from "graphql-request";
import Image from "next/image";
import Link from "next/link";

import styles from "../../styles/Stories.module.css";

const client = new GraphQLClient(process.env.NEXT_PUBLIC_HYGRAPH_URL);

function Blog({ blogs }) {
  const router = useRouter();
  const { setLoading } = useLoading();
  const handleClick = (e) => {
    setLoading(true);
    e.preventDefault();
    let link = e.currentTarget.attributes[0].value;
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
          Stories
        </h1>
        <p className={styles.subheading}></p>

        <section className={styles.stories}>
          {blogs &&
            blogs.map((blog) => (
              <Link
                key={blog.id}
                className={styles.singleBlog}
                href={`/stories/${blog.slug}`}
                onClick={handleClick}
              >
                <div className={styles.featuredImage}>
                  <Image
                    src={blog.featuredImage.url}
                    alt={blog.postTitle}
                    fill
                  />
                </div>
                <h3 className={styles.blogTitle}>{blog.postTitle}</h3>
                <p className={styles.blogExcerpt}>{blog.excerpt}</p>
                <div className="readMore">
                  Read story
                  <div className="icon">
                    <Image
                      src="/images/arrow.svg"
                      alt="Arrow icon"
                      width={40}
                      height={40}
                    />
                  </div>
                </div>
              </Link>
            ))}
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
