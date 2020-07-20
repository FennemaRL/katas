export class Calculator {
  calculatePrime(calc: string) {
    //prec : the cal has to be spare with space,
    //      the order of the cal must be the following  '{value} {operator} {value}'
    //      the only operators avaliables are : '+' and '-'
    let digits = calc.split(' ')
    if (!(digits.length % 2) || digits.length < 3) {
      return 0
    }
    let operations = digits.filter(x => x === '+' || x === '-')

    let values = digits.filter(v => !(v === '+' || v === '-')).map(x => parseInt(x))
    let res = values[0]
    for (let i = 0; i < operations.length; i++) {
      res = this.doOp(operations[i], res, values[i + 1])
    }
    return res
  }
  private doOp(op: string, leftOp: number, rightOp: number) {
    switch (op) {
      case '+':
        return leftOp + rightOp
      case '-':
        return leftOp - rightOp
      default:
        return 0
    }
  }
  calculate(calc: string) {
    let tosum = calc
      .replace(/- -/g, ' + ')
      .replace(/ - /g, ' + -')
      .split(' ')
      .filter(x => !(x === '+'))
      .map(x => parseInt(x))
    return tosum.reduce((total, actual) => total + actual)
  }
}
