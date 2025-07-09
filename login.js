// console.log('button clicking file added');
document.getElementById('btn-login').addEventListener('click', function(event){
    event.preventDefault();
    // console.log('login  button click');

    const phoneNumber = document.getElementById('phone-number').value;
    

    console.log(phoneNumber);
    
    const pinNumber = document.getElementById('pin-number').value;
    console.log(pinNumber);
    

    //---------
    
    if(phoneNumber === '5' && pinNumber=== '1234'){
    console.log('you are logged in');
    
     window.location.href = 'home.html'
}

else{
    alert('Wrong phone number or Pin');
}

})
 

