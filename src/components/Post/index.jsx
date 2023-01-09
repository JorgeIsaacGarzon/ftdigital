import React from "react";

export default function Post({ post }) {
  return (
    <article className="text-sm bg-gray-700 p-4 rounded-md shadow-md">
      <div className="w-full mb-2">
        <h2 className="font-bold p-1">{post.title}</h2>
        <hr />
      </div>
      <p className="text-xs">{post.body}</p>
    </article>
  );
}
