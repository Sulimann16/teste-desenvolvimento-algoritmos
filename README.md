# 🎢 Desafio de Algoritmos: Totem "MegaloDon"

Bem-vindo ao projeto do sistema de autoatendimento da montanha-russa **MegaloDon** do *TechPark*. Este projeto foi estruturado para exercitar o desenvolvimento de lógica, estruturas condicionais (`Se/Senão`) e a prática de *Code Review* (Revisão de Código).

---

## 🚀 Passo a Passo para Iniciar o Projeto

Siga os comandos e etapas abaixo para preparar o seu ambiente de trabalho utilizando o fluxo de Fork:

### 1. Fazer o Fork do Projeto
Antes de clonar, você precisa criar a sua própria cópia deste repositório:
* Clique no botão **"Fork"** no canto superior direito desta página do GitHub.
* Mantenha as configurações padrão e clique em **"Create fork"**.
* Agora, você será redirecionado para a cópia do projeto que está no **seu** perfil.

### 2. Clonar o SEU Repositório
Abra o terminal na pasta onde deseja salvar o projeto e clone o repositório que você acabou de criar (certifique-se de que o link possui o seu usuário do GitHub):
```bash
git clone [COLE_O_LINK_DO_SEU_FORK_AQUI]
```

### 3. Entrar na Pasta do Projeto
```bash
cd [NOME_DA_PASTA_DO_REPOSITORIO]
```

### 4. Instalar as Dependências
O projeto já possui um arquivo `package.json` configurado. Para instalar o pacote `readline-sync` necessário para ler os dados do terminal, execute:
```bash
npm install
```

### 5. Modificar o Arquivo de Código
O arquivo base do desafio está localizado na pasta `src/app.js`. Você irá desenvolver a sua lógica diretamente dentro deste arquivo!

### 6. Como Executar o Sistema
Para testar o seu código a qualquer momento durante o desenvolvimento, execute o comando configurado no npm:
```bash
npm start
```

### 7. Como Salvar e Enviar suas Alterações (Passo a Passo do Commit)
Ao longo do desenvolvimento, é importante salvar o progresso do seu trabalho criando pontos de restauração (commits) e enviando-os para o GitHub. Siga este passo a passo sempre que finalizar uma etapa importante do código:

* **Passo A: Preparar os arquivos modificados**
  Diga ao Git quais alterações você deseja incluir no seu próximo salvamento:
```bash
  git add .
```

* **Passo B: Criar o ponto de salvamento (Commit)**
  Grave as alterações localmente no seu computador, adicionando uma mensagem curta e clara que explique o que você fez:
```bash
  git commit -m "Explique aqui o que foi feito (Ex: tratando erro de nome vazio)"
```

* **Passo C: Enviar para o GitHub**
  Suba todos os commits salvos na sua máquina direto para o servidor do seu repositório remoto:
```bash
  git push origin main
```