import * as t from 'io-ts'

export const getApiResponseForType = <A>(type: t.Type<A>) =>
  t.type({
    count: t.number,
    next: t.union([t.string, t.null]),
    previous: t.union([t.string, t.null]),
    results: t.array(type),
  })
