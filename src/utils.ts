export type GradeSortable = {
  grade: string;
}

export const gradeSorter = (a: GradeSortable, b: GradeSortable) => {
  if (a.grade > b.grade) {
    return 1;
  }
  if (a.grade < b.grade) {
    return -1
  }
  return 0
}
