import { Counter } from './fennemarl.fruit-counter'

describe('fruit counter', () => {
  it('counter the repeated fruist in an emptyList', () => {
    let list: string[] = []
    let expected = {}

    let res = new Counter().conterFruits(list)

    expect(res).toStrictEqual(expected)
  })

  it('counter the repeated fruist in a list', () => {
    let list = ['lemon', 'watermelon', 'cherries', 'lemon']
    let expected = { lemon: 2, watermelon: 1, cherries: 1 }

    let res = new Counter().conterFruits(list)

    expect(res).toStrictEqual(expected)
  })
})
