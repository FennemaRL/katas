export class Counter {
  conterFruits(list: string[]) {
    return list.reduce((res: { [key: string]: number }, value: string) => {
      if (!(value in res)) res[value] = 0
      res[value] += 1
      return res
    }, {})
  }
}
