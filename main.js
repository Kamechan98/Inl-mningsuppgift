const form = document.querySelector('#validationForm') 
const btn = document.querySelector('#btn');
const div = document.querySelector('#errorMessage') //Kallar på errormessage
//const div = document.getElementById("errorMessage")

const errors = [];                   // en tom array som fångar upp eventuella fel i formuläret

const setSuccess = (input) => {     // Deklarerar setSuccess som en funktion som tar emot referens från input som returnarsom true
    return true;
  }
  
  const setError = (input) => {     // Deklarerar setError som en funktion som tar emot referens från input som returnar som false
    return false;
  }


const validateText = (id) => {
    const input = document.querySelector(id)  //Hämtar en referens med hjälp av ett id från html
    const regExTxt = /^[a-zA-ZäöüßÄÖÜ]$/ //Tillåter namn med alla bokstäver i alfabetet, plus bindestreck

    if(input.value.trim() === '') {
        // console.log(input.id + ' You have to write a valid name');
        console.log(`You have to write a valid ${input.name}`)
        
        input.classList.add('error');
        input.classList.remove('success');

        return setError(input);                  //Kallar på setError och kör den här funktionen med referens som vi får från id
      } 
      else if (input.value.length < 2) {
        console.log(`You have to write a valid ${input.name}`)
        //console.log('You have to write a valid name');

        input.classList.add('error');
        input.classList.remove('success');

        return setError(input);
      }
      else {
        console.log('your name is valid');
        
        input.classList.add('success');
        input.classList.remove('error');

        return setSuccess(input);            //Kallar på setSuccess och kör den här funktionen med referens som vi får från id
      }
    }

    const validateEmail = (id) => {
    const email = document.querySelector(id)

    const regEx = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,6}$/

    if(email.value.trim() === '') {
        console.log('You have to write a valid email');

        email.classList.add('error')
        email.classList.remove('success')

      return setError(email)
    }
    else if(!regEx.test(email.value)) {
        console.log('You have to write a valid email');

        email.classList.add('error')
        email.classList.remove('success')
      return setError(email)
    }
    else {
        console.log('your email is valid')
      
        email.classList.add('success');
        email.classList.remove('error');
        return setSuccess(email)
    }
}

const validatePassword = (id) => {
    const password = document.querySelector(id)
    const repeatPassword = document.querySelector('#repeatPassword')
    
    const pswStr = /^(?=[^A-Z]*[A-Z])(?=[^a-z]*[a-z])(?=[^0-9]*[0-9]).{6,}$/; //Ett lösenord måste ha minst 6 karaktärer, en stor och liten bokstav och ett nummer

    if(password.value === '') { 
    console.log('Please enter a password')

    password.classList.add('error')
    password.classList.remove('success')
    return setError(password)
    }

    else if(password.value.length < 6 || password.value.length > 10) {
    console.log ('Password needs to be at least 6 characters but no more than 10')

    password.classList.add('error')
    password.classList.remove('success')
    return setError(password)
    }

    else if(repeatPassword.value === '') {
        console.log('Please enter confirm password');
        
        password.classList.add('error')
        password.classList.remove('success')
      return setError(password)
    }
    else if(password.value !== repeatPassword.value) {
        console.log('Your passwords do not match');

        password.classList.add('error')
        password.classList.remove('success')
      return setError(password)
    }
    else{
        console.log('Congrats your passwords match') 

        password.classList.add('success')
        password.classList.remove('error')

        return setSuccess(repeatPassword)
       
    }  
}

const validateCheckbox = (id) => {
    const checkbox = document.querySelector(id)

    if(!checkbox.checked) {
        console.log('You need to accept the terms');
       
        checkbox.classList.add('error')
        checkbox.classList.remove('success')
        return setError(checkbox)
      }
      else {
        console.log('You have accepted the terms');
        
        checkbox.classList.add('success')
        checkbox.classList.remove('error')
        
        return setSuccess(checkbox)
      }
    }

form.addEventListener('submit', e => { //ett event som lyssnar efter en 'submit' och sedan skickar det vi skrivit
    e.preventDefault()      //Hindrar sidan från att ladda om

 //validateFirstName('#firstName')
//validateLastName('#lastName')
//   validateEmail('#email')
//   validatePassword('#password')
//   validatePassword('#repeatPassword')
//   validateCheckbox('#terms') 


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


// tar id:et från alla inputs och tar in infon som skrivs in i formuläret i ett user object. 
const user ={
    firstName:(firstName).value,
    lastName: (lastName).value,
    email: (email).value,
    password:(password).value,
}
console.log(user)

if(errors.includes(false)) {
    console.log('Something went wrong') 
    div.classList.remove("d-none")    //* Kallar på errorMessage och tar d-none på html'en
  }
else {
    console.log('You made it!');
    div.classList.add("d-none");
}



})