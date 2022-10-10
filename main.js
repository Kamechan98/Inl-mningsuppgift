const form = document.querySelector('#validationForm')

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

// const validateLastName = (id) => {
//     const input = document.querySelector(id)

//     if(input.value.trim() === '') {
//         console.log('You have to write a valid name');
//         return setError(input)
//       } 
//       else if (input.value.length < 2) {
//         console.log('You have to write a valid name');
//         return setError(input)
//       }
//       else {
//         console.log('your name is valid');
//         return setSuccess(input)
//       }
    
//     }

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
    else if(repeatPassword.value === '') {
        console.log('Please enter confirm password');
      return setError(password)
    }
    else if('password' !== 'repeatPassword') {
        console.log('Your passwords do not match');
      return setError(password)
    }
    else{
        console.log('Congrats your passwords match') 
        return setSuccess(password)
       
    }  
}

// const validateRepeatPassword = (id) => {
//     const repeatPassword = document.querySelector(id)

//     if(!repeatPassword == password) {
//         console.log('The passwords do not match');
//         return //setError(password)
//       }
//     //   else if(test(repeatPassword.value)) {
//     //     console.log('The passwords do not match');
//     // //     return //setError(password)
//     //   }
//       else {
//         console.log('The passwords match');
//         return //setSuccess(password)
//       }
// }

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

const setSuccess = (inputId) => {
    return true;
  }
  
  const setError = (inputId) => {
    return false;
  }


form.addEventListener('submit', e => {
    e.preventDefault()
})

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

console.log(errors);

if(errors.includes(false)) {
    console.log('Error found')
} 
else { 
    console.log('Success!')
}