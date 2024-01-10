export default function updateStudentGradeByCity(students, city, newGrade) {
  return students.filter((student) => student.location === city)
    .map((item) => {
      /* eslint-disable no-param-reassign */
      if (!newGrade.some((grade) => grade.studentId === item.id)) { item.grade = 'N/A'; } else { item.grade = newGrade.find((grade) => grade.studentId === item.id).grade; }
      return item;
    });
}
