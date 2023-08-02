
//Opacity of navbar: Sticky menu background
 window.addEventListener('scroll',function(){
    if(window.scrollY> 150){
        document.querySelector('#navbar').style.opacity= 0.9;
    }else{
        document.querySelector('#navbar').style.opacity= 1;
    }    
 });

 //Make a hamburger menu for smartphones

//Form validation
const form = document.getElementById('form');
const username = document.getElementById('name');
const email = document.getElementById('email');
const phone = document.getElementById('phone');

//add an eventlistender
form.addEventListener('submit', e =>{
    e.preventDefault();

    validateInputs(); 
});

//shows an error
const setError = (element, message) =>{
    const formgroup = element.parentElement;
    const errorDisplay = formgroup.querySelector('.error');

    errorDisplay.innerText = message;
    formgroup.classList.add('error');
    formgroup.classList.remove('success');
}    

const setSuccess = element=>{
    const formgroup = element.parentElement;
    const errorDisplay = formgroup.querySelector('error');

    errorDisplay.innerText = '';
    formgroup.classList.add('success');
    formgroup.classList.remove('error');
}

//add a validemail function

const validateInputs = () => {
    //get the value of all inputs,trim() removes he whitespaces in the string 
    const nameValue = username.value.trim(); 
    const emailValue = email.value.trim();
    const phoneValue = phone.value.trim();

    //add validation condition
    if(nameValue === ''){
        setError(username, 'Name required');
    }else{
        setSuccess(username);
    }

    if(emailValue === ''){
        setError(email, 'Email is required');
    }else{
        setSuccess(email);
    }
    if(phone === ''){
        setError(phone, 'Phone number is required');
    }else{
        setSuccess(phone);
    }
} 
