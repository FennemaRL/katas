export interface Person {
  age: number
  name: string
}

export class Grouper {
  groupByAge(list: { name: string; age: number }[]) {
    return list.reduce((result: { [key: number]: Person[] }, currentPerson: Person) => {
      if (!(currentPerson.age in result)) result[currentPerson.age] = []
      result[currentPerson.age].push(currentPerson)
      return result
    }, {})
  }
}
