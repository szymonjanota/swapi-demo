import * as t from 'io-ts'
import { getApiResponseForType } from './ApiResponse'

export const Film = t.type({
  url: t.string,
  title: t.string,
  release_date: t.string,
  opening_crawl: t.string,
})
export type Film = t.TypeOf<typeof Film>

export const FilmsResponse = getApiResponseForType(Film)
export type FilmsResponse = t.TypeOf<typeof FilmsResponse>
