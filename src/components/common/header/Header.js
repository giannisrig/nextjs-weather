import Image from "next/image";
import MobileMenu from "@/components/common/mobileMenu/MobileMenu";
import HamburgerButton from "@/components/common/mobileMenu/HamburgerButton";

export default function Header() {
  return (
    <>
      <header className="z-10 w-full p-8 text-sm">
        <div className="container">
          <div className="flex w-full items-center justify-between">
            <a
              href="https://github.com/giannisrig/nextjs-weather"
              target="_blank"
              className="static flex flex w-max items-center justify-center gap-10px rounded-xl border border-b border-amethyst bg-mirage p-4 text-pink backdrop-blur-2xl "
            >
              <Image
                src="/github.svg"
                alt="Github Logo"
                className="invert"
                width={20}
                height={20}
                priority
              />
              <span>
                View repository on&nbsp;
                <code className="font-mono font-bold">Github</code>
              </span>
            </a>
            <HamburgerButton />
          </div>
        </div>
      </header>
      <MobileMenu />
    </>
  );
}
