import FooterMenu from '@/components/demo/FooterMenu';

export default function FooterMenuGetStarted() {

    const list = [
        {
            name: 'Read Article / Tutorial',
            url: '#'
        },
        {
            name: 'View Repository',
            url: '#'
        },
        {
            name: 'Live Demo',
            url: '#'
        },
        {
            name: 'Generate Template',
            url: '#'
        },
        {
            name: 'Deploy on Vercel',
            url: '#'
        },
    ]

    return (
        <div className="flex flex-col gap-15px max-w-full">

            <h3 className={`text-2xl font-primary font-semibold`}>
                Get started
            </h3>

            <FooterMenu list={list} />

        </div>
    );

}
