import React from "react";
import PageLayout from "../../components/PageLayout";
import Post from "../../components/Post";

export default function Posts({ posts }) {
  return (
    <PageLayout titlePage="Posts">
      <h1 className=" text-center font-bold uppercase my-4 text-lg">
        Posts from API
      </h1>

      <div className="w-full flex flex-col gap-5 px-12 overflow-hidden">
        {posts.slice(0, 5)?.map((post) => (
          <Post post={post} key={post.id} />
        ))}
      </div>
    </PageLayout>
  );
}

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await response.json();
  return {
    props: {
      posts,
    },
  };
}
