"use client";

import { Button } from "@/components/ui/button";
import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="max-w-wrapper mx-auto py-12 min-h-[800px] h-screen -mt-24 pt-30">
      <div className="flex flex-col items-center justify-center h-full">
        <h2 className="font-bold text-3xl mb-4">Something went wrong!</h2>
        <Button onClick={() => reset()}>Try again</Button>
      </div>
    </div>
  );
}
