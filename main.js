const form = document.querySelector('#validationForm')

const validateFirstName = (id) => {
    const input = document.querySelector(id)
    if(input.value.trim() === '') {
        console.log('You have to write a valid name');
        return //setError(input)
      } 
      else if (input.value.length < 2) {
        console.log('You have to write a valid name');
        return //setError(input)
      }
      else {
        console.log('your name is valid')
        return //setSuccess(input)
      }
    
    }

const validateLastName = (id) => {
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
        console.log('your name is valid');
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

    if(password.value.trim() === '') {
      return setError(password)
    }
    else if(test(password.value)) {
      return setError(password)
    }
    else {
      return setSuccess(password)
    }
}

const validateRepeatPassword = (id) => {
    const password = document.querySelector(id)

    if(password.value.trim() === '') {
        return setError(password)
      }
      else if(test(password.value)) {
        return setError(password)
      }
      else {
        return setSuccess(password)
      }
}

const validateCheckbox = (id) => {
    const checkbox = document.querySelector(id)

    if(!checkbox.checked) {
        return setError(checkbox)
      }
      else {
        return setSuccess(checkbox)
      }
}


const errors =[];


form.addEventListener('submit', e => {
    e.preventDefault()

  validateFirstName('#firstName')
  validateLastName('#lastName')
  validateEmail('#email')
  validatePassword('password')
  validatePassword('#repeatPassword')
  validateCheck('#terms')

//     for(let i = 0; i < form.length; i++) {


//         const inputId = '#' form[i].id; 

//         if(form[i].type)
//     }


})