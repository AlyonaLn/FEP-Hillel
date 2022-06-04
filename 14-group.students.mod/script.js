import Group from "./Group.js";
import Student from "./Student.js";

const group = new Group();

group.addStudent(new Student('John', [10, 8]));
group.addStudent(new Student('Alex', [10, 9]));
group.addStudent(new Student('Bob', [6, 10,]));


console.log(group.students.length === 3);
group.addStudent({});
console.log(group.students.length === 3);


console.log(group.getAverageMark() === (10 + 8 + 10 + 9 + 6 + 10) / 6); // 8.83


group.students = [new Student('John', [10, 10, 5, 10])]; // Сделать group.students - readonly
console.log(group.students.length === 3);

