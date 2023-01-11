// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

export interface IJsonResposen {
  data: IUserData[];
  page: number;
  per_page: number;
  total: number;
}

export interface IUserData {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
}

const userArray: IUserData[] = [
  {
    id: 1,
    email: "otter0104@innodep.com",
    first_name: "jin",
    last_name: "lee",
  },
  {
    id: 2,
    email: "otter0104@innodep.com",
    first_name: "jang",
    last_name: "misu",
  },
  {
    id: 3,
    email: "otter0104@innodep.com",
    first_name: "park",
    last_name: "insu",
  },
  {
    id: 4,
    email: "otter0104@innodep.com",
    first_name: "kim",
    last_name: "lee",
  },
  {
    id: 5,
    email: "otter0104@innodep.com",
    first_name: "jin",
    last_name: "lee",
  },
];

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<IJsonResposen>
) {
  res.status(200).json({ page: 1, per_page: 5, total: 12, data: userArray });
}
