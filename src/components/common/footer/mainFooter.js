export default function MainFooter() {

    return (
        <div className="font-secondary py-50px lg:py-80px">
            <div className="container">

                <div className="grid md:grid-cols-2 lg:grid-cols-4 w-full gap-30px">
                    <a
                        href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
                        className="group rounded-lg border border-transparent transition-colors "
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <h2 className={`mb-3 text-2xl font-semibold`}>
                            Docs
                        </h2>
                        <p
                            className={`m-0 max-w-full md:max-w-[30ch] text-sm opacity-50`}
                        >
                            Find in-depth information about Next.js features and API.
                        </p>
                    </a>

                    <a
                        href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
                        className="group rounded-lg border border-transparent transition-colors "
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <h2 className={` mb-3 text-2xl font-semibold`}>
                            Learn

                        </h2>
                        <p
                            className={` m-0 max-w-full md:max-w-[30ch] text-sm opacity-50`}
                        >
                            Learn about Next.js in an interactive course with&nbsp;quizzes!
                        </p>
                    </a>

                    <a
                        href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
                        className="group rounded-lg border border-transparent transition-colors "
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <h2 className={` mb-3 text-2xl font-semibold`}>
                            Templates
                        </h2>
                        <p
                            className={` m-0 max-w-full md:max-w-[30ch] text-sm opacity-50`}
                        >
                            Discover and deploy boilerplate example Next.js&nbsp;projects.
                        </p>
                    </a>

                    <a
                        href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
                        className="group rounded-lg border border-transparent transition-colors "
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <h2 className={` mb-3 text-2xl font-semibold`}>
                            Deploy
                        </h2>
                        <p
                            className={` m-0 max-w-full md:max-w-[30ch] text-sm opacity-50`}
                        >
                            Instantly deploy your Next.js site to a shareable URL with Vercel.
                        </p>
                    </a>
                </div>

            </div>
        </div>
    )
}
