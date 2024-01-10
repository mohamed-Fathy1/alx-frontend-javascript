export default function updateStudentGradeByCity (students, city, newGrade) {
  return students.filter(student => student.location === city)
    .map(item => {
      /* eslint-disable */
      item.grade = newGrade.find((grade) => grade.studentId === item.id)?.grade ?? 'N/A';
      return item;
    });
}
