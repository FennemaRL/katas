import { Multiplier } from './fennemarl.power-of-two'

describe('get the Power of Two', () => {
  it('power of 2 in a emptyList', () => {
    let list: number[] = []
    let expected: number[] = []

    let res = new Multiplier().getPowerTwoOf(list)

    expect(res).toStrictEqual(expected)
  })

  it('power of 2 in a non Emptylist ', () => {
    let list: number[] = [1, 2, 3]

    let res = new Multiplier().getPowerTwoOf(list)

    expect(res).toStrictEqual([1, 4, 9])
  })
})
