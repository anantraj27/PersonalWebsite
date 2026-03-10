const sign_in = document.querySelector(".signin");

const sign_email = document.querySelector(".sign_Email");
const sign_password = document.querySelector(".sign_Password");

sign_in.addEventListener("submit", async (e) => {

 e.preventDefault();

 const emailValue = sign_email.value.trim();
 const passwordValue = sign_password.value.trim();

 if (!emailValue || !passwordValue) {
    alert("Please fill all fields");
    return;
 }

 try {

  const { data } = await axios.post(
    `${API}/auth/signin`,
    {
      Email: emailValue,
      password: passwordValue
    },
    { withCredentials:true }
  );

  if(data.success){
     window.location.href="/Animation_dom/index.html";
  }else{
     alert(data.message);
  }

 } catch(err){

   if(err.response){
      alert(err.response.data.message);
   }else{
      alert("Server error");
   }

 }

});


