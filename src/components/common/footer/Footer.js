import MainFooter from '@/components/common/footer/MainFooter';
import SubFooter from '@/components/common/footer/SubFooter';
import Overlay from '@/components/common/overlay/Overlay';

export default function Footer() {


    return (
        <>
            <Overlay />
            <footer className="flex flex-col w-full border-t-2 border-bleached">
                <MainFooter />
                <SubFooter />
            </footer>
        </>

    )
}
