'use client';
import { useState } from 'react';

export default function NewPost() {
  const [category, setCategory] = useState('');
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = () => {
    const slug = title.toLowerCase().replace(/\s+/g, '-');
    console.log(
      `Category: ${category}, Slug: ${slug}, Title: ${title}, Content: ${content}`
    );
  };

  return (
    <div className="max-w-xl mx-auto mt-10">
      <h1 className="text-2xl font-bold mb-4">새 글 작성</h1>
      <input
        className="border p-2 w-full"
        placeholder="카테고리"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      />
      <input
        className="border p-2 w-full mt-2"
        placeholder="제목 입력"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        className="border p-2 w-full mt-4"
        rows={6}
        placeholder="본문 입력"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <button
        onClick={handleSubmit}
        className="bg-blue-600 text-white px-4 py-2 mt-4"
      >
        게시하기
      </button>
    </div>
  );
}
