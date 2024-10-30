import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "",
};

// interface IParams {
//   params: {
//     id: string;
//   };
// }

export default async function Dashboard() {
//   const { id } = (await params).params;

  return (
    <div className="container">
      <h1>Product </h1>
      <Link href="..">Home</Link>
    </div>
  );
}
