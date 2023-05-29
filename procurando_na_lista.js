const allStudents = ['João', 'Juliana', 'Caio', 'Ana']
/* const grades = [10, 8, 7.5, 9]
const bothLists = [allStudents, grades]

function isOnTheList(student){
    if(bothLists[0].includes(student)){   
    
    //Também poderia ter feito do jeito novo: const [allStudents, grades] = bothLists

    const allStudents = bothLists[0] 
    const grades = bothLists[1] 
    const index = allStudents.indexOf(student)
    const specificGrade = grades[index]
    
    console.log(`${student} está cadastrado e sua média é ${specificGrade}.`)
    
    } else {
        console.log(`Aluno ${student} não foi encontrado no sistema.`)
    }

}

isOnTheList("Juliana") */

console.log(allStudents.sort())