// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  success: boolean
  errors?:{}
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
const { name , email } = req.body as Record<string , string>

if(name === "moncef" ){
await new Promise((resolve)=> setTimeout(resolve , 1000))

res.status(200).json({
  success:true,

})
}
await new Promise((resolve) => setTimeout(resolve, 1000));
res.status(200).json({
  success: false,
  errors: {
    "errors": "you are not moncef",
  },
});
}
