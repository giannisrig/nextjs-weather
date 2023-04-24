import Image from 'next/image'
import { useDispatch } from 'react-redux';
import { setMobileMenuOpen } from "@/slices/mobileMenuSlice";

export default function HamburgerButton() {

    const dispatch = useDispatch();

    function openMobileMenu( e ) {
        e.preventDefault();
        dispatch( setMobileMenuOpen( true ) );
    }

    return (
        <a href="#"
           className="flex items-center gap-7px transition-colors duration-200  hover:text-green"
           onClick={(e) => openMobileMenu(e)}>
            <Image
                src="/images/hamburger.svg"
                alt="Menu Icon"
                width={20}
                height={20}
            />
            <span className="text-sm">Menu</span>
        </a>
    )
}
