import Image from 'next/image'
import { useDispatch } from 'react-redux';
import { setMobileMenuOpen } from "@/slices/mobileMenuSlice";
import { setOverlayActive } from '@/slices/overlaySlice';

export default function CloseMobileMenu() {

    const dispatch = useDispatch();

    const closeMobileMenu = (event) => {
        event.preventDefault();
        dispatch( setMobileMenuOpen( false ) );
        dispatch( setOverlayActive( false ) );
    }

    return (
        <>
            <a
                className="flex items-center gap-5px transition-colors duration-200 hover:text-pink"
                href="#"
                onClick={(e) => closeMobileMenu(e)}>
                <div className="p-2 bg-bleached rounded-full flex items-center justify-center">
                    <Image src="images/close.svg" alt="Close menu icon" width={10} height={10} />
                </div>
                <span className="text-sm">Close</span>
            </a>
        </>
    )
}
