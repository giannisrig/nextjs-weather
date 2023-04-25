export default function FooterProjectOverview() {

    return (
        <div className="flex flex-col gap-30px w-full">

            <div className="flex flex-col gap-15px max-w-full">

                <h3 className={`text-2xl font-primary font-semibold`}>
                    About the Project
                </h3>

                <p className="text-amethyst">
                    A simple weather application that fetches weather data from an API and displays it in a visually appealing way. Users can search for weather by location, view current weather conditions, and see a forecast for the upcoming days.
                </p>

            </div>

            <p className="overflow-x-auto flex w-max justify-center border-b border-amethyst bg-mirage text-green text-xs pb-6 pt-8 backdrop-blur-2xl lg:rounded-xl lg:border lg:p-4 ">
                <code className="font-mono font-bold">npx create-next-app --e https://github.com/giannisrig/nextjs-weather YOUR_APP_NAME</code>
            </p>

        </div>
    )
}
