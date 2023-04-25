export default function PageSectionContainer({ children }) {

    return (
        <section className='py-80px lg:py-100px w-full'>
            <div className="container">
                { children }
            </div>
        </section>
    );

}
