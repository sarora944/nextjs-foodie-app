import Link from "next/link";
import logoImg from "@/assets/logo.png";
import Image from "next/image";
import style from "./main-header.module.css";
import MainHeaderBackground from "./main-header-background";
import NavLink from "../nav-link/nav-link";

export default function MainHeader() {
  return (
    <>
      <MainHeaderBackground />
      <header className={style.header}>
        <Link href={"/"} className={style.logo}>
          <Image src={logoImg} alt="logo" priority />
        </Link>
        <nav className={style.nav}>
          <ul>
            <li>
              <NavLink href={"/meals"}>Meals</NavLink>
            </li>
            <li>
              <NavLink href={"/community"}>Foodie Community</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
