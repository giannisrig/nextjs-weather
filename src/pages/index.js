import Head from 'next/head';
import Layout from "@/components/layout/layout";

export default function Home() {
    return (
        <Layout>
            <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-blue-400 to-purple-500">
                <Head>
                    <title>NextJS: Weather App | Demo Project by Giannis Riganas</title>
                    <meta name="description" content="A weather app built with Next.js" />
                </Head>
                <div className="mb-4">
                    <input
                        type="text"
                        placeholder="Search location..."
                        className="px-4 py-2 rounded-l-lg outline-none bg-white focus:bg-gray-100 border-t-2 border-b-2 border-l-2 border-gray-300 focus:border-blue-400 focus:ring-0 transition-colors duration-300"
                    />
                    <button
                        type="button"
                        className="px-4 py-2 rounded-r-lg bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-colors duration-300"
                    >
                        Search
                    </button>
                </div>
            </div>
        </Layout>
    )
}
