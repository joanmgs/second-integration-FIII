import { NextApiRequest, NextApiResponse } from "next";
import { Product } from "../../../types";
import { products } from "../db";

export default function productsHandlerID(
  req: NextApiRequest,
  res: NextApiResponse<Product | {}>
) {
  res.status(200).json(products);
}
