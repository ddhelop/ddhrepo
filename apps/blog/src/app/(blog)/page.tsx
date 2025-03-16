import Link from 'next/link';
import { PostItem } from '@/entities/post/ui/PostItem';

const posts = [
  {
    category: 'nextjs',
    slug: '14-update',
    title: 'Next.js 14 Update',
    date: '2025-03-20',
  },
  {
    category: 'react',
    slug: 'hooks-guide',
    title: 'React Hooks Guide',
    date: '2025-03-22',
  },
];

export default function BlogHome() {
  return (
    <div className="max-w-2xl mx-auto mt-10">
      <h1 className="text-3xl font-bold mb-6">📝 Blog Posts</h1>
      {posts.map((post) => (
        <PostItem key={post.slug} post={post} />
      ))}
    </div>
  );
}
