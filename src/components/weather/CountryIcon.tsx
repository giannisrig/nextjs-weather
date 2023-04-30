import Image from "next/image";
const CountryIcon = ({ countryName }: { countryName: string }) => {
  // Replace space with '_'
  const formattedCountryName = countryName.replace(/\s+/g, "_");

  return (
    <Image
      src={`/images/flags/${formattedCountryName}.svg`}
      alt={`Flag icon for country ${countryName}`}
      width={20}
      height={20}
    />
  );
};

export default CountryIcon;
