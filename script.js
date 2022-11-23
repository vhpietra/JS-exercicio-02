const studentsList = [
  {
    name: 'Victor',
    gradeOne: 7.5,
    gradeTwo: 6.6,
  },
  {
    name: 'Julia',
    gradeOne: 8.9,
    gradeTwo: 9.0,
  },
  {
    name: 'João',
    gradeOne: 3.75,
    gradeTwo: 6.5,
  },
  {
    name: 'Carlos',
    gradeOne: 5.5,
    gradeTwo: 8.25,
  }
]

let average;

function calculateAverage() {
  for(let student of studentsList) {
    average = (student.gradeOne + student.gradeTwo) / 2
    if(average >= 7) {
      alert(`
        A média do(a) aluno(a) ${student.name} é: ${average.toFixed(2)}
          Parabéns, ${student.name}! Você foi aprovado(a).
      `)
    } else {
      alert(`
        A média do(a) aluno(a) ${student.name} é: ${average.toFixed(2)}
          Não foi dessa vez ${student.name}! Tente novamente.
      `)
    }
  }
}

calculateAverage()
