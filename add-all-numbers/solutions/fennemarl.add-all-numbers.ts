export class Adder {
  getAllnumbers(list: number[]) {
    return list.reduce((accumulate: number, currentVal: number) => {
      return accumulate + currentVal
    }, 0)
  }
}
