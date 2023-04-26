import Image from 'next/image';

export default function FooterDocumentations() {

    return (
        <div className="grid md:grid-cols-2 lg:grid-cols-4 w-full gap-30px lg:gap-50px">
            <a
                href="https://nextjs.org/docs"
                className="transition-colors duration-200 text-white hover:text-pink flex flex-col gap-15px"
                target="_blank"
                rel="noopener noreferrer"
            >
                            <span className="flex items-center gap-7px">
                                <Image src="/images/demo/nextjs.svg" alt={`Tailwind icon`} width={25} height={25} />
                                <h3 className={`text-xl font-semibold font-primary text-white`}>
                                    NextJS
                                </h3>
                            </span>
                <p className={`m-0 max-w-full md:max-w-[30ch] text-sm text-amethyst`} >
                    Find in-depth information about Next.js features and API.
                </p>
                <p className={`max-w-full md:max-w-[30ch] text-sm font-primary`} >
                    Read more
                </p>
            </a>

            <a
                href="https://tailwindcss.com/docs/installation"
                className="transition-colors duration-200 text-white hover:text-pink flex flex-col gap-15px"
                target="_blank"
                rel="noopener noreferrer"
            >

                            <span className="flex items-center gap-7px">
                                <Image src="/images/demo/tailwind.svg" alt={`Tailwind icon`} width={25} height={25} />
                                <h3 className={`text-xl font-semibold font-primary text-white`}>
                                    Tailwind
                                </h3>
                            </span>
                <p className={`max-w-full md:max-w-[30ch] text-sm text-amethyst`} >
                    Utility-first CSS framework to build any design, directly in your markup.
                </p>
                <p className={`max-w-full md:max-w-[30ch] text-sm font-primary`} >
                    Read more
                </p>
            </a>

            <a
                href="https://redux.js.org/introduction/getting-started"
                className="transition-colors duration-200 text-white hover:text-pink flex flex-col gap-15px"
                target="_blank"
                rel="noopener noreferrer"
            >
                            <span className="flex items-center gap-7px">
                                <Image src="/images/demo/redux.svg" alt={`Redux icon`} width={25} height={25} />
                                <h3 className={`text-xl font-semibold font-primary text-white`}>
                                    Redux
                                </h3>
                            </span>

                <p className={`max-w-full md:max-w-[30ch] text-sm text-amethyst`} >
                    A predictable, flexible and centralized State Container for JS Apps.
                </p>
                <p className={`max-w-full md:max-w-[30ch] text-sm font-primary`} >
                    Read more
                </p>
            </a>

            <a
                href="https://vercel.com/new"
                className="transition-colors duration-200 text-white hover:text-pink flex flex-col gap-15px"
                target="_blank"
                rel="noopener noreferrer"
            >
                             <span className="flex items-center gap-7px">
                                <Image src="/images/demo/vercel.svg" alt={`Vercel icon`} title={`Vercel icon`} width={25} height={25} />
                                <h3 className={`text-xl font-semibold font-primary text-white`}>
                                    Vercel
                                </h3>
                            </span>
                <p className={`max-w-full md:max-w-[30ch] text-sm text-amethyst`} >
                    Instantly deploy your Next.js site to a shareable URL with Vercel.
                </p>
                <p className={`max-w-full md:max-w-[30ch] text-sm font-primary`} >
                    Read more
                </p>
            </a>
        </div>
    )
}
