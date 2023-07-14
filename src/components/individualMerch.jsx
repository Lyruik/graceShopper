import React, { useEffect } from "react";
import {
  useOutletContext,
  useNavigate,
  useParams,
  Link,
} from "react-router-dom";
import { addToCart } from "../api/util";

export default function IndividualMerch() {
  const { merchId } = useParams();
  const { merch } = useOutletContext();
  const product = merch.find((item) => item.id == merchId);
  // console.log(product);

  const navigate = useNavigate();

  useEffect(() => {
    if (!product) {
      navigate("/merch");
    }
  }, [merch]);

  if (!product) {
    return <div id="page">Loading...</div>;
  }

  return (
    <div id="page">
      <h1>{product.type}</h1>
      <h3>
        <u>
          <p>{product.price}</p>
        </u>
      </h3>
      <h3>
        <u>
          <p>{product.color}</p>
        </u>
      </h3>
      <h3>
        <u>
          <p>{product.size}</p>
        </u>
      </h3>
      <span onClick={() => addToCart(product.id, "merch", 1)}>
        <i className="fa-solid fa-cart-plus add-cart"></i>
      </span>
    </div>
  );
}
