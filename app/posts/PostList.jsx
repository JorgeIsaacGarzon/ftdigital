const fetchPosts = () =>
  fetch("https://jsonplaceholder.typicode.com/posts").then((resp) =>
    resp.json()
  );

export async function PostList() {
  const posts = await fetchPosts();

  return posts.map((post) => (
    <article
      key={post.id}
      className="bg-slate-100 w-full rounded-md p-2 shadow-sm"
    >
      <h2 className=" font-bold">{post.title}</h2>
      <p className=" text-sm">{post.body}</p>
    </article>
  ));
}
