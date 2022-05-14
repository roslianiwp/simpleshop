import { useContext } from "react";
import Layout from "../components/layout";
import { SimpleShopContext } from "../utils/Provider";
import Link from "next/link";
import Card from "../components/card";

function MyList() {
  const { state, dispatch } = useContext(SimpleShopContext);

  const removeProduct = (id) => {
    dispatch({ type: "REMOVE_PRODUCT", id: id });
  };

  return (
    <Layout title={"My Shopping Cart"}>
      <h1>My Shopping Cart</h1>
      {state.myDatas && state.myDatas.length > 0 ? (
        <Card
          data={state.myDatas}
          deleteBtn
          deleteCta={(id) => removeProduct(id)}
        />
      ) : (
        <div
          style={{
            textAlign: "center",
            color: `${!state.lightTheme && "#FFFBFF"}`,
          }}
        >
          <p>Your cart is empty </p>
          <p>Please pick any product!</p>
          <Link href="/">Start shopping</Link>
        </div>
      )}
    </Layout>
  );
}

MyList.getInitialProps = async ({}) => {
  return {};
};

export default MyList;
