// import { usePathname } from "next/navigation";
import Aside from "./components/Aside/Aside";

export default async function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div className="container">
        <div className="row">
          <Aside />
          <main className="col-md-9">{children}</main>
        </div>
      </div>
    </>
  );
}
