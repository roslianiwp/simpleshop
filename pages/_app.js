import SimpleShopContextProvider from "../utils/Provider";

function MyApp({ Component, pageProps }) {
  return (
    <SimpleShopContextProvider>
      <Component {...pageProps} />
    </SimpleShopContextProvider>
  );
}

export default MyApp;
