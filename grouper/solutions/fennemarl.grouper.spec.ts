import { Grouper } from './fennemarl.grouper'

describe('Group people by age', () => {
  it('Group a emptylist of persons', () => {
    let list: { name: string; age: number }[] = []

    let result = new Grouper().groupByAge(list)

    let expected = {}

    expect(result).toStrictEqual(expected)
  })

  it('Group a list of persons', () => {
    let pepe = { name: 'pepe', age: 23 }
    let pepa = { name: 'pepa', age: 1 }
    let lu = { ...pepe, name: 'lu' }
    let list: { name: string; age: number }[] = []
    list.push(pepe)
    list.push(lu)
    list.push(pepa)

    let result = new Grouper().groupByAge(list)

    let expected = { 23: ['pepe', 'lu'], 1: ['pepa'] }

    expect(result).toStrictEqual(expected)
  })
})
