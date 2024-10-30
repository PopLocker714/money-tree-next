import { Metadata } from "next";
import Link from "next/link";
export const metadata: Metadata = {
  title: "Dashboard",
  description: "",
};

export default function Dashboard() {
  return (
    <div>
      <h1>Dashboard</h1>
      <Link href="..">Home</Link>
    </div>
  );
}
