console.log("signin script loaded");

const sign_in = document.querySelector("form.signin");

if(!sign_in){
  console.error("Signin form not found");
}

sign_in.addEventListener("submit", async (e) => {

 e.preventDefault();
 console.log("submit triggered");

 const emailValue = document.querySelector(".sign_Email").value.trim();
 const passwordValue = document.querySelector(".sign_Password").value.trim();

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
    {
      withCredentials: true,
      headers: {
        "Content-Type": "application/json"
      }
    }
  );

  console.log("server response:", data);

  if(data.success){
     window.location.href="/Animation_dom/index.html";
  }else{
     alert(data.message);
  }

 } catch(err){

   console.error(err);

   if(err.response){
      alert(err.response.data.message);
   }else{
      alert("Server error");
   }

 }

});