let studant = []
let nome
let noteOne
let noteTwo
let menu

function avereageNote(nota1, nota2) {
    average = ((nota1 + nota2) / 2).toFixed(2)
    return average
}

function printAverage(studant) {
    return `
      A média do(a) aluno(a) ${studant.name} foi de: ${avereageNote(studant.nota1, studant.nota2)}
        `
}

while (menu != 3) {
    menu = Number(prompt(`o que deseja fazer
    1. cadastrar novo candidato
    2. ver os cadidatos e suas medias
    3. sair`))

    switch (menu) {
        case 1:
            nome = prompt("Qual o nome do estudante?")
            noteOne = Number(prompt("Qual a nota da primeira prova?"))
            noteTwo = Number(prompt("?ual o nota da segunda prova?"))
            studant.push({ 'name': nome, 'nota1': noteOne, 'nota2': noteTwo })
            break

        case 2:
            for (let studants of studant) {
                let messageAverage = printAverage(studants)
                if (average <= 7) {
                    alert(`${messageAverage} 
                    Não foi dessa vez ${studants.name}! Tente novamente!`)
                } else {
                    alert(`${messageAverage} 
                    Parabéns! ${studants.name} voce passou`)
                }
            }
            break
        default:
    }

}
alert('Até logo')

