import Image from "next/image";

export default function FooterDocumentations() {
  return (
    <div className="grid w-full gap-30px md:grid-cols-2 lg:grid-cols-4 lg:gap-50px">
      <a
        href="https://nextjs.org/docs"
        className="flex flex-col gap-15px text-white transition-colors duration-200 hover:text-pink"
        target="_blank"
        rel="noopener noreferrer"
      >
        <span className="flex items-center gap-7px">
          <Image
            src="/images/demo/nextjs.svg"
            alt={`Tailwind icon`}
            width={25}
            height={25}
          />
          <h3 className={`font-primary text-xl font-semibold text-white`}>
            NextJS
          </h3>
        </span>
        <p className={`m-0 max-w-full text-sm text-amethyst md:max-w-[30ch]`}>
          Find in-depth information about Next.js features and API.
        </p>
        <p className={`max-w-full font-primary text-sm md:max-w-[30ch]`}>
          Read more
        </p>
      </a>

      <a
        href="https://tailwindcss.com/docs/installation"
        className="flex flex-col gap-15px text-white transition-colors duration-200 hover:text-pink"
        target="_blank"
        rel="noopener noreferrer"
      >
        <span className="flex items-center gap-7px">
          <Image
            src="/images/demo/tailwind.svg"
            alt={`Tailwind icon`}
            width={25}
            height={25}
          />
          <h3 className={`font-primary text-xl font-semibold text-white`}>
            Tailwind
          </h3>
        </span>
        <p className={`max-w-full text-sm text-amethyst md:max-w-[30ch]`}>
          Utility-first CSS framework to build any design, directly in your
          markup.
        </p>
        <p className={`max-w-full font-primary text-sm md:max-w-[30ch]`}>
          Read more
        </p>
      </a>

      <a
        href="https://redux.js.org/introduction/getting-started"
        className="flex flex-col gap-15px text-white transition-colors duration-200 hover:text-pink"
        target="_blank"
        rel="noopener noreferrer"
      >
        <span className="flex items-center gap-7px">
          <Image
            src="/images/demo/redux.svg"
            alt={`Redux icon`}
            width={25}
            height={25}
          />
          <h3 className={`font-primary text-xl font-semibold text-white`}>
            Redux
          </h3>
        </span>

        <p className={`max-w-full text-sm text-amethyst md:max-w-[30ch]`}>
          A predictable, flexible and centralized State Container for JS Apps.
        </p>
        <p className={`max-w-full font-primary text-sm md:max-w-[30ch]`}>
          Read more
        </p>
      </a>

      <a
        href="https://vercel.com/new"
        className="flex flex-col gap-15px text-white transition-colors duration-200 hover:text-pink"
        target="_blank"
        rel="noopener noreferrer"
      >
        <span className="flex items-center gap-7px">
          <Image
            src="/images/demo/vercel.svg"
            alt={`Vercel icon`}
            title={`Vercel icon`}
            width={25}
            height={25}
          />
          <h3 className={`font-primary text-xl font-semibold text-white`}>
            Vercel
          </h3>
        </span>
        <p className={`max-w-full text-sm text-amethyst md:max-w-[30ch]`}>
          Instantly deploy your Next.js site to a shareable URL with Vercel.
        </p>
        <p className={`max-w-full font-primary text-sm md:max-w-[30ch]`}>
          Read more
        </p>
      </a>
    </div>
  );
}
