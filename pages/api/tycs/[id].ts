import { NextApiRequest, NextApiResponse } from "next";
import { tycs } from "../db";
import { TyC } from "../../../types";

export default function productsHandler(
  req: NextApiRequest,
  res: NextApiResponse<TyC | {}>
) {
  const { tycs: tycsData } = tycs;
  const {
    query: { id },
    method,
  } = req;
  const filtered = tycsData.filter((tyc) => tyc.id.toString() === id);

  if (method === "DELETE") {
    const index = tycsData.findIndex((tyc) => tyc.id.toString() === id);
    tycsData.splice(index, 1);
    res.status(200).json(filtered[0]);
  }
  if (method === "GET") {
    filtered.length > 0
      ? res.status(200).json(filtered[0])
      : res.status(200).json({ message: "TYC not found" });
  } else {
    res.status(404).json({ message: `Method left` });
  }
}
