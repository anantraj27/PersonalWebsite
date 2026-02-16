

/*                  Name Input Validation                              */

const username = document.querySelector(".username");
const nameMessage=document.querySelector("#nameMessage") ;
let nameValidation =false;
username.addEventListener("blur" , function(){
    const name=(username.value).trim() 
    const nameRegularExpression = /^([A-Za-z\s]+)*$/ ;
    const namecheck =(nameRegularExpression.test(name));
   
    if(!namecheck){
        nameMessage.innerHTML=(`special character OR  numbers are  not  Valid Name `)  
        nameMessage.style.color='red';
         nameValidation =false ;
    }
    if(namecheck){
        nameMessage.innerHTML="";
        nameValidation=true ;
    }
    });
//    username.addEventListener("blur", function () {
//   if (!nameValidation) {
//     // username.value = "";
//     nameMessage.innerHTML=""; // agar valid nahi tha, to input clear kar do
//   }
// });

/*                    Email Input Validation                              */

const emailRegex = /^[a-zA-Z0-9._%+-]+@(outlook\.com|hotmail\.com|live\.com|yahoo\.com|icloud\.com|zoho\.com|proton\.me|aol\.com|yandex\.com|gmail\.com|gmx\.com)$/;

const userEmail =document.querySelector(".userEmail");
const emailMessage =document.querySelector("#emailMessage");
let emailValidation=false

userEmail.addEventListener("blur" ,function(){
  if(userEmail.value){
  const email =(userEmail.value).trim();
  const emailCheck =emailRegex.test(email);

  if(!emailCheck)
  {
    emailMessage.innerHTML=`This Syntex of your Email Not Follow Standard Please Check`
    emailMessage.style.color='red'
    emailValidation=false
  }
  if (emailCheck)
  {
  emailValidation=true
  emailMessage.innerHTML=""
  }
  }
  else{
    emailMessage.innerHTML=""
  }

})

/*                   Password validation                                                               */

const passworRegex=/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&*])[a-zA-Z0-9@#$%^&*]{8,}$/
const userPasword=document.querySelector(".userPassword");
const passwordMessage=document.querySelector("#passwordMessage");
let passwordValidation =false
userPasword.addEventListener("blur" ,function(){
  if(userPasword.value)
  {
    const password=(userPasword.value).trim();
    const passwordCheck= passworRegex.test(password);

    if(!passwordCheck)
    {
      passwordMessage.innerHTML=`Password must contain mixture ,lowercase,uppercase,symbols and minimum length 8  `
      passwordMessage.style.color='red'
      passwordValidation=false

    }
    else
    {
      passwordValidation=true
      passwordMessage.innerHTML=""

    }

  }
  else 
  {
     passwordMessage.innerHTML=""
  }
})

//  validating the submision ....
let name =document.getElementById('name')
let email=document.getElementById('email');
let Password =document.getElementById("Passsword")

console.log(name)
console.log(Password)
let submission =document.querySelector('form')

submission.addEventListener('submit', async function(event){


  if(!passwordValidation || !nameValidation || !emailValidation){
    event.preventDefault();
    alert('fix error')
    return;
  }

event.preventDefault();
  try {
    const {data} = await axios.post("/signup", {
      Name: name.value,
      Email: email.value,
       password : Password.value
    });

    if (data.success) {
      alert(data.message);
      location.href = "/signin";
    }
    else{
      alert(data.message);
    }

  } catch (err) {
  alert(` Status : ${err.response.status } ${err.response.data.message}`)
  }


  
})
