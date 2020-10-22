import { CharactersResponse } from 'types/Character'

import { useApiRoot } from './useApiRoot'
import { useInfiniteResource } from './useInfiniteResource'

export const useCharacters = (options?: { search?: string; page?: number }) => {
  const { data: apiRoot } = useApiRoot()
  return useInfiniteResource(CharactersResponse, apiRoot?.people, options)
}
