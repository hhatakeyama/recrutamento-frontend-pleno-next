// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { estados } from '../../../metadata/estados';

type Data = {
  name: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { uf } = req.query;
  let estado = uf;
  if(uf instanceof Array) {
    estado = uf[0].toUpperCase();
  } else {
    estado = uf.toUpperCase();
  }
  const uf_id = estados.filter((item) => {
    return item.sigla == estado;
  });

  const response = await fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${uf_id[0].id}/municipios`);
  const data = await response.json();

  res.status(200).json(data);
}
