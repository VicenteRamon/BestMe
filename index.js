const questions = [
    "O que aprendi hoje?",
    "O que me deixou aborrecido? e o que eu poderia fazer para melhorar?",
    "O que me deixou feliz hoje?",
    "Quantas pessoas ajudei hoje?",
]

const ask = ( index = 0 ) => {
    process.stdout.write("\n\n" + questions[index] + " - ")
}

ask()

const answer = []

process.stdin.on("data", data => {
    answer.push(data.toString().trim())
    if(answer.length < questions.length) {
        ask(answer.length)
    } else {
        process.exit()
    }
})

process.on('exit', () => {
    console.log(
    `
    Então Ramon!

    Oque você aprendeu hoje foi:
    ${answer[0]}

    Oque te aborreceu e voc~e poderia melhorar foi:
    ${answer[1]}

    Oque te deixou feliz foi:
    ${answer[2]}

    Você ajudou ${answer[3]} pessoas hoje!!
    
    Volte a refletir amanhã!!
    `)
})