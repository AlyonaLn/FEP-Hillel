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
        return this.#students.reduce((acc, srudent) => acc + student.getAverageMark(), 0)
    }

    get students() {
        return this.#students;
    }
}

export default Group;