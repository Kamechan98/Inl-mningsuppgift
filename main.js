const form = document.querySelector('#validationForm')
const btn = document.querySelector('#btn');


const validateText = (id) => {
    const input = document.querySelector(id)

    if(input.value.trim() === '') {
        console.log('You have to write a valid name');
        return setError(input)
      } 
      else if (input.value.length < 2) {
        console.log('You have to write a valid name');
        return setError(input)
      }
      else {
        console.log('your name is valid')
        return setSuccess(input)
      }
    }

const validateEmail = (id) => {
    const email = document.querySelector(id)

    const regEx = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,6}$/

    if(email.value.trim() === '') {
        console.log('You have to write a valid email');
      return setError(email)
    }
    else if(!regEx.test(email.value)) {
        console.log('You have to write a valid email');
      return setError(email)
    }
    else {
        console.log('your email is valid')
      return setSuccess(email)
    }
}

const validatePassword = (id) => {
    const password = document.querySelector(id)
    const repeatPassword = document.querySelector('#repeatPassword')

    if(password.value === '') { 
    console.log('Please enter a password')
    return 
    }

    else if(password.value.length < 6 || password.value.length > 15) {
    console.log ('Password needs to be at least 6 characters but no more than 15')
    return setError(password)
    }

    else if(repeatPassword.value === '') {
        console.log('Please enter confirm password');
      return setError(password)
    }
    else if(password.value !== repeatPassword.value) {
        console.log('Your passwords do not match');
      return setError(password)
    }
    else{
        console.log('Congrats your passwords match') 
        return setSuccess(repeatPassword)
       
    }  
}

const validateCheckbox = (id) => {
    const checkbox = document.querySelector(id)

    if(!checkbox.checked) {
        console.log('You need to accept the terms');
        return setError(checkbox)
      }
      else {
        console.log('You have accepted the terms');
        return setSuccess(checkbox)
      }
    }

const setSuccess = (input) => {
    return true;
  }
  
  const setError = (input) => {
    return false;
  }


form.addEventListener('submit', e => {
    e.preventDefault()


//   validateFirstName('#firstName')
//   validateLastName('#lastName')
//   validateEmail('#email')
//   validatePassword('#password')
//   validatePassword('#repeatPassword')
//   validateCheckbox('#terms') 
const errors =[];    

    for(let i = 0; i < form.length; i++) {
        const inputId = '#' + form[i].id
        
        if(form[i].type === 'text') {
        errors[i] = validateText(inputId)
    }
    
    else if(form[i].type === 'email'){
        errors[i] = validateEmail(inputId)
    }

    else if(form[i].type === 'password'){
        errors[i] = validatePassword(inputId)
    }

    else if(form[i].type === 'checkbox') {
        errors[i] =validateCheckbox(inputId)
    }
}


const user ={
    firstName:(firstName).value,
    lastName: (lastName).value,
    email: (email).value,
    password:(password).value,
}
console.log(user)

})