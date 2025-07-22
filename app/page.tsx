"use client";

import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="p-2 text-4xl">
      <h1>Hello there</h1>
      <Button
        variant={"link"}
        className="cursor-pointer"
        onClick={() => console.log("Button Clicked again")}
      >
        Click me
      </Button>
    </main>
  );
}
