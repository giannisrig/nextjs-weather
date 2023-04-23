import Image from 'next/image'
import Link from 'next/link';
// import MobileMenu from "@/components/common/mobileMenu/mobileMenu";
import { useDispatch } from 'react-redux';
import { setMobileMenuOpen } from "@/slices/mobileMenuSlice";

export default function Header() {

    const dispatch = useDispatch();

    function openMobileMenu( e ) {
        e.preventDefault();
        dispatch( setMobileMenuOpen( true ) );
    }

    return (
        <>
            <header className="z-10 w-full text-sm p-8">
                <div className="container">
                    <div className="w-full items-center justify-between lg:flex">
                        <a href='https://github.com/giannisrig/next-core-template' target='_blank' className="flex items-center gap-10px fixed left-0 top-0 flex w-full justify-center border-b border-amethyst bg-mirage text-pink pb-6 pt-8 backdrop-blur-2xl lg:static lg:w-auto  lg:rounded-xl lg:border lg:p-4 ">
                            <Image
                                src="/github.svg"
                                alt="Gihub Logo"
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
                        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
                            <a
                                className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
                                href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Deploy on: {' '}
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
                        {/*<MobileMenu />*/}
                    </div>
                </div>
            </header>

        </>
    )
}
