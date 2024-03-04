let balance = 800;

function getBalance() {
    alert('თქვენი ბალანსი არის : ' + balance)
}

function makeDeposite() {
    let deposite = parseFloat(prompt('რამდენის შეტანა გსურთ?'));
    if (isNaN(deposite) || deposite === '') {
        alert('გთხოვთ ჩაწეროთ რიცხვი!');
        makeDeposite();
    } else {
        balance += deposite;
        getBalance();
} 
}

function makeWithdrawal() {
    let withdrawal = parseFloat(prompt('რამდენის გატანა გსურთ?'));
    if (isNaN(withdrawal) || withdrawal ==='' ){
        alert('გთხოვთ ჩაწეროთ რიცხვი!')
        makeWithdrawal();
    } else {
        balance -= withdrawal;
        getBalance();
    }



}

function atm() {
    let choice = parseInt(prompt('აირჩიეთ : 1.) ბალანსი 2.) დეპოზიტი 3.)თანხის გატანა'));
    if (choice === 1) {
        getBalance();
    } else if (choice === 2) {
        makeDeposite();
    } else if ( choice === 3) {
        makeWithdrawal();
    } else {
        error();
    }

}

atm();