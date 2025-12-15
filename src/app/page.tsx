export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-black text-white px-6">
      <h1 className="text-4xl md:text-6xl font-bold text-center">
        Welcome to <span className="text-purple-500">RKPulse</span>
      </h1>

      <p className="text-lg md:text-xl text-gray-300 mt-4 text-center max-w-2xl">
        Bangladesh’s first artist-led global music & live streaming platform.
        Built from scratch by Rubel Khandokar.
      </p>

      <div className="mt-8 flex gap-4">
        <a
          href="#"
          className="bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded-lg text-lg font-semibold"
        >
          Start Listening
        </a>

        <a
          href="#"
          className="border border-gray-500 hover:border-white px-6 py-3 rounded-lg text-lg font-semibold"
        >
          Creator Login
        </a>
      </div>

      <footer className="mt-16 text-gray-500 text-sm">
        © {new Date().getFullYear()} RKPulse — Built by Rubel Khandokar
      </footer>
    </main>
  );
}
