import Image from "next/image";
import Product from "./(pages)/products/page";

export default function Home() {
  return (
    <main className="">
      <div className="p-5">
        <Product />
      </div>
    </main>
  );
}
