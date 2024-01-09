export default function getStudentIds(arr) {
  if (!Array.isArray(arr)) {
    return [];
  }
  return arr.map((item) => item.id);
}
