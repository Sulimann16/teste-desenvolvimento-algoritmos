const readline = require('readline-sync');

// =================================================================
// DESAFIO: TOTEM MEGALODON
// =================================================================

function iniciarTotem() {
    console.log("\n==============================");
    console.log("=== BEM-VINDO AO TECHPARK ===");
    console.log("==============================\n");
    console.log("Iniciando o sistema da Montanha-Russa MegaloDon...\n");

    // EXEMPLO DE ENTRADA:
    // O readline.question() lê o que o usuário digita como TEXTO (String)

    // =================================================================
    // VERIFICAÇÃO DE NOME:
    let nome = "";
    let idade = "";
    let altura = "";
    while (nome === "" || /\d/.test(nome)) {
        nome = readline.question("Digite o nome do cliente: ");
        if (nome === "") //Verifica se o nome é vazio
        {
            console.log("[ERRO] O nome do cliente não pode estar vazio!\n");
        }
        else if (/\d/.test(nome)) {
            console.log("[ERRO] O nome do cliente não pode ser um número!\n");
        }
    }

    // =================================================================
    // VERIFICAÇÃO DE IDADE:

    while (idade === "" || /[a-zA-Z]/.test(idade)) {
        idade = readline.question(nome + ", digite sua idade: ");
          if (idade <= 0 || idade > 120) //Verifica se a idade é um número positivo e dentro de um limite razoável.
    {
        console.log("[ERRO] Idade inválida! Digite um valor entre 1 e 120.\n");
        return
    }
        if (/[a-zA-Z]/.test(idade)) {
            console.log("[ERRO] Idade inválida! A idade deve ser um número inteiro.\n");
        } else if (idade === "") {
            console.log("[ERRO] A idade do cliente não pode estar vazia!\n");
        }

    }

    // =================================================================
    // VERIFICAÇÃO DA ALTURA:

    while (altura === "" || /[a-zA-Z]/.test(altura)) {
        altura = readline.question("Digite a sua altura " + nome + " :");
        if (/[a-zA-Z]/.test(altura)) {
            console.log("[ERRO] Altura inválida! A altura deve ser um número decimal.\n");
        } else if (altura === "") {
            console.log("[ERRO] A altura do cliente não pode estar vazia!\n");
        }
    }

    // =================================================================
    //VERIFICAÇÃO FINAL DE ACESSO:

    if (altura >= 1.50 && idade < 12) //Verifica se o cliente tem a altura necessária, mas não atingiu a idade mínima.
    {
        console.log("[ACESSO NEGADO] " + nome + ", você possui a altura necessária, mas não atingiu a idade mínima de 12 anos.\n")
    }

    else if (idade >= 12 && altura < 1.50) //Verifica se o cliente tem a idade necessária, mas não atingiu a altura mínima.
    {
        console.log("[ACESSO NEGADO] " + nome + ", você possui a idade necessária, mas não atingiu a altura mínima de 1.50m.\n")
    }

    else if (idade < 12 && altura < 1.50) //Verifica se o cliente não atende aos requisitos de idade e altura para acessar a montanha-russa.
    {
        console.log("[ACESSO NEGADO] " + nome + ", o acesso foi recusado porque você não possui a idade mínima (12 anos) e nem a altura mínima (1.50m).\n")
    }
    else //Verifica se o cliente atende aos requisitos de idade e altura para acessar a montanha-russa.
    {
        console.log("Olá, " + nome + "! Cadastro validado com sucesso. Seu acesso foi PERMITIDO. \n Divirta-se na MegaloDon!\n");
    }

}

//Iniciando o sistema do Totem MegaloDon
iniciarTotem();
