export default function Home() {
  return (
    <div className="bg-linear-to-br from-blue-50 to-indigo-100 flex items-center justify-center px-6">
      <div className="text-center p-12 rounded-2xl ">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
          Welcome to Your Website 🚀
        </h1>

        <p className="text-lg text-gray-600 mb-8">
          This is a clean and modern homepage built with Tailwind CSS. You can
          customize it anytime. Enjoy building beautiful UI!
        </p>

        <div className="flex justify-center gap-4">
          <button className="btn btn-secondary">Get Started</button>

          <button className="btn btn-outline">Learn More</button>
        </div>
      </div>
    </div>
  );
}
