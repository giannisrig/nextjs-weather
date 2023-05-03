import WeatherLoadingCard from "@/components/weather/card/WeatherLoadingCard";
import { useEffect, useState } from "react";
import GeoNavigatorButton from "@/components/geoNavigator/GeoNavigatorButton";
import { RootState, useAppSelector } from "@/libs/store/store";

export default function GeoNavigatorCard() {
  const used: boolean = useAppSelector((state: RootState) => state.geoNavigation.used); // updated
  // Component visibility State
  const [visibility, setVisibility] = useState("block");

  // This code is triggered when the searchFormFocus state and header prop change
  useEffect(() => {
    if (used === true) {
      setVisibility("hidden");
    }
  }, [used]);

  return (
    <div className={`relative ${visibility}`}>
      <GeoNavigatorButton />
      <div className="opacity-90">
        <WeatherLoadingCard />
      </div>
    </div>
  );
}
