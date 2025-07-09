// add money to the account

document.getElementById('btn-add-money').addEventListener('click', function(event){
event.preventDefault();

const addMoneyInput = document.getElementById('input-add-money').value;
console.log(addMoneyInput);
// get the pin number provided
const pinNumberInput = document.getElementById('input-pin-number').value;
console.log(pinNumberInput);

// verify pin number
if(pinNumberInput === '1234'){
    console.log('adding money to your account');
    const balance = document.getElementById('account-balance').innerText;
    console.log(balance);

    //  addMoneyInput with balance
    const addMoneyNumber = parseFloat(addMoneyInput);
    const balanceNumber = parseFloat(balance);
    const newBalance = addMoneyNumber + balanceNumber;
    console.log(newBalance);
    

    // update the balance in the UI/DOM
    document.getElementById('account-balance').innerText = newBalance;
    
}
else{
    alert('Failed to add money! please try again.')

}


})