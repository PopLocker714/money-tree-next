import Link from "next/link";

export default function NavLink({ text, href }: { text: string; href: string }) {
  return (
    <Link className="link" href={href}>
      {text}
    </Link>
  );
}
