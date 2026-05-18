const readline = require('readline-sync')

function iniciarTotem() {
    console.log("=== BEM-VINDO AO TECHPARK ===")
    console.log("Iniciando o sistema da Montanha-Russa MegaloDon...\n")

    // 1 ENTRADA E VALIDACAO DO NOME
    let nome = readline.question("Digite o nome do cliente: ")

    if (nome === "") {
        console.log("[ERRO] O nome do cliente não pode estar vazio!")
        return
    }

    // 2 ENTRADA E VALLIDACAO DE IDADE
    let idade = readline.questionInt("Digite a idade do cliente: ")

    if (idade <= 0 || idade > 120) {
        console.log("[ERRO] Idade inválida! Digite um valor entre 1 e 120.")
        return
    }

    // 3 ENTRADA E VALIDAÇÃO DA ALTURA
    let altura = readline.questionFloat("Digite a altura do cliente (ex: 1.75): ")

    if (altura <= 0.50 || altura > 2.50) {
        console.log("[ERRO] Altura inválida! A altura deve estar entre 0.50m e 2.50m.")
        return
    }

    // 4REGRAs
    let temIdade = idade >= 12
    let temAltura = altura >= 1.50

    if (temIdade && temAltura) {
        console.log(`Olá, ${nome}! Cadastro validado com sucesso. Seu acesso foi PERMITIDO. Divirta-se na MegaloDon!`)
    } else if (!temIdade && temAltura) {
        console.log(`[ACESSO NEGADO] - ${nome}, você possui a altura necessária, mas não atingiu a idade mínima de 12 anos.`)
    } else if (temIdade && !temAltura) {
        console.log(`[ACESSO NEGADO] - ${nome}, você possui a idade necessária, mas não atingiu a altura mínima de 1.50m.`)
    } else {
        console.log(`[ACESSO NEGADO] - ${nome}, o acesso foi recusado porque você não possui a idade mínima (12 anos) e nem a altura mínima (1.50m).`)
    }
}

iniciarTotem()