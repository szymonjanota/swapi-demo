import { Planet } from 'types/Planet'

import { useApiRoot } from './useApiRoot'
import { useResource } from './useResource'

export const usePlanet = (urlOrId: string) => {
  const { data: apiRoot } = useApiRoot()
  return useResource({
    type: Planet,
    baseUrl: apiRoot?.planets,
    urlOrId,
  })
}
