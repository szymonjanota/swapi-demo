import { useQuery } from 'react-query'
import { Type } from 'io-ts'
import { castDataToType } from 'utils/castDataToSchema'
import invariant from 'tiny-invariant'
import { getResourceUrl } from 'utils/resources'
import { convertToHttpsUrl } from 'utils/convertToHttpsUrl'

const fetchResource = async (
  resourceUrl: string,
  urlOrId: string
): Promise<unknown> => {
  const response = await fetch(
    convertToHttpsUrl(getResourceUrl(resourceUrl, urlOrId))
  )
  return response.json()
}

export const useResource = <T>(resource: {
  type: Type<T>
  baseUrl?: string
  urlOrId?: string
}) => {
  const result = useQuery(
    [resource.baseUrl, resource.urlOrId],
    async (resourceUrl: unknown, urlOrId: unknown) => {
      invariant(typeof resourceUrl === 'string', 'resourceUrl is required')
      invariant(typeof urlOrId === 'string', 'urlOrId is required')

      return castDataToType(
        await fetchResource(resourceUrl, urlOrId),
        resource.type
      )
    },
    {
      enabled: Boolean(resource.baseUrl && resource.urlOrId),
    }
  )
  return result
}
