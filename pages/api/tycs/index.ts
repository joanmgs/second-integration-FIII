import { NextApiRequest, NextApiResponse } from "next";
import { TyC } from "../../../types";
import { tycs } from "../db";

export default function tycsHandlerID(
  req: NextApiRequest,
  res: NextApiResponse<TyC | {}>
) {
  res.status(200).json(tycs);
}
