export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-indigo-500 via-purple-500 to-pink-500">
      
      <div className="text-center text-white px-6">

        <h1 className="text-8xl font-extrabold animate-pulse">404</h1>

        <div className="text-6xl mt-4 animate-bounce">🚀</div>

        <h2 className="text-2xl font-semibold mt-6">
          Oops! Page not found
        </h2>

        <p className="mt-2 text-white/80 max-w-md mx-auto">
          The page you are looking for doesn’t exist or has been moved.
        </p>

        <div className="mt-6">
          <a
            href="/"
            className="px-6 py-3 bg-white text-purple-600 font-semibold rounded-full shadow-lg hover:scale-105 transition duration-300"
          >
            Go Back Home
          </a>
        </div>

      </div>

    </div>
  );
}