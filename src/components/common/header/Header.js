import Image from "next/image";
import MobileMenu from "@/components/common/mobileMenu/MobileMenu";
import HamburgerButton from "@/components/common/mobileMenu/HamburgerButton";
import HeaderWeather from "@/components/HeaderWeather";
import Logo from "@/components/common/header/Logo";

export default function Header() {
  return (
    <>
      <header className="z-10 w-full p-6 text-sm">
        <div className="container">
          <div className="flex w-full items-center justify-between">
            <Logo />
            <a
              href="https://github.com/giannisrig/nextjs-weather"
              target="_blank"
              className="static flex flex w-max items-center justify-center gap-10px rounded-full border border-b border-amethyst bg-mirage text-pink backdrop-blur-2xl "
            >
              <Image
                src="/github.svg"
                alt="Github Logo"
                className="invert"
                width={20}
                height={20}
                priority
              />
            </a>
            <div className="flex items-center gap-20px">
              <HeaderWeather />
              <HamburgerButton />
            </div>
          </div>
        </div>
      </header>
      <MobileMenu />
    </>
  );
}
