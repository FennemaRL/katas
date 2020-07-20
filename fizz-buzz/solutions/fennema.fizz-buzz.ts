export class FizzBuzzMaker {
  createAFizzBuzz(listlength: number) {
    let listfizzbuzz: string[] = []

    for (let i = 1; i <= listlength; i++) {
      listfizzbuzz = this.addFizzBuzz(i, listfizzbuzz)
    }
    return listfizzbuzz
  }

  private addFizzBuzz(value: number, listfizzbuzz: string[]) {
    let copy = [...listfizzbuzz]

    let option = this.getCase(value)

    switch (option) {
      case 'divBy15':
        copy.push('FizzBuzz')
        break

      case 'divBy3':
        copy.push('Fizz')
        break

      case 'divBy5':
        copy.push('Buzz')
        break
      default:
        copy.push(value.toString())
        break
    }

    return copy
  }

  getCase(value: number) {
    let res = ''

    let isdivBy3 = !(value % 3)
    let isdivBy5 = !(value % 5)
    let isdivBy3N5 = isdivBy3 && isdivBy5

    if (isdivBy3N5) {
      res = 'divBy15'
    }
    if ((isdivBy5 || isdivBy3) && !isdivBy3N5) {
      res = isdivBy5 ? 'divBy5' : 'divBy3'
    }

    return res
  }
}
