import React from "react";
export const SinglePost = async (id) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const data = await res.json();
  return data;
};

const PostsDetailsPage = async ({ params }) => {
  const { id } = await params;
  const data = await SinglePost(Number(id));
  if (!data || Object.keys(data).length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-base-200">
        <h4 className="text-xl font-semibold text-red-600">No Data Found !!</h4>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-base-200">
      <div className="card w-full max-w-3xl shadow-xl p-6 bg-base-100 rounded-xl">
        <h2 className="text-2xl font-bold mb-4 text-primary">{data.title}</h2>
        <p className="text-gray-700 mb-2">{data.body}</p>
        <p className="mt-4 text-sm text-gray-500">Post ID: {data.id}</p>
      </div>
    </div>
  );
};

export default PostsDetailsPage;
