import { eventsData } from '@/stabs/events'
import { Events } from '@/types/api'
import type { NextApiRequest, NextApiResponse } from 'next'

const validateNumericQueryParamOrReturnDefault = (defaultValue: number) => (query: string | string[] | undefined) =>
  Number(!query ? defaultValue : Array.isArray(query) ? query[0] : query)


const numericQueryParam = validateNumericQueryParamOrReturnDefault(1)

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Events>
) {
  const { page: pageQueryParam, limit: limitQueryParam } = req.query

  const page = numericQueryParam(pageQueryParam)
  const limit = numericQueryParam(limitQueryParam)

  return res.status(200).json(eventsData.slice(page, limit))
}
