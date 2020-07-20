import { Filter } from './fennema.filter-even-numbers'

describe('filter even numbers', () => {
  it('filter a empty list', () => {
    let list: number[] = []

    let res = new Filter().filterEvenNumber(list)
    let expected: number[] = []
    expect(res).toStrictEqual(expected)
  })

  it('filter a list with [1,2,3] the result is [2]', () => {
    let list = [1, 2, 3]

    let res = new Filter().filterEvenNumber(list)
    let expected = [2]
    expect(res).toStrictEqual(expected)
  })
})
