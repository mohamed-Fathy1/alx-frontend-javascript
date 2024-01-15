var student1 = {
    firstName: 'Mohamed',
    lastName: 'Fathy',
    age: 23,
    location: 'Egypt'
};
var student2 = {
    firstName: 'Ahmed',
    lastName: 'Fathy',
    age: 33,
    location: 'Kuwait'
};
var studentArray = [student1, student2];
var table = document.createElement('table');
table.innerHTML = ("\n        <thead>\n            <tr>\n                <th>firstName</th>\n                <th>lastName</th>\n                <th>age</th>\n                <th>location</th>\n            </tr>\n        </thead>\n        <tbody>\n            ".concat(studentArray.map(function (student) {
    return "\n                    <tr>\n                        <td>".concat(student.firstName, "</td>\n                        <td>").concat(student.lastName, "</td>\n                        <td>").concat(student.age, "</td>\n                        <td>").concat(student.location, "</td>\n                    </tr>\n                ");
}).join(''), "\n        </tbody>\n    "));
document.body.appendChild(table);
//# sourceMappingURL=main.js.map