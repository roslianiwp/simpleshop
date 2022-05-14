import { useContext, useEffect } from "react";
import Layout from "../components/layout";
import styled from "@emotion/styled";
import { SimpleShopContext } from "../utils/Provider";
import Card from "../components/card";

function Home({ productsData }) {
  const { state, dispatch } = useContext(SimpleShopContext);

  useEffect(() => {
    dispatch({ type: "SAVE_ALL_DATA", payload: productsData });
  }, []);

  const H4 = styled.h4`
    text-align: center;
    color: ${state.lightTheme ? "#69626D" : "#ccae66"};
  `;

  return (
    <Layout title={"Product List"}>
      <h1>Simple Shop!</h1>
      <H4>We sell everything, and of course random things!</H4>
      <Card data={productsData} />
    </Layout>
  );
}

export const getStaticProps = async () => {
  const res = await fetch(
    "https://627d1f2ebf2deb7174e7ee52.mockapi.io/api/v1/getproducts"
  );
  const productsData = await res.json();

  return {
    props: {
      productsData,
    },
  };
};

export default Home;
