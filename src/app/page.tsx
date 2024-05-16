"use client";

import Link from "next/link";

export default function Home() {
  return (
    <>
      <Link href="/multi-step-wizard" className="text-white font-medium">
        Multi Step Wizard Component
      </Link>
    </>
  );
}
