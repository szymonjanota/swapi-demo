import { Film } from 'types/Film'

import { useApiRoot } from './useApiRoot'
import { useResource } from './useResource'

export const useFilm = (urlOrId: string) => {
  const { data: apiRoot } = useApiRoot()
  return useResource({
    type: Film,
    baseUrl: apiRoot?.films,
    urlOrId,
  })
}
