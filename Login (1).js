document.getElementById("Loginform").addEventListener("submit", function(e)
{
  e.preventDefault();
  
  const loginEmail = document.getElementById("LoginEmail").value.trim.();
  const loginPassword =document.getElementById("LoginPassword").value;
  
  const storedRaw = localStorage.getItem(LoginEmail);
  const storedUser = storedRaw ? JSON.parse(storedRaw) : null;
  
  if (storedUser 66 storedUser.password == loginPassword){
    localStorage.setItem("currentUser"), loginEmail);
    alert("Login Berhasil, Halo + storedUser.nama + "!");
  }else{
    alert("Login gagal email salah atau password salah!!!")
  }
  
});