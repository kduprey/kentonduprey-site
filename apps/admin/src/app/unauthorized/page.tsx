"use client";

import { useAuth } from "@clerk/nextjs";
import { useEffect } from "react";

const Page = () => {
  const { signOut } = useAuth();

  // After 5 seconds, sign out the user
  useEffect(() => {
    const timeout = setTimeout(() => {
      signOut().catch(console.error);
    }, 3000);

    return () => {
      clearTimeout(timeout);
    };
  });

  return (
    <div className="flex h-dvh items-center justify-center">
      <div className="text-center">
        <h1 className="font-semibold text-3xl">Unauthorized</h1>
        <p>You are not authorized to view this page.</p>
      </div>
    </div>
  );
};

export default Page;
