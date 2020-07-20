export class Sorter {
  alphabeticSorting(list: string[]) {
    return list.sort(this.sortingCriteria)
  }
  private sortingCriteria(fw: string, sw: string) {
    if (fw > sw) return 1
    if (fw < sw) return -1
    return 0
  }
}
