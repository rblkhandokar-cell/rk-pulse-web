import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "RKPulse Live Streaming",
  description: "Cross-platform music & video live streaming app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-950 text-white`}>
        <div className="flex h-screen">
          {/* Left Sidebar */}
          <aside className="w-64 bg-black p-6 flex flex-col">
            <h1 className="text-3xl font-bold text-purple-500 mb-10">RKPulse Live</h1>
            <nav className="space-y-4 flex-1">
              <a href="/" className="block text-lg hover:text-purple-400 transition">Home</a>
              <a href="/dashboard" className="block text-lg hover:text-purple-400 transition">Dashboard</a>
              <a href="/search" className="block text-lg hover:text-purple-400 transition">Search</a>
              <a href="/library" className="block text-lg hover:text-purple-400 transition">Library</a>
              <a href="/login" className="block text-lg hover:text-purple-400 transition">Login</a>
            </nav>
          </aside>

          {/* Main Content */}
          <main className="flex-1 overflow-y-auto pb-24">
            {children}
          </main>

          {/* Bottom Fixed Player Bar */}
          <footer className="fixed bottom-0 left-64 right-0 h-24 bg-black border-t border-gray-800 flex items-center justify-center gap-8">
            <button className="text-3xl hover:text-purple-400">←</button>
            <button className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center text-3xl hover:scale-110">▶</button>
            <button className="text-3xl hover:text-purple-400">→</button>
            <div className="text-center">
              <p className="font-bold text-xl">Live Streaming Now</p>
              <p className="text-sm text-gray-400">RKPulse Channel</p>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}