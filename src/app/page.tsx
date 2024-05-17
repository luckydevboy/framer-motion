"use client";

import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col gap-y-4 h-screen bg-slate-600 p-6">
      <Link
        href="/multi-step-wizard"
        className="font-medium hover:underline text-white"
      >
        Multi Step Wizard Component
      </Link>
      <Link href="/parallax" className="font-medium hover:underline text-white">
        Parallax
      </Link>
    </div>
  );
}
