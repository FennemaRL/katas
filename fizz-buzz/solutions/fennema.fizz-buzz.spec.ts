import { FizzBuzzMaker } from './fennema.fizz-buzz'
describe('fizz buzz', () => {
  it('create a fizz buzz list with 0 length', () => {
    let result = new FizzBuzzMaker().createAFizzBuzz(0)

    expect(result).toStrictEqual([])
  })

  it('create a fizz buzz list with 15 length', () => {
    let result = new FizzBuzzMaker().createAFizzBuzz(15)

    expect(result).toStrictEqual([
      '1',
      '2',
      'Fizz',
      '4',
      'Buzz',
      'Fizz',
      '7',
      '8',
      'Fizz',
      'Buzz',
      '11',
      'Fizz',
      '13',
      '14',
      'FizzBuzz'
    ])
  })
})
