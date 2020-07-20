import { Adder } from './fennemarl.add-all-numbers'

describe('get the add of all numbers', () => {
  it('get the add of a emptyList is 0', () => {
    let list: number[] = []

    let res = new Adder().getAllnumbers(list) /*addThemAll*/

    expect(res).toBe(0)
  })

  it('get the add of a non empty list', () => {
    let list: number[] = [1, 2]

    let res = new Adder().getAllnumbers(list) /*addThemAll*/

    expect(res).toBe(3)
  })
})
