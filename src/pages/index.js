import Image from 'next/image'
import Layout from "@/components/layout/layout";

export default function Home() {
    return (
        <Layout>
            <div className="container">
                <div className='flex flex-col items-center justify-center gap-30px p-24 w-full'>
                    <div className="next-logo relative flex place-items-center items-center justify-center w-[300px] h-[300px] after:absolute after:-z-20 after:h-[240px] after:w-[240px] after:translate-x-2/4 after:right-1/2 after:blur-2xl after:content-['']">
                        <Image
                            className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70]"
                            src="/next.svg"
                            alt="Next.js Logo"
                            width={180}
                            height={37}
                            priority
                        />
                    </div>
                    <p className="flex w-full justify-center border-b border-amethyst bg-mirage text-green pb-6 pt-8 backdrop-blur-2xl lg:static lg:w-auto  lg:rounded-xl lg:border lg:p-4 ">
                        <code className="font-mono font-bold">npx create-next-app --e https://github.com/giannisrig/next-core-template YOUR_APP_NAME</code>
                    </p>
                </div>
            </div>
        </Layout>
    )
}
