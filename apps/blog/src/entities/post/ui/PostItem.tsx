import Link from 'next/link';

export function PostItem({
  post,
}: {
  post: { category: string; slug: string; title: string; date: string };
}) {
  return (
    <div className="mb-4">
      <Link
        href={`/blog/${post.category}/${post.slug}`}
        className="text-xl font-semibold text-blue-600"
      >
        {post.title}
      </Link>
      <p className="text-gray-500">{post.date}</p>
    </div>
  );
}
