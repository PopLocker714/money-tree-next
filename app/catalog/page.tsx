import { Metadata } from "next";
import Link from "next/link";
export const metadata: Metadata = {
  title: "Каталог",
  description: "",
};

export default function Dashboard() {
  return (
    <section className="container">
      <h1>Каталог</h1>
      <Link href="..">Домой</Link>
    </section>
  );
}
