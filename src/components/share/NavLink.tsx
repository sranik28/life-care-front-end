"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Navlink = ({ href, children }: any) => {
  const pathname = usePathname();
  const isActive = pathname === href || href.startsWith(pathname + "/");

  return (
    <Link
      href={href}
      className={
        isActive && "active"
      }
    >
      {children}
    </Link>
  );
};

export default Navlink;