namespace Subjects {
    export class Subject {
        protected teacher: Teacher;
        set setTeacher(teacher: Teacher) {
            this.teacher.firstName = teacher.firstName;
            this.teacher.lastName = teacher.lastName;
        }
    }
}
