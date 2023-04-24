import MainFooter from '@/components/common/footer/mainFooter';
import SubFooter from '@/components/common/footer/subFooter';

export default function Footer() {


    return (
        <>
            <footer className="flex flex-col w-full border-t-2 border-bleached">
                <MainFooter />
                <SubFooter />
            </footer>
        </>

    )
}
