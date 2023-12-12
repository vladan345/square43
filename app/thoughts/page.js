import { GraphQLClient, gql } from "graphql-request";
import Head from "next/head";
import BlogList from "./ui/BlogList";
import styles from "./Insights.module.css";

const client = new GraphQLClient(process.env.NEXT_PUBLIC_HYGRAPH_URL);

export default async function Page() {
  async function getBlogs() {
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

    return data;
  }
  const { blogs } = await getBlogs();

  return (
    <>
      <Head>
        <title>Square43 Studio | Memos</title>
        <meta
          name="description"
          content=" Think of this as our status updates."
        />

        <meta name="title" content="Square43 Studio - Memos" />

        <meta property="og:url" content="https://square43.com/thoughts" />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://square43.com/images/About.png"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="square43.com" />
        <meta property="twitter:url" content="https://square43.com/thoughts" />
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
        </div>
        <BlogList blogs={blogs} />
      </div>
    </>
  );
}
