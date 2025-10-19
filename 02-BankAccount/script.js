
//Welcome name
const welcome = document.getElementById('welcome')
const nome = prompt('Type your name: ')
welcome.append(nome)

//iniciating the atributes

let saldo = 0;
let toggleView = false;

//elements references

const balance = document.getElementById('saldo')
const view = document.getElementById('visibility')
const deposit = document.getElementById('depositar')
const btn_deposit = document.getElementById('btnDeposit')
const withdraw = document.getElementById('withdraw')
const btn_withdraw = document.getElementById('btnWithdraw')
const historic = document.getElementById('historico')

// Visualization function

function viewBalance(){
    toggleView = !toggleView;
    balance.innerHTML = toggleView ? `${saldo.toFixed(2)}` : "****";
}

function depositing(){

    const value = parseFloat(deposit.value)

    if (isNaN(value) || value < 0) {
        alert('Please type a valid number!')
        return;
    }

    saldo += value
    balance.innerHTML = saldo.toFixed(2)
    alert(`congratulation you increase R$ ${value}.`)

    const item = document.createElement('option');
    item.text = `deposit ${value}`;
    item.style.color = 'green';
    item.style.fontSize = '1em'
    historic.appendChild(item);
}

function withdrawing () {

    const value = parseFloat(withdraw.value);

    if (isNaN(value) || value <= 0){
        alert('Please type a valid number. ')
        return;
    }

    if (value > saldo){
        alert('your card was declined')
        return;
    }

    saldo -= value
    balance.innerHTML = saldo.toFixed(2)
    alert(`withdraw R$ ${value}.`)

    const item = document.createElement('option');
    item.text = `withdraw ${value}`;
    item.style.color = 'red';
    item.style.fontSize = '1em'
    historic.appendChild(item);
}


//listener
view.addEventListener('click', viewBalance)
btn_deposit.addEventListener('click', depositing)
btn_withdraw.addEventListener('click', withdrawing)