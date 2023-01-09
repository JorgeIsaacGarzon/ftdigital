import React from "react";
import { PAGE_NAVIGATION } from "./utils/links";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full bg-slate-100">
      <ul className="w-1/3 h-16 flex items-center justify-between m-auto font-bold uppercase">
        {PAGE_NAVIGATION.map((item) => (
          <li key={item.route} className=" hover:text-slate-400">
            <Link href={item.route}>{item.label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
