import { useInfiniteQuery } from 'react-query'
import { Type } from 'io-ts'
import invariant from 'tiny-invariant'

import { castDataToType } from 'utils/castDataToSchema'
import { convertToHttpsUrl } from 'utils/convertToHttpsUrl'

export const useInfiniteResource = <
  T extends { next: string | null; previous: string | null }
>(
  type: Type<T>,
  url?: string,
  queryParams?: {
    page?: number
    search?: string
  }
) => {
  const result = useInfiniteQuery(
    [url, queryParams],
    async (
      key?: string,
      params?: {
        search?: string
      },
      next: string | null = null
    ) => {
      invariant(key, 'url is required')

      const url = new URL(next || key)

      if (params?.search) {
        url.searchParams.set('search', params.search)
      }

      const response = await fetch(convertToHttpsUrl(url.toString()))
      const data = await response.json()

      return castDataToType(data, type)
    },
    {
      enabled: Boolean(url),
      getFetchMore: (lastPage) => lastPage.next,
    }
  )
  return result
}
