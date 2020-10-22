import * as t from 'io-ts'
import { getApiResponseForType } from './ApiResponse'

export const Planet = t.type({
  url: t.string,
  name: t.string,
  population: t.string,
})
export type Planet = t.TypeOf<typeof Planet>

export const PlanetsResponse = getApiResponseForType(Planet)
export type PlanetsResponse = t.TypeOf<typeof PlanetsResponse>
