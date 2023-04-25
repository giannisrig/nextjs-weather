export default function FooterMenu({list}) {

    return (
        <ul className="flex flex-col gap-10px w-full ">
            { list ? (
                list.map((itemData, index) => (
                <li key={index}>
                    <a href={itemData.url} target="_blank">
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
