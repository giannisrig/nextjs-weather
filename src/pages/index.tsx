import Head from "next/head";
import Layout from "@/components/layout/Layout";
import PageSectionContainer from "@/components/common/section/PageSectionContainer";
import PopularLocations from "@/components/PopularLocations";
import SearchWeatherCard from "@/components/weather/card/SearchWeatherCard";
import SearchForm from "@/components/search/SearchForm";
import BackgroundWeatherImage from "@/components/weather/BackgroundWeatherImage";
import GeoNavigatorCard from "@/components/geoNavigator/GeoNavigatorCard";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>NextJS: Weather App | Demo Project by Giannis Riganas</title>
        <meta name="description" content="A weather app built with Next.js" />
      </Head>
      <div className="relative">
        <BackgroundWeatherImage />
        <PageSectionContainer>
          <div className="flex w-full flex-col items-center justify-center gap-30px">
            <h1 className="text-center text-2xl">Search for a location to get Weather Data</h1>
            <SearchForm />
            <div className="flex items-center gap-10px">
              <SearchWeatherCard />
              <GeoNavigatorCard />
            </div>
          </div>
        </PageSectionContainer>
        {/*<PageSectionContainer>*/}
        {/*  <PopularLocations />*/}
        {/*</PageSectionContainer>*/}
      </div>
    </Layout>
  );
}
