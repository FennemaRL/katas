export class Grouper {
  groupByAge(list: { name: string; age: number }[]) {
    return list.reduce(
      (result: { [key: number]: string[] }, currentPerson: { age: number; name: string }) => {
        if (!(currentPerson.age in result)) result[currentPerson.age] = []
        result[currentPerson.age].push(currentPerson.name)
        return result
      },
      {}
    )
  }
}
