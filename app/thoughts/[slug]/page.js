import { getBlog } from "@/utils/data/getData";

import BlogContent from "./ui/BlogContent";

export async function generateMetadata({ params }, parent) {
  // read route params
  const slug = params.slug;

  const blog = await getBlog(slug);
  return {
    openGraph: {
      title: blog.title,
      description: blog.excerpt,
      images: [{ url: blog.heroimage.asset.url }],
      url: `https://square43.com/thoughts/${slug.current}`,
    },
    title: blog.title,
    description: blog.excerpt,
    metadataBase: new URL(`https://square43.com/`),
  };
}

export default async function Blog({ params }) {
  const slug = params.slug;
  const blog = await getBlog(slug);
  return (
    <>
      <BlogContent blog={blog} />
    </>
  );
}
