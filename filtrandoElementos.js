const students = ["Ana", "Marcos", "Maria", "Mauro"]
const grades = [7, 4.5, 8, 7.5]

const failed = students.filter((student, index) => {
    return grades[index] < 7
})

console.log(failed)