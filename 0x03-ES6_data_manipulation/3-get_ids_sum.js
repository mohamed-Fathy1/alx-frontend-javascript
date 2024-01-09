export default function getStudentIdsSum(students) {
  return students.reduce(
    (prev, curr) => prev + curr.id,
    0,
  );
}
