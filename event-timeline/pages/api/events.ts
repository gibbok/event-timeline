import { ResponseEventsAPI } from '@/api/types'
import { eventsData } from '@/stubs/events'
import type { NextApiRequest, NextApiResponse } from 'next'

const validateNumericQueryParamOrDefault = (defaultValue: number) => (query: string | string[] | undefined): number => {
  const parsedValue = Number(!query ? defaultValue : Array.isArray(query) ? query[0] : query)
  if (Number.isNaN(parsedValue)) {
    throw new Error(`Invalid query parameter: ${query}`)
  }
  return parsedValue
}


const getNumericQueryParamOrDefault = validateNumericQueryParamOrDefault(1)

type ServerError = {
  error: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseEventsAPI | ServerError>
) {
  try {
    const { page: pageQueryParam, limit: limitQueryParam } = req.query

    const page = getNumericQueryParamOrDefault(pageQueryParam)
    const limit = getNumericQueryParamOrDefault(limitQueryParam)

    const start = (page - 1) * limit
    const end = start + limit

    return res.status(200).json({
      countEvents: eventsData.length,
      events: eventsData.slice(start, end)
    })
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ error: error.message })
    } else {
      return res.status(500).json({ error: 'Unknown error' })
    }
  }
}
