const grades = [10, 6.5, 8, 7.5]
let sumOfsumOfGrades = 0

for(let grade of grades){
    sumOfsumOfGrades += grade    
    
}
const average = sumOfsumOfGrades / grades.length

console.log(`The average grade in this class is ${average}.`)