import Link from "next/link";
import Logo from "../../components/Logo";
import NavLink from "./NavLink";
import CardCount from "./components/CardCount";
import Whatsapp from "../../components/Whatsapp";

export default function Header() {
  return (
    <header className="container mx-auto">
      <div className="flex justify-between flex-wrap pt-4 pb-2">
        <nav className="flex flex-1 min-w-[280px] max-w-[280px] justify-between">
          <NavLink text="Статьи" href="/" />
          <NavLink text="Доставка" href="/order" />
          <NavLink text="Оплата" href="/payment" />
        </nav>
        <nav className="flex flex-wrap justify-between items-center w-[380px]">
          <NavLink text="Обратный звонок" href="/recall" />

          <span className="bg-gray-300 w-[1px] h-[20px]"></span>

          <a className="text-green-400 font-medium" href="tel:+79001111111">
            +7-900-111-11-11
          </a>

          <span className="bg-gray-300 w-[1px] h-[20px]"></span>

          <Whatsapp />
        </nav>
      </div>

      <span className="flex bg-gray-100 w-full h-[1px] mb-2"></span>

      <div className="flex justify-between items-center ">
        <nav className="flex items-center justify-between max-w-[320px] w-full">
          <Link href={"/"}>
            <Logo width={172} alt="Денежное дерево" height={56} src={"/Logo.png"} />
          </Link>

          <Link className="text-green-400 flex items-center" href="/catalog">
            <svg className="mr-2" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M2.5 6.5C2.5 4.61438 2.5 3.67157 3.08579 3.08579C3.67157 2.5 4.61438 2.5 6.5 2.5C8.38562 2.5 9.32843 2.5 9.91421 3.08579C10.5 3.67157 10.5 4.61438 10.5 6.5C10.5 8.38562 10.5 9.32843 9.91421 9.91421C9.32843 10.5 8.38562 10.5 6.5 10.5C4.61438 10.5 3.67157 10.5 3.08579 9.91421C2.5 9.32843 2.5 8.38562 2.5 6.5Z"
                stroke="currentColor"
                strokeWidth="1.5"
              ></path>
              <path
                d="M13.5 17.5C13.5 15.6144 13.5 14.6716 14.0858 14.0858C14.6716 13.5 15.6144 13.5 17.5 13.5C19.3856 13.5 20.3284 13.5 20.9142 14.0858C21.5 14.6716 21.5 15.6144 21.5 17.5C21.5 19.3856 21.5 20.3284 20.9142 20.9142C20.3284 21.5 19.3856 21.5 17.5 21.5C15.6144 21.5 14.6716 21.5 14.0858 20.9142C13.5 20.3284 13.5 19.3856 13.5 17.5Z"
                stroke="currentColor"
                strokeWidth="1.5"
              ></path>
              <path
                d="M2.5 17.5C2.5 15.6144 2.5 14.6716 3.08579 14.0858C3.67157 13.5 4.61438 13.5 6.5 13.5C8.38562 13.5 9.32843 13.5 9.91421 14.0858C10.5 14.6716 10.5 15.6144 10.5 17.5C10.5 19.3856 10.5 20.3284 9.91421 20.9142C9.32843 21.5 8.38562 21.5 6.5 21.5C4.61438 21.5 3.67157 21.5 3.08579 20.9142C2.5 20.3284 2.5 19.3856 2.5 17.5Z"
                stroke="currentColor"
                strokeWidth="1.5"
              ></path>
              <path
                d="M13.5 6.5C13.5 4.61438 13.5 3.67157 14.0858 3.08579C14.6716 2.5 15.6144 2.5 17.5 2.5C19.3856 2.5 20.3284 2.5 20.9142 3.08579C21.5 3.67157 21.5 4.61438 21.5 6.5C21.5 8.38562 21.5 9.32843 20.9142 9.91421C20.3284 10.5 19.3856 10.5 17.5 10.5C15.6144 10.5 14.6716 10.5 14.0858 9.91421C13.5 9.32843 13.5 8.38562 13.5 6.5Z"
                stroke="#44BC1E"
                strokeWidth="1.5"
              ></path>
            </svg>
            <span>Каталог</span>
          </Link>
        </nav>
        <nav className="flex">
          <Link aria-label="Корзина" href="/cart">
            <svg className="text-gray-400" xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none">
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeWidth="2"
                d="m2.667 4 .353.118c1.76.586 2.64.88 3.143 1.578.504.698.504 1.626.504 3.481v3.49c0 3.77 0 5.656 1.171 6.828 1.172 1.172 3.057 1.172 6.829 1.172h10.666"
              ></path>
              <path
                stroke="currentColor"
                strokeWidth="2"
                d="M10 24a2 2 0 1 1 0 4 2 2 0 0 1 0-4ZM22 24a2 2 0 1 1 0 4 2 2 0 0 1 0-4ZM6.667 8h15.267c2.74 0 4.11 0 4.703.899.592.899.053 2.158-1.027 4.677l-.571 1.333c-.504 1.176-.756 1.764-1.257 2.094-.5.33-1.14.33-2.42.33H6.667"
              ></path>
            </svg>
          </Link>
          <CardCount />
          {/* <Link aria-label="Войти" href={"/login"}>
            <svg className="text-gray-400" xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none">
              <path
                stroke="currentColor"
                strokeWidth="2"
                d="M16 13.334a5.333 5.333 0 1 0 0-10.667 5.333 5.333 0 0 0 0 10.667ZM16 28c5.155 0 9.333-2.388 9.333-5.334 0-2.945-4.178-5.333-9.333-5.333s-9.333 2.388-9.333 5.333C6.667 25.612 10.845 28 16 28Z"
              ></path>
            </svg>
          </Link> */}
        </nav>
      </div>
    </header>
  );
}
