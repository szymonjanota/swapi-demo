import { useQuery } from 'react-query'
import mapValues from 'lodash/mapValues'

import { ApiRoot } from 'types/ApiRoot'
import { castDataToType } from 'utils/castDataToSchema'
import { convertToHttpsUrl } from 'utils/convertToHttpsUrl'

export const apiRootQueryConfig = {
  queryKey: 'api-root',
  queryFn: async () => {
    const response = await fetch(
      typeof process.env.REACT_APP_API_BASE_URL === 'string'
        ? process.env.REACT_APP_API_BASE_URL
        : 'https://swapi.dev/api/'
    )
    return mapValues(
      castDataToType(await response.json(), ApiRoot),
      convertToHttpsUrl
    )
  },
  config: {
    staleTime: Infinity,
    cacheTime: Infinity,
  },
}

export const useApiRoot = () => {
  return useQuery<ApiRoot>(apiRootQueryConfig)
}
