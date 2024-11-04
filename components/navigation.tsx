"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

export default function Navigation() {
  const path = usePathname();
  return (
    <nav>
      <ul>
        <li>
          <Link href="/">Home {path === "/" && "🔥"}</Link>
        </li>
        <li>
          <Link href="/about-us">About Us {path === "/about-us" && "🔥"}</Link>
        </li>
      </ul>
    </nav>
  );
}
