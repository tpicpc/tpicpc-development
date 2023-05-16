import { groq } from "next-sanity";
import OtherHeroSection from "../../../components/OtherHeroSection";
import { previewData } from "next/headers";
import { client } from "../../../lib/sanity.client";
import PreviewSuspense from "../../../components/PreviewSuspense";
import BlogList from "../../../components/BlogList";

export const metadata = {
  title: 'Blogs | TPI - Computer Programming Club',
};

const query = groq`
*[_type == "post"]{
  ...,
  author->,
  categories[]->,
  }| order(_createdAt desc)
  `;

export const revalidate = 30; // revalidate this page every 30 seconds

export default async function page() {
  if (previewData()) {
    return (
      <PreviewSuspense
        fallback={
          <div role={"status"}>
            <p className={"text-center text-2xl font-bold text-gray-500"}>
              Loading Preview Data...
            </p>
          </div>
        }
      ></PreviewSuspense>
    );
  }

  const posts = await client.fetch(query);
  return (
    <>
      <div >
        <OtherHeroSection title="Blogs" />
        <BlogList posts={posts} />
      </div>
    </>
  );
}
