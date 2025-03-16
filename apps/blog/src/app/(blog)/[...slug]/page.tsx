import { notFound } from 'next/navigation';

const posts = {
  'nextjs/14-update': {
    title: 'Next.js 14 Update',
    date: '2025-03-20',
    content: 'Next.js 14의 새로운 기능!',
  },
  'react/hooks-guide': {
    title: 'React Hooks Guide',
    date: '2025-03-22',
    content: 'React Hooks의 기초와 활용법',
  },
};

export default function BlogPost({ params }: { params: { slug: string[] } }) {
  const slugPath = params.slug.join('/');
  const post = posts[slugPath as keyof typeof posts];

  if (!post) notFound();

  return (
    <div className="prose mx-auto mt-10">
      <h1>{post.title}</h1>
      <p className="text-gray-500">{post.date}</p>
      <p>{post.content}</p>
    </div>
  );
}
