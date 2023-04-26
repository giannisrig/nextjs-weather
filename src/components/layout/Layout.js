import Head from "next/head";
import Header from "@/components/common/header/header";
import Footer from "@/components/common/footer/Footer";

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>NextJS: Weather App</title>
        <meta name="description" content="A weather app built with Next.js" />
      </Head>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
