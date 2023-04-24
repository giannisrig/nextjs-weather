import Image from 'next/image';
const CountryIcon = ({ countryName }) => {

    const formattedCountryName = countryName.replace(/\s+/g, '_')
    const iconPath = `/images/flags/${formattedCountryName}.svg`;

    return (
        <Image src={iconPath} alt={`Flag icon for country ${countryName}`} width={20} height={20} />
    );
};

export default CountryIcon;
