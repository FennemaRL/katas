export class MaxNumberFinder {
  highestNumber(list: number[]) {
    //precond : the array isn't empty

    let res = list.reduce((highestVal: number, currentVal: number) =>
      highestVal > currentVal ? highestVal : currentVal
    )
    return res
  }
}
