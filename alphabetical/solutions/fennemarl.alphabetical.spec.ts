import { Sorter } from './fennemarl.alphabetical'
describe('sorting by alphabet', () => {
  it('sorting a emptylist', () => {
    let list: string[] = []

    let result = new Sorter().alphabeticSorting(list)

    let expected: String[] = []

    expect(result).toStrictEqual(expected)
  })

  it('sorting a list with [pepe, pepa] the result is [pepa,pepe]', () => {
    let list = ['pepe', 'pepa']

    let result = new Sorter().alphabeticSorting(list)

    let expected = ['pepa', 'pepe']

    expect(result).toStrictEqual(expected)
  })
})
