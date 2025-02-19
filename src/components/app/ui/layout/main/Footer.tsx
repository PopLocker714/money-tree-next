import Link from "next/link";
import Logo from "../../components/Logo";
import { conf } from "@/src/config/conf";

export default function Footer() {
  const config = conf()
  return (
    <footer className="container mx-auto flex-1 flex flex-col justify-end m-4">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <Link
            href="/"
            className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
          >
            <Logo
              style={{
                maxHeight: config.content.logo.height,
                maxWidth: config.content.logo.width,
              }}
              width={config.content.logo.width}
              alt={config.title}
              height={config.content.logo.height}
              src={`/${config.name}/Logo.png`}
            />
            {/* <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span> */}
          </Link>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
            <li>
              <Link href="/" className="hover:underline me-4 md:me-6">
                О нас
              </Link>
            </li>
            <li>
              <Link href="/" className="hover:underline me-4 md:me-6">
                Политика конфиденциальности
              </Link>
            </li>
            <li>
              <Link href="/order" className="hover:underline me-4 md:me-6">
                Доставка
              </Link>
            </li>
            <li>
              <Link href="/payment" className="hover:underline">
                Оплата
              </Link>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © {new Date().getFullYear()}{" "}
          <Link href="/" className="hover:underline">
            Денежное дерево™
          </Link>
          . Все права защищены.
        </span>
      </div>
    </footer>
  );
}
