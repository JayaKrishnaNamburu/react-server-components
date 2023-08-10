import { normalize } from '@teleporthq/cms-mappers/strapi'

export default async function (params = {}) {
  const urlParams = {
    populate: '*',
    ...(params['filters[id]'] && {
      'filters[id]': params['filters[id]'],
    }),
  }
  const data = await fetch(
    `${process.env.CMS_URL}/api/Authors?${new URLSearchParams(urlParams)}`,
    {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${process.env.CMS_ACCESS_TOKEN}`,
      },
    }
  )
  const response = await data.json()
  return normalize(response)
}
