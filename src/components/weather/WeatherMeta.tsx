import Image from "next/image";

interface WeatherCardMeta {
  src: string;
  alt: string;
  name: string;
  value: string | number;
}

export default function WeatherMeta({ src, alt, name, value }: WeatherCardMeta) {
  return (
    <div className="flex items-center gap-7px">
      <Image src={src} alt={alt} width={25} height={25} />
      <p className="text-xs ">
        <span className="opacity-70">{name}:</span>
        {value}
      </p>
    </div>
  );
}
