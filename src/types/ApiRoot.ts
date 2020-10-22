import * as t from 'io-ts'

export const ApiRoot = t.type({
  people: t.string,
  planets: t.string,
  films: t.string,
})
export type ApiRoot = t.TypeOf<typeof ApiRoot>
