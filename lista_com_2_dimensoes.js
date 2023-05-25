const students = ["João", "Juliana", "Caio", "Ana"]
const grades = [10, 8, 7.5, 9]

const bothLists = [students, grades]

console.log(bothLists)


//1º parâmetro é pra qual lista vai consultar, o 2º é pra qual elemento dessa lista vai consultar                                             
console.log(`A aluna na posição 1 é ${bothLists[0][1]}, e sua média foi de ${bothLists[1][1]}.`)