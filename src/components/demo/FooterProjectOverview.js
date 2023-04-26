export default function FooterProjectOverview() {
  return (
    <div className="flex w-full flex-col gap-30px">
      <div className="flex max-w-full flex-col gap-15px">
        <h3 className={`font-primary text-2xl font-semibold`}>
          About the Project
        </h3>

        <p className="text-amethyst">
          A simple weather application that fetches weather data from an API and
          displays it in a visually appealing way. Users can search for weather
          by location, view current weather conditions, and see a forecast for
          the upcoming days.
        </p>
      </div>

      <p className="flex w-max justify-center overflow-x-auto border-b border-amethyst bg-mirage pb-6 pt-8 text-xs text-green backdrop-blur-2xl lg:rounded-xl lg:border lg:p-4 ">
        <code className="font-mono font-bold">
          npx create-next-app --e https://github.com/giannisrig/nextjs-weather
          YOUR_APP_NAME
        </code>
      </p>
    </div>
  );
}
