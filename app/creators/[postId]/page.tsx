import Link from "next/link";
import { getPostData, getSortedPostsData } from "@/lib/creators";
import { notFound } from "next/navigation";
import getFormattedDate from "@/lib/getFormattedDate";

export function generateStaticParams() {
  const posts = getSortedPostsData();

  return posts.map((post) => ({
    postId: post.id,
  }));
}

export function generateMetadata({ params }: { params: { postId: string } }) {
  const posts = getSortedPostsData();
  const { postId } = params;

  const post = posts.find((post) => post.id === postId);

  if (!post) {
    return {
      title: "Not Found",
    };
  }

  return {
    title: post.title,
  };
}

export default async function PostsPage({
  params,
}: {
  params: { postId: string };
}) {
  const posts = getSortedPostsData();
  const { postId } = params;

  if (!posts.find((post) => post.id === postId)) {
    return notFound();
  }

  const { title, contentHtml } = await getPostData(postId);

  //const formattedDate = getFormattedDate(date);

  return (
    <main className="px-6 prose prose-xl prose-slate dark:prose-invert mx-auto">
      <h1 className="text-3xl mt-4 mb-0">{title}</h1>
      {/*  <p className="mt-0">{formattedDate}</p> */}
      <article>
        <section dangerouslySetInnerHTML={{ __html: contentHtml }} />
      </article>
      <Link href="/">::arrow_backward:</Link>
    </main>
  );
}
