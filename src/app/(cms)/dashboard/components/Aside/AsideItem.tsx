import Link from "next/link";
import React from "react";

interface IAsideItemProps {
  href: string;
  currentPath: string;
  children: React.ReactNode;
  subChildren?: React.ReactNode;
}

export default function AsideItem({ href, children, currentPath, subChildren }: IAsideItemProps) {
  const isActive = currentPath === href;
  return (
    <li className="nav-item">
      <Link className={`nav-link flex ${isActive ? "active" : ""}`} aria-current="page" href={href}>
        {children}
      </Link>

      {<ul className="ml-8 nav flex-column nav-pills">{subChildren}</ul>}
    </li>
  );
}
