export default function FooterMenu({list}) {

    return (
        <ul className="flex flex-col gap-10px w-full ">
            { list ? (
                list.map((itemData, index) => (
                <li key={index}>
                    <a href={itemData.url} target="_blank" className="text-amethyst hover:text-pink transition-all duration-200">
                        {itemData.name}
                    </a>
                </li>
                ))
            ) : (
                <li className="h-[20px]"/>
            )}
        </ul>
    )
}
