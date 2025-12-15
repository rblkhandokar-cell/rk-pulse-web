"use client";

import { useEffect, useState } from "react";
import { onAuthStateChanged, User } from "firebase/auth";
import { auth } from "@/lib/firebase";
import { useRouter } from "next/navigation";

export default function DashboardPage() {
  const router = useRouter();
  const [user, setUser] = useState<User | null>(null);
  const [checking, setChecking] = useState(true);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (u) => {
      if (!u) {
        router.push("/login");
      } else {
        setUser(u);
      }
      setChecking(false);
    });

    return () => unsub();
  }, [router]);

  if (checking) {
    return <div className="p-10">Checking session...</div>;
  }

  if (!user) {
    return null;
  }

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold mb-4">Dashboard</h1>
      <p className="text-zinc-300 mb-4">Logged in as: {user.email}</p>
      <a
        href="/logout"
        className="inline-block px-4 py-2 rounded bg-red-600 hover:bg-red-500 font-semibold"
      >
        Logout
      </a>
    </div>
  );
}