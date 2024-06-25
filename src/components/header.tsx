import Link from "next/link";

export default function Header() {
  const navLinks = [
    { name: "Home", href: "" },
    { name: "Products", href: "" },
    { name: "Orders", href: "" },
    { name: "Cart", href: "" },
  ];
  return (
    <main>
      <div className="bg-transparent pt-10 pl-20 pr-20 pb-10 flex justify-between">
        <div className=" flex-none">
          <h1>logo</h1>
        </div>

        <ul className="flex gap-5 text-lg font-bold">
          {navLinks.map((link, index) => (
            <li key={index}>
              <Link href={link.href}>{link.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
