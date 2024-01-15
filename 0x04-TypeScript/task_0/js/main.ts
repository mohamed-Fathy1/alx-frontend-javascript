interface Student {
    firstName: string,
    lastName: string,
    age: number,
    location: string
}

let student1: Student =  {
    firstName: 'Mohamed',
    lastName: 'Fathy',
    age: 23,
    location: 'Egypt'
}


let student2: Student = {
    firstName: 'Ahmed',
    lastName: 'Fathy',
    age: 33,
    location: 'Kuwait'
}

const studentArray: Student[] = [student1, student2]

const table: HTMLTableElement = document.createElement('table')
table.innerHTML = (`
        <thead>
            <tr>
                <th>firstName</th>
                <th>lastName</th>
                <th>age</th>
                <th>location</th>
            </tr>
        </thead>
        <tbody>
            ${studentArray.map(student => {
                return `
                    <tr>
                        <td>${student.firstName}</td>
                        <td>${student.lastName}</td>
                        <td>${student.age}</td>
                        <td>${student.location}</td>
                    </tr>
                `
            }).join('')}
        </tbody>
    `)

document.body.appendChild(table)

