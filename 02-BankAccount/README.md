
-- EXERCICIO 1 --
Objetivo = Praticar criação de classe, atributos e métodos.

Exercício:
    - Criação de uma classe simples
    - Mostrar saldo na tela
    - verSaldo() Esconder ou mostrar saldo
    - deposditar(), sacar()
    - Após depositar ou sacar, ele fica no histórico

-- EXERCICIO 2 --
Objetivo = Treinar encapsulamento para proteger dados internos da classe.

Exercício:
    - Tornar atributo saldo privado
    - Crie métodos getSaldo() e setSaldo() para acessar ou modificar de forma controlada.
    - Não permita que o saldo fique negativo diretamente.

-- EXERCICIO 3 --
Objetivo = Aprender a criar classes filhas que herdam de uma classe base (herança)
    
Exercício:
    - Crie uma classe ContaPoupanca e outra ContaCorrente que herdam de ContaBancaria.
    - ContaCorrente deve ter um atributo extra chamado limiteChequeEspecial.
    - Modifique o método sacar() da ContaCorrente para permitir que saque até o valor do saldo + limite.
    - Na ContaPoupanca, mantenha o comportamento normal.

-- EXERCICIO 4 --
Objetivo = Praticar polimorfismo, tratando objetos diferentes de forma uniforme.

Exercício:
    - Use as classes ContaCorrente e ContaPoupanca criadas antes.
    - Crie uma função imprimirRelatorio(conta) que exibe:
        - Nome do titular
        - Tipo da conta (Corrente ou Poupança)
        - Saldo disponível
        - Essa função deve funcionar com qualquer tipo de conta, sem precisar saber a classe exata.





let saldo = 0;
let saldoVisivel = false;

// welcome prompt
const nome = prompt("Digite seu nome: ");
const welcome = document.getElementById('welcome');
welcome.append(nome.toUpperCase());

// Elements references
const saldoElement = document.getElementById('saldo');
const toggleButton = document.getElementById('visibility');
const valueDeposit = document.getElementById('depositar');
const btnDeposit = document.getElementById('btnDeposit');
const valueWithdraw = document.getElementById('sacar');
const btnWithdraw = document.getElementById('btnWithdraw');
const historic = document.getElementById('historico');


// function to update the balance
//Usando operador ternário, uma forma curta de escrever if/else
// condiçao (booleano) ? valorSeVerdadeiro : valorSefalso

function atualizarSaldo() {
    saldoElement.innerHTML = saldoVisivel ? ` ${saldo.toFixed(2)}` : "****"
}

// ! a exclamação inverte é um operador de negação lógica
// ele inverte o valor booleano !true -> false

function toggleSaldo() {
    saldoVisivel = !saldoVisivel;
    atualizarSaldo();
}

//deposit function

function deposit(){
    const value = parseFloat(valueDeposit.value)

    if (isNaN(value) || value < 0){
        alert('Please type a valid value.');
        return;
    }

    saldo += value;
    valueDeposit.value = ""  //Após isso preciso zerar a variavel
    atualizarSaldo()
    alert(`Deposito de  ${value.toFixed(2)} feito com sucesso`)

    //Add to historic
    let item = document.createElement('option');
    item.text = `add R$ ${value.toFixed(2)}`;
    item.style.color = "green";
    historic.appendChild(item);
}

// withdraw function

function withdraw(){
    const sacar = parseFloat(valueWithdraw.value);

    if (sacar > saldo){
        alert('Your card was declined!');
        return;
    }

    if (isNaN (sacar) || sacar <= 0){
        alert('Please type a valid number');
        return;
    }

    saldo -= sacar;
    valueWithdraw.value = "";
    atualizarSaldo();
    alert(`Saque no valor de ${sacar.toFixed(2)} realizado`);

    //Add historic
    let item = document.createElement('option');
    item.text = `Withdraw R$ ${sacar.toFixed(2)}`;
    item.style.color = "red"
    historic.appendChild(item);
}

//Events

toggleButton.addEventListener('click', toggleSaldo)
btnDeposit.addEventListener('click', deposit)
btnWithdraw.addEventListener('click', withdraw)



