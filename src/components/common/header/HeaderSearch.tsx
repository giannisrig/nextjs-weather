import SearchForm from "@/components/search/SearchForm";
import { useEffect, useState } from "react";
import { useAppDispatch } from "@/libs/store/store";
import { setSearchFormFocus } from "@/slices/searchFormSlice";

export default function HeaderSearch() {
  const [keysPressed, setKeysPressed] = useState([]);
  const dispatch = useAppDispatch();

  useEffect(() => {
    document.addEventListener("keydown", keyDownHandler, false);

    return () => {
      document.removeEventListener("keydown", keyDownHandler, false);
    };
  });

  // useEffect(() => {
  //   console.log("Keys Array:", keysPressed);
  // }, [keysPressed]);

  function keyDownHandler(e): void {
    if (e.repeat) return;

    keysPressed[e.keyCode] = e.type == "keydown";

    // console.log("Specific Key Pressed: ", e.key);

    if (keysPressed[17] && keysPressed[17] === true && keysPressed[75] && keysPressed[75] === true) {
      e.preventDefault();
      dispatch(setSearchFormFocus(true));
      setKeysPressed([]);
    }
  }

  return (
    <div className="w-[350px]">
      <SearchForm
        header={true}
        inputClass="w-full rounded-l-lg border border-bleached bg-mirage px-4 py-2 text-white outline-none transition-colors duration-300 focus:border-green focus:ring-0 placeholder:text-xs"
        btnClass="rounded-r-lg border-b border-r border-t border-bleached bg-mirage px-4 py-2 text-white transition-colors duration-300 hover:bg-pink focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
      />
    </div>
  );
}
