"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function CustomLink({ path, children, className }) {
  const pathName = usePathname();
  const isActive = pathName === path ;

  return (
    <Link href={path} className={isActive ? "p-2 decoration-[#c9a96e] text-[#c9a96e]" : "nav-link"}>
      {children}
    </Link>
  );
}