import { headerLogo } from "../public/images";
import Image from "next/image";
import { navLinks } from "@/constants";
import HamburgerButton from "./HamburgerButton";
import Link from "next/link";

const Nav = () => {
  return (
    <header className="padding-x py-8 z-50 w-full fixed bg-white ">
      <nav className="flex justify-between items-center max-container max-sm:items-start">
        <Link href="/">
          <Image src={headerLogo} alt="Logo" width={130} height={29}></Image>
        </Link>
        <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
          {navLinks.map((item) => (
            <li key={item.label}>
              <Link
                href={item.href}
                className="fons-montserrat leading-normal text-lg text-slate-gray"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
        <HamburgerButton />
      </nav>
    </header>
  );
};

export default Nav;
