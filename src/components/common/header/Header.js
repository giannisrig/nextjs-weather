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
            <div className="static flex h-auto w-max items-end justify-center">
              <a
                className="flex place-items-center gap-2"
                href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
                target="_blank"
                rel="noopener noreferrer"
              >
                Deploy on:{" "}
                <Image
                  src="/vercel.svg"
                  alt="Vercel Logo"
                  className="invert"
                  width={80}
                  height={18}
                  priority
                />
              </a>
            </div>
            <HamburgerButton />
          </div>
        </div>
      </header>
      <MobileMenu />
    </>
  );
}
