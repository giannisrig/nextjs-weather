import { useSelector, useDispatch } from 'react-redux';
import {useEffect, useState} from 'react';
import { useRouter } from 'next/router'
import { selectMobileMenuOpen, setMobileMenuOpen } from '@/slices/mobileMenuSlice';
import { selectOverlayActive } from '@/slices/overlaySlice';
import MobileNavigation from '@/components/common/mobileMenu/mobileNavigation';
import CloseMobileMenu from '@/components/common/mobileMenu/closeMobileMenu';


export default function MobileMenu() {

    const router            = useRouter();
    const dispatch          = useDispatch();
    const mobileMenuOpen    = useSelector(selectMobileMenuOpen); // updated
    const overlayActive     = useSelector(selectOverlayActive); // updated
    const [mobileMenuClass, setMobileMenuClass] = useState('translate-x-full');

    const mobileMenuClassHandler = ( stateSelector ) => {

        if( stateSelector ){
            setMobileMenuClass('translate-x-0');
        }
        else {
            setMobileMenuClass('translate-x-full');
        }

    }

    useEffect(() => {

        mobileMenuClassHandler(mobileMenuOpen)

    }, [mobileMenuOpen])

    useEffect(() => {

        mobileMenuClassHandler(overlayActive)

    }, [overlayActive])

    useEffect(() => {

        router.events.on('routeChangeStart', () => {
            dispatch( setMobileMenuOpen(false) );
        })

    }, [dispatch, router.events])


    return (
        <header className={`h-screen fixed top-0 right-0 w-[300px] bg-mirage transition-all duration-200 z-30 ` + mobileMenuClass}>

            <div className="flex flex-col w-full h-full">

                <div className="flex justify-between px-30px py-10px items-center border-b-2 border-bleached pb-5px">

                    <div className="py-10px xl:py-20px">
                        Logo Here
                    </div>

                    <CloseMobileMenu />

                </div>

                <MobileNavigation />

            </div>

        </header>
    );
}
