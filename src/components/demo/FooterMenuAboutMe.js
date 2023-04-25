import FooterMenu from '@/components/demo/FooterMenu';

export default function FooterMenuAboutMe() {

    const list = [
        {
            name: 'Website',
            url: '#'
        },
        {
            name: 'Github',
            url: '#'
        },
        {
            name: 'LinkedIn',
            url: '#'
        },
        {
            name: 'UpWork',
            url: '#'
        },
        {
            name: 'Code Playground',
            url: '#'
        },
    ]

    return (
        <div className="flex flex-col gap-15px max-w-full">

            <h3 className={`text-2xl font-primary font-semibold`}>
                About me
            </h3>

            <FooterMenu list={list} />

        </div>
    );

}
