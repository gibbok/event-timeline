import { ResponseEventsAPI } from '@/api/types'
import { eventsData } from '@/stabs/events'
import type { NextApiRequest, NextApiResponse } from 'next'

const validateNumericQueryParamOrReturnDefault = (defaultValue: number) => (query: string | string[] | undefined) =>
  Number(!query ? defaultValue : Array.isArray(query) ? query[0] : query)


const numericQueryParam = validateNumericQueryParamOrReturnDefault(1)

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseEventsAPI>
) {
  const { page: pageQueryParam, limit: limitQueryParam } = req.query

  const page = numericQueryParam(pageQueryParam)
  const limit = numericQueryParam(limitQueryParam)

  const start = (page - 1) * limit
  const end = start + limit

  return res.status(200).json({
    countEvents: eventsData.length,
    events: eventsData.slice(start, end)
  })
}
