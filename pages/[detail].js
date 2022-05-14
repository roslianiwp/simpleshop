import { useContext, useState } from "react";
import Layout from "../components/layout";
import { css } from "@emotion/react";
import { SimpleShopContext } from "../utils/Provider";

const imageProduct = css`
  display: block;
  width: 50%;
`;

function Detail({ productData }) {
  const { state, dispatch } = useContext(SimpleShopContext);
  const [loading, setLoading] = useState(false);

  const { name, img, desc, price, color, material, id } = productData;
  const btn = css`
    display: block;
    padding: 5px 15px;
    border: none;
    border-radius: 20px;
    background-color: #ddab9f;

    &:hover {
      background-color: #ebd8d0;
    }
  `;

  const descProduct = css`
    margin: 0 15px;
    color: ${state.lightTheme ? "#69626D" : "#FFFBFF"};
  `;

  const updateCart = () => {
    setLoading(true);
    dispatch({
      type: "ADD_PRODUCT",
      img,
      name,
      desc,
      id,
      price,
      color,
      material,
    });
    setTimeout(() => {
      alert(`Berhasil memasukkan produk ${name} ke cart`);
      setLoading(false);
    }, 1000);
  };

  return (
    <Layout title={`${name}'s data`}>
      <h1>{name}'s Page</h1>
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <img src={img} alt={`image-${name}`} css={imageProduct} />
        <div css={descProduct}>
          <p>
            Description:
            <br />
            {desc}
          </p>
          <p>
            Color:
            <br />
            {color}
          </p>
          <p>
            Material:
            <br />
            {material}
          </p>
          <p>
            Price:
            <br />
            {price}
          </p>
          <button
            css={btn}
            onClick={() => updateCart()}
            disabled={loading}
            id="loading-btn"
            aria-label="loading-btn"
          >
            {loading ? "wait a secs..." : "Add to cart"}
          </button>
        </div>
      </div>
    </Layout>
  );
}

Detail.getInitialProps = async ({ query: { detail } }) => {
  const res = await fetch(
    `https://627d1f2ebf2deb7174e7ee52.mockapi.io/api/v1/getproducts/${detail}`
  );
  const productData = await res.json();

  return {
    productData,
  };
};

export default Detail;
