import "../styles/globals.css";
import type { AppProps } from "next/app";
import { RecoilRoot } from "recoil";
import { Layout } from "../src/layout/Layout";
import { useEffect, useState } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { Provider } from "react-redux";
import { wrapper } from "../src/redux/store";

export default function App({ Component, pageProps, ...rest }: AppProps) {
  const { store, props } = wrapper.useWrappedStore(rest);

  console.log("app props", props);

  const [showing, setShowing] = useState(false);

  const queryClient = new QueryClient();

  useEffect(() => {
    setShowing(true);
  }, []);
  if (!showing) {
    return null;
  }

  if (typeof window === "undefined") {
    return <></>;
  } else {
    return (
      <Provider store={store}>
        <RecoilRoot>
          <QueryClientProvider client={queryClient}>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </QueryClientProvider>
        </RecoilRoot>
      </Provider>
    );
  }
}
