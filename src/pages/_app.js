import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { GoogleAnalytics } from "nextjs-google-analytics";
import "@/styles/globals.scss";
import { Provider } from "react-redux";
import { wrapper } from "@/libs/store/store";
import fonts from "@/libs/constants/fonts";

export default function App({ Component, ...rest }) {
  const router = useRouter();

  const { store, props } = wrapper.useWrappedStore(rest);
  const { pageProps } = props;

  // useEffect(() => {
  //     //client code here to run for every page. For example: Facebook Pixel
  // }, [ router.events ])

  return (
    <Provider store={store}>
      <GoogleAnalytics trackPageViews />
      <div
        className={`${fonts.notoSansMono.variable} ${fonts.grava.variable} font-primary`}
      >
        <Component {...pageProps} />
      </div>
    </Provider>
  );
}
