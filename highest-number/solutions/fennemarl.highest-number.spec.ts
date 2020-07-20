import { MaxNumberFinder } from './fennemarl.highest-number'

describe('getHighestNumber', () => {
  it('should get the highest number given a array of one number', () => {
    let actual: number
    let numbers = [42]
    let maxNumberFinder = new MaxNumberFinder()

    actual = maxNumberFinder.findMaximum(numbers)

    expect(actual).toBe(42)
  })

  it('should get the highest number given a array of n numbers', () => {
    let actual: number
    let numbers = [3, 5, 4, 42, 13, 72]
    let maxNumberFinder = new MaxNumberFinder()

    actual = maxNumberFinder.findMaximum(numbers)

    expect(actual).toBe(72)
  })
})
