import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import {
  selectMobileMenuOpen,
  setMobileMenuOpen,
} from "@/slices/mobileMenuSlice";
import { selectOverlayActive } from "@/slices/overlaySlice";
import MobileNavigation from "@/components/common/mobileMenu/MobileNavigation";
import CloseMobileMenu from "@/components/common/mobileMenu/CloseMobileMenu";

export default function MobileMenu() {
  const router = useRouter();
  const dispatch = useDispatch();
  const mobileMenuOpen = useSelector(selectMobileMenuOpen); // updated
  const overlayActive = useSelector(selectOverlayActive); // updated
  const [mobileMenuClass, setMobileMenuClass] = useState("translate-x-full");

  const mobileMenuClassHandler = (stateSelector) => {
    if (stateSelector) {
      setMobileMenuClass("translate-x-0");
    } else {
      setMobileMenuClass("translate-x-full");
    }
  };

  useEffect(() => {
    mobileMenuClassHandler(mobileMenuOpen);
  }, [mobileMenuOpen]);

  useEffect(() => {
    mobileMenuClassHandler(overlayActive);
  }, [overlayActive]);

  useEffect(() => {
    router.events.on("routeChangeStart", () => {
      dispatch(setMobileMenuOpen(false));
    });
  }, [dispatch, router.events]);

  return (
    <header
      className={
        `fixed right-0 top-0 z-30 h-screen w-[300px] bg-mirage transition-all duration-200 ` +
        mobileMenuClass
      }
    >
      <div className="flex h-full w-full flex-col">
        <div className="flex items-center justify-between border-b-2 border-bleached px-30px py-10px pb-5px">
          <div className="py-10px xl:py-20px">Logo Here</div>

          <CloseMobileMenu />
        </div>

        <MobileNavigation />
      </div>
    </header>
  );
}
