import Header from "@/components/common/header/header";
import Footer from "@/components/common/footer/footer";

export default function Layout({ children }) {

    return (
        <>
            <Header/>
            <main>
                { children }
            </main>
            <Footer/>
        </>
    );

}
