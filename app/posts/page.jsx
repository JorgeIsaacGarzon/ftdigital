import { PostList } from "./PostList";

export default async function PostPage() {
  return (
    <section className="flex items-center justify-center gap-3 flex-col w-2/4 m-auto">
      <PostList />
    </section>
  );
}
