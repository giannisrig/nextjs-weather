import Image from 'next/image';
const WeatherIcon = ({ iconName, weather }) => {

    const iconPath = `/images/weather/${iconName}.svg`;

    return (
        <Image src={iconPath} alt={`weather icon for ${weather}`} width={45} height={45} />
    );
};

export default WeatherIcon;
