const grades = [10, 6.5, 8, 7.5]
let sumOfsumOfGrades = 0;

for(let i = 0; i < grades.length; i++){
    sumOfsumOfGrades += grades[i]
}
 
const average = sumOfsumOfGrades / grades.length

console.log(`The average grade in this class is ${average}.`)