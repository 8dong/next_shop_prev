import { NextApiRequest, NextApiResponse } from 'next';
import productItems from '../../data/productsItem';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const startIndex = req.body.startIndex;
  let endIndex = startIndex + 5;

  if (startIndex + 5 >= productItems.length) {
    endIndex = productItems.length;
    const fetchedProductItems = productItems.slice(startIndex, endIndex);

    res.status(200).json({ fetchedProductItems, isDone: true });
    return;
  }

  const fetchedProductItems = productItems.slice(startIndex, endIndex);

  res.status(200).json({ fetchedProductItems, isDone: false });
}
