import { getSortedPostsData } from "@/lib/creators";
import ListItem from "./ListItem";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Creators",
};

export default function Posts() {
  const posts = getSortedPostsData();

  return (
    <section className="mt-6 mx-auto max-w-2xl flex flex-col items-center">
      <h2 className="text-blue text-4xl font-bold pb-6">
        Content creators I follow:
      </h2>
      <ul className="w-full">
        {posts.map((post) => (
          <ListItem key={post.id} post={post} />
        ))}
      </ul>
    </section>
  );
}
