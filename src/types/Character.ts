import * as t from 'io-ts'
import { getApiResponseForType } from './ApiResponse'

export const Character = t.type({
  name: t.string,
  homeworld: t.string,
  url: t.string,
  films: t.array(t.string),
})
export type Character = t.TypeOf<typeof Character>

export const CharactersResponse = getApiResponseForType(Character)
export type CharactersResponse = t.TypeOf<typeof CharactersResponse>
