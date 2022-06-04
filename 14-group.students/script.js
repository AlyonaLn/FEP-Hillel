class Group {
    #students = [];

    addStudent(student){
        if(this.isStudent(student)){
            this.#students.push(student);
        }
    }

    isStudent(student) {
        return student instanceof Student;
    }

    getAverageMark(){
        const marksAverageSum = this.getAverageMarkSum();

        return marksAverageSum / this.#students.length;
    }

    getAverageMarkSum() {
        return this.#students.reduce((acc, student) => acc + student.getAverageMark(), 0)
    }

    get students() {
        return this.#students;
    }
}

class Student {
    constructor (name, marks){
        this.name = name;
        this.marks = marks;
    }

    getAverageMark() {
        const marksSum = this.getMarksSum();

        return marksSum / this.marks.length;
    }

    getMarksSum() {
        return this.marks.reduce((acc, mark) => acc + mark);
    }
}

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

