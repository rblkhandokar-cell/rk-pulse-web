export default function Home() {
  return (
    <div className="p-10">
      <h1 className="text-6xl font-bold text-purple-500 mb-8">RKPulse Live Streaming 🎵</h1>
      <p className="text-2xl text-gray-300 mb-12">Your cross-platform music & video app is now live!</p>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
          <div key={i} className="bg-gray-800 rounded-xl p-6 hover:bg-gray-700 cursor-pointer transition">
            <div className="w-full h-64 bg-gray-700 rounded-lg mb-4 flex items-center justify-center text-4xl text-red-500">
              LIVE {i}
            </div>
            <p className="text-xl font-bold">Live Stream {i}</p>
            <p className="text-gray-400">100+ viewers watching</p>
          </div>
        ))}
      </div>
    </div>
  );
}