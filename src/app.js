const readline = require('readline-sync');

// =================================================================
// DESAFIO: TOTEM MEGALODON
// =================================================================

function iniciarTotem() {
    console.log("=== BEM-VINDO AO TECHPARK ===");
    console.log("Iniciando o sistema da Montanha-Russa MegaloDon...\n");

    // EXEMPLO DE ENTRADA:
    // O readline.question() lê o que o usuário digita como TEXTO (String)

    // =================================================================
    // VERIFICAÇÃO DE NOME:

    let nome = readline.question("Digite o nome do cliente: ");
    if (nome === "") //Verifica se o nome é vazio
    {
        console.log("[ERRO] O nome do cliente não pode estar vazio!\n");
        return
    }

    else if (!isNaN(nome)) //Verifica se o nome é um número.
    {
        console.log("[ERRO] O nome do cliente não pode ser um número!\n");
        return
    }

    else //Se o nome for válido, exibe a mensagem de boas-vindas.
    {
        console.log("\nOlá " + nome + ", Seja bem vindo a montanha-russa MegaloDon!\n");
    }

    // =================================================================
    // VERIFICAÇÃO DE IDADE:

    let idade = readline.questionInt(nome + ", digite sua idade: ");
    if (idade <= 0 || idade > 120) //Verifica se a idade é um número positivo e dentro de um limite razoável.
    {
        console.log("[ERRO] Idade inválida! Digite um valor entre 1 e 120.\n");
        return
    }

    else //Se a idade for válida, exibe a mensagem de registro bem-sucedido.
    {
        console.log("\nIdade " + idade + " anos, registrada com sucesso!\n");
    }

    // =================================================================
    // VERIFICAÇÃO DA ALTURA:

    let altura = readline.questionFloat("Digite a sua altura " + nome + " :");

    if (altura <= 0.50 || altura > 2.50) //Verifica se a altura é permitida para a montanha-russa (entre 0.50m e 2.5m).
    {
        console.log("[ERRO] Altura inválida! A altura deve ser entre 0.50m e 2.5m.\n");
        return
    }

    else //Se a altura for válida, exibe a mensagem de registro bem-sucedido. 
    {
        console.log("\nAltura " + altura + " metros, registrada com sucesso!\n");
    }

    // =================================================================
    //VERIFICAÇÃO FINAL DE ACESSO:

    if (idade >= 12 && altura >= 1.50) //Verifica se o cliente atende aos requisitos de idade e altura para acessar a montanha-russa.
    {
        console.log("Olá, " + nome + "! Cadastro validado com sucesso. Seu acesso foi PERMITIDO. \n Divirta-se na MegaloDon!\n");
    }

    else if (altura >= 1.50 && idade < 12) //Verifica se o cliente tem a altura necessária, mas não atingiu a idade mínima.
    {
        console.log("[ACESSO NEGADO]" + nome + ", você possui a altura necessária, mas não atingiu a idade mínima de 12 anos.\n")
    }

    else if (idade >= 12 && altura < 1.50) //Verifica se o cliente tem a idade necessária, mas não atingiu a altura mínima.
    {
        console.log("[ACESSO NEGADO]" + nome + ", você possui a idade necessária, mas não atingiu a altura mínima de 1.50m.\n")
    }

    else if (idade < 12 && altura < 1.50) //Verifica se o cliente não atende aos requisitos de idade e altura para acessar a montanha-russa.
    {
        console.log("[ACESSO NEGADO]" + nome + ", o acesso foi recusado porque você não possui a idade mínima (12 anos) e nem a altura mínima (1.50m).\n")
    }

}

//Iniciando o sistema do Totem MegaloDon
iniciarTotem();
