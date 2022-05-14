import { useRouter } from "next/router";
import { css } from "@emotion/react";

const image = css`
  margin-top: 10px;
  height: 100px;
`;

const btn = css`
  margin-bottom: 20px;
  padding: 5px 15px;
  border: none;
  border-radius: 20px;
  background-color: #ddab9f;

  &:hover {
    background-color: #ebd8d0;
  }
`;

function Card({ data, deleteBtn = false, deleteCta = () => {} }) {
  const router = useRouter();

  return (
    <div className="column">
      {data &&
        data.map((el, i) => (
          <div key={`product-${el.name}`} className="child">
            <div onClick={() => router.push(`/${el.id}`)}>
              <img src={el.img} alt={`product-${el.img}`} css={image} />
              <p>{el.name}</p>
              <p>price: {el.price}</p>
            </div>
            {deleteBtn && (
              <button
                css={btn}
                id={`release-btn-${el.id}`}
                aria-label={`release-btn-${el.id}`}
                onClick={() => deleteCta(el.id)}
              >
                Delete
              </button>
            )}
          </div>
        ))}
    </div>
  );
}

export default Card;
