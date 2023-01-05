// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";
import {
  IDeplomacyList,
  IResultCode,
} from "../../../types/deplomacy-interface";

interface Data {
  data: IResultCode<IDeplomacyList>;
}

const baseUrl =
  "http://apis.data.go.kr/1262000/OverviewKorRelationService/getOverviewKorRelationList";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<IResultCode<IDeplomacyList>>
) {
  const { pageNumber } = req.query;
  console.log("pageNumber", pageNumber);

  const url = `${baseUrl}?serviceKey=${process.env.REACT_APP_DEPLO_API_KEY}&pageNo=${pageNumber}&numOfRows=10`;
  const nationList = await axios.get(url);

  res.status(200).send(nationList.data);
}
