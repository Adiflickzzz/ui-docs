import Link from "next/link";

export default function Home() {
  return (
    <main className="h-screen flex flex-col text-center justify-center">
      <h1 className="text-2xl font-bold mb-4">Landing page</h1>
      <p>
        You can open{" "}
        <Link href="/docs" className="font-semibold underline">
          /docs
        </Link>{" "}
        and see the documentation.
      </p>
    </main>
  );
}
