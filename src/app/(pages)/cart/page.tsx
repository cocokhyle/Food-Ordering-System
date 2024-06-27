import Link from "next/link";

export default function Cart() {
  return (
    <main>
      <div className="h-[50rem]">
        <h1>This is Cart!</h1>
        <Link href="/">Click this button</Link>
      </div>
    </main>
  );
}
