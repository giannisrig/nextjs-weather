
export default function Footer() {


    return (
        <footer>
            <div className='container'>
                <div className="mb-32 grid text-center lg:mb-0 lg:grid-cols-4 lg:text-left font-secondary">
                    <a
                        href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
                        className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <h2 className={`mb-3 text-2xl font-semibold`}>
                            Docs{' '}
                        </h2>
                        <p
                            className={`m-0 max-w-[30ch] text-sm opacity-50`}
                        >
                            Find in-depth information about Next.js features and API.
                        </p>
                    </a>

                    <a
                        href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
                        className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <h2 className={` mb-3 text-2xl font-semibold`}>
                            Learn{' '}

                        </h2>
                        <p
                            className={` m-0 max-w-[30ch] text-sm opacity-50`}
                        >
                            Learn about Next.js in an interactive course with&nbsp;quizzes!
                        </p>
                    </a>

                    <a
                        href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
                        className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <h2 className={` mb-3 text-2xl font-semibold`}>
                            Templates{' '}
                        </h2>
                        <p
                            className={` m-0 max-w-[30ch] text-sm opacity-50`}
                        >
                            Discover and deploy boilerplate example Next.js&nbsp;projects.
                        </p>
                    </a>

                    <a
                        href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
                        className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <h2 className={` mb-3 text-2xl font-semibold`}>
                            Deploy{' '}
                        </h2>
                        <p
                            className={` m-0 max-w-[30ch] text-sm opacity-50`}
                        >
                            Instantly deploy your Next.js site to a shareable URL with Vercel.
                        </p>
                    </a>
                </div>
            </div>
        </footer>
    )
}
