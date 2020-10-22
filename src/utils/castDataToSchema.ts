import * as t from 'io-ts'
import invariant from 'tiny-invariant'

export const castDataToType = <A, O = A, I = unknown>(
  data: I,
  type: t.Type<A, O, I>
): A => {
  const validation = type.decode(data)
  if ('left' in validation) {
    console.warn(data, validation.left)
  }
  invariant(validation._tag === 'Right', `Data could not be parsed to schema`)

  return validation.right
}
