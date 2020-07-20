export class MaxNumberFinder {
  findMaximum(list: number[]) {
    //precond : the array isn't empty

    let res = list.reduce(
      (prevVal: number, highestVal: number, currentVal: number, list: number[]) =>
        highestVal > currentVal ? highestVal : currentVal
    )
    return res
  }
}
