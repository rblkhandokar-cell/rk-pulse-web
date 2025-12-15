"use client";

import { signOut } from "firebase/auth";
import { auth } from "@/lib/firebase";
import { useRouter } from "next/navigation";

export default function LogoutPage() {
  const router = useRouter();

  const handleLogout = async () => {
    await signOut(auth);
    router.push("/login");
  };

  return (
    <div className="p-10">
      <button
        onClick={handleLogout}
        className="bg-red-600 px-6 py-3 rounded font-bold"
      >
        Logout
      </button>
    </div>
  );
}