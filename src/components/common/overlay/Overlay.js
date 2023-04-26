import { useDispatch, useSelector } from "react-redux";
import { setOverlayActive } from "@/slices/overlaySlice";
import { selectOverlayActive } from "@/slices/overlaySlice";
import { setMobileMenuOpen } from "@/slices/mobileMenuSlice";
import { useEffect, useRef, useState } from "react";

export default function Overlay() {
  const [overlayClass, setOverlayClass] = useState("hidden");

  const dispatch = useDispatch();
  const overlayActive = useSelector(selectOverlayActive);
  const overlayElement = useRef(null);

  useEffect(() => {
    if (overlayActive) {
      setOverlayClass("block");
    } else {
      setOverlayClass("hidden");
    }
  }, [overlayActive]);

  const overlayClickHandler = (event) => {
    event.preventDefault();
    dispatch(setOverlayActive(false));
    dispatch(setMobileMenuOpen(false));
    setOverlayClass("hidden");
  };

  return (
    <div
      className={
        `fixed left-0 top-0 z-20 h-screen w-screen backdrop-blur-sm ` +
        overlayClass
      }
      onClick={(e) => overlayClickHandler(e)}
      ref={overlayElement}
    />
  );
}
