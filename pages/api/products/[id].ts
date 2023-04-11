import { NextApiRequest, NextApiResponse } from "next";
import { products } from "../db";
import { Product } from "../../../types";

export default function productsHandlerID(
  req: NextApiRequest,
  res: NextApiResponse<Product | {}>
) {
  const {
    query: { id },
    method,
  } = req;
  const filtered = products.filter((product) => product.id.toString() === id);

  if (method === "DELETE") {
    const index = products.findIndex((product) => product.id.toString() === id);
    products.splice(index, 1);
    res.status(200).json(filtered[0]);
  }
  if (method === "GET") {
    filtered.length > 0
      ? res.status(200).json(filtered[0])
      : res.status(200).json({ message: "Product not found" });
  } else {
    res.status(404).json({ message: `Method left` });
  }
}
