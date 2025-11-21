import Link from "next/link";
import React from "react";

export const FakeDataGet = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();
  return data;
};

const PostsPage = async () => {
  const posts = await FakeDataGet();

  if (posts.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-base-200">
        <p className="text-xl font-semibold text-gray-600">No Data Found</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-base-200 p-6 mt-16">
      <h1 className="text-3xl font-bold text-center mb-8 text-primary">
        All Posts
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((item) => (
          <div
            key={item.id}
            className="card bg-base-100 shadow-lg rounded-xl p-6 hover:shadow-2xl transition-shadow duration-300 flex flex-col justify-between"
          >
            <div>
              <h2 className="text-xl font-bold mb-2 text-primary">
                {item.title}
              </h2>
              <p className="text-gray-700 mb-4 text-sm">{item.body}</p>
            </div>
            <Link
              href={`/posts/${item.id}`}
              className="btn btn-info mt-auto self-start"
            >
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PostsPage;
