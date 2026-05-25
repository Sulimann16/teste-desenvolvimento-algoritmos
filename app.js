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
        if (/[a-zA-Z]/.test(idade)) {
            console.log("[ERRO] Idade inválida! A idade deve ser um número inteiro.\n");
        } else if (idade === "") {
            console.log("[ERRO] A idade do cliente não pode estar vazia!\n");
        } else if (idade <= 0 || idade > 120) {
            console.log("[ERRO] Idade inválida! Digite um valor entre 1 e 120.");
            return;
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
        } else if (altura <= 0.50 || altura > 2.50) {
            console.log("[ERRO] Altura inválida! A altura deve estar entre 0.50m e 2.50m.");
            return;
        }
    }
    // =================================================================
    //VERIFICAÇÃO FINAL DE ACESSO:

    // =================================================================
    // VERIFICAÇÃO FINAL DE ACESSO:

    if (idade >= 12 && altura >= 0.50) {
        console.log("\nOlá, " + nome + "! Cadastro validado com sucesso.");
        console.log("\nSeu acesso foi PERMITIDO " + nome + ". Divirta-se na MegaloDon!");
    }

    else if (altura >= 0.50 && idade < 12) {
        console.log("\n[ACESSO NEGADO] - " + nome +
            ", você possui a altura necessária, mas não atingiu a idade mínima de 12 anos.");
    }

    else if (idade >= 12 && altura < 0.50) {
        console.log("\n[ACESSO NEGADO] - " + nome +
            ", você possui a idade necessária, mas não atingiu a altura mínima de 0.50m.");
    }

    else if (idade < 12 && altura < 0.50) {
        console.log("\n[ACESSO NEGADO] - " + nome +
            ", o acesso foi recusado porque você não possui a idade mínima (12 anos) e nem a altura mínima (0.50m).");
    }
}

iniciarTotem();
