import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "",
};

export default async function Dashboard({ params }: { params: { id: string } }) {
  const { id } = await params

  return (
    <div>
      <h1>Product {id}</h1>
      <Link href="..">Home</Link>
    </div>
  );
}
