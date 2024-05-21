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

/*
  TODO css vars for color palette?

  rgb(255, 205, 149)
  rgb(228, 217, 145)
  rgb(189, 227, 160)
  rgb(147, 233, 190)
  rgb(109, 235, 227)
  rgb(98, 233, 255)
  rgb(133, 226, 255)

  rgba(64, 87, 109, .07)
*/
