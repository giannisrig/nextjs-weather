import Image from "next/image";
import MobileMenu from "@/components/common/mobileMenu/MobileMenu";
import HamburgerButton from "@/components/common/mobileMenu/HamburgerButton";
import HeaderWeather from "@/components/HeaderWeather";
import Logo from "@/components/common/header/Logo";
import SearchForm from "@/components/search/SearchForm";

export default function Header() {
  return (
    <>
      <header className="sticky top-0 z-10 w-full border-b border-bleached py-6 text-sm backdrop-blur-lg">
        <div className="container">
          <div className="flex w-full items-center justify-between">
            <div className="flex items-center gap-20px">
              <Logo />
              <div className="h-[20px] w-[2px] bg-bleached" />
              <a
                href="https://github.com/giannisrig/nextjs-weather"
                target="_blank"
                className="flex items-center gap-5px rounded-full border border-bleached bg-mirage px-10px py-7px transition-colors duration-200 hover:border-green hover:text-green"
              >
                <Image
                  src="/github.svg"
                  alt="Github Logo"
                  width={18}
                  height={18}
                  priority
                />
                <span className="hidden font-secondary text-sm mdl:block">
                  View on github
                </span>
              </a>
            </div>

            <div className="flex items-center gap-20px">
              {/*<div className="w-[300px]">*/}
              {/*  <SearchForm />*/}
              {/*</div>*/}

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
