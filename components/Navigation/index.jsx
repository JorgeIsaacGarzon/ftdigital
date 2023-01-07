import React from "react";
import Link from "next/link";
import { LINKS } from "./links";

export default function Navigation() {
  return (
    <header className="w-full">
      <nav className=" w-1/2 m-auto bg-green-300">
        <ul className="flex items-center justify-between my-2">
          {LINKS.map(({ label, route }) => (
            <li key={route} className="text-center">
              <Link href={route}>{label}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
