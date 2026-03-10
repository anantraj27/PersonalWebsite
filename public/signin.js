
const API = "https://personalwebsite-1-9nzz.onrender.com";
const form = document.getElementById("signinForm");

if(!form){
  console.error("Signin form not found");
}

form.addEventListener("submit", async (e) => {

  alert("click bhi ho rha hai ");

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
        withCredentials: true
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