export const BASE_URL = "https://graceshopperdatabase.onrender.com/api";

export const addToCart = async (productId, type, quant) => {
  console.log(type);
  console.log(productId);
  console.log(quant);

  //   if (!token {})

  console.log("sending request");
  const response = await fetch(`${BASE_URL}/cart`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      ProductType: { type },
      ProductId: { productId },
      quantity: { quant },
    }),
  });
  console.log("awaiting response");
  const result = await response.json();
  console.log(result);
};
