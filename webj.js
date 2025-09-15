

/*const startBtn = document.getElementById("startBtn"); 
const signBtn = document.getElementById("signBtn");
const loginBtn = document.getElementById("loginBtn");
const upBtn = document.getElementsByClassName("up");

const generateBtn = document.getElementById("generateBtn");
const inputBox = document.querySelector(".input-box");
const inputbox2 = document.getElementsByClassName("ov21")
const inputbox3 = document.getElementsByClassName("ov22")
const upBtn2 = document.getElementsByClassName("up2");
const lobtn = document.getElementById("lobtn");
const lotext = document.getElementById("lotext");




generateBtn.addEventListener("click", () => {
inputBox.classList.add("show");

});




 function openDialog() {
      
      document.getElementById("overlay").style.display = "flex";

 };
    function openDialog2() {  
      document.getElementById("overlay2").style.display = "flex";
      

}
    

     function closeDialog() {
      document.getElementById("overlay").style.display = "none";
      generateBtn.style.display = "inline-block";
      inputBox.style.display = "block";

       }
        function closeDialog2() {
  document.getElementById("overlay2").style.display = "none";

 
  generateBtn.style.display = "inline-block";
  inputBox.style.display = "block";
  signBtn.style.display = "inline-block";
  lobtn.style.display = "inline-block";
}
       

       
    signBtn.addEventListener("click", () => {
       inputBox.style.display = "none";
      generateBtn.style.display = "none";
      signBtn.style.display = "inline-block";
     
 });
  loginBtn.addEventListener("click", () => {
  
  inputBox.style.display = "none";  
  generateBtn.style.display = "none";
  signBtn.style.display = "none";
  lobtn.style.display = "none";

  
 
});


lobtn.addEventListener("click", () => {
      inputBox.style.display = "none";  
      generateBtn.style.display = "none";
      signBtn.style.display = "inline-block";
});*/
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////







const signBtn = document.getElementById("signBtn");
const loginBtn = document.getElementById("loginBtn");
const aboutBtn = document.getElementById("aboutBtn");
const generateBtn = document.getElementById("generateBtn");
const inputBox = document.querySelector(".input-box");
const intro = document.getElementById("intro");
const lotext = document.getElementById("lotext");
const closeSign = document.getElementById("closeSign");
const closeLogin = document.getElementById("closeLogin");


generateBtn.addEventListener("click", () => {
  inputBox.classList.add("show");
  inputBox.style.display = "block";
  lotext.style.display = "none";});
  /*if (lotext.textContent !== "welcome back user!" && lotext.textContent !== "create a account !!!!!") {
    openDialog2(); 
  } else {
    lotext.textContent = "login to continue"; 
    lotext.style.display = "block";
   
  }
});*/




function openDialog() {
  document.getElementById("overlay").style.display = "flex";
  hideMainUI();
  var lotext = document.getElementById("lotext");
  if (lotext) {
    lotext.textContent = "create a account";
    lotext.style.display = "block";
  }
}


function openDialog2() {
  document.getElementById("overlay2").style.display = "flex";
  hideMainUI();
}

function openDialog3(){
  document.getElementById("overlay3").style.display="flex";
  hideMainUI();
}


function closeDialog() {
  document.getElementById("overlay").style.display = "none";
  restoreMainUI();
}


function closeDialog2() {
  document.getElementById("overlay2").style.display = "none";
  restoreMainUI();
}
function closeDialog3() {
  document.getElementById("overlay3").style.display = "none";
  restoreMainUI();
}



function hideMainUI() {
  inputBox.style.display = "none";  
  generateBtn.style.display = "none";
  signBtn.style.display = "none";
  loginBtn.style.display = "none";
  lotext.style.display = "none";
  aboutBtn.style.display="none";
  
}

function restoreMainUI() {
  inputBox.style.display = "block";  
  generateBtn.style.display = "inline-block";
  signBtn.style.display = "inline-block";
  loginBtn.style.display = "inline-block";
  lotext.textContent = "login to see your account";  
lotext.style.display = "block";
aboutBtn.style.display="inline-block";
}
  

/*

/*signBtn.addEventListener("click", () => {
  openDialog();
});

loginBtn.addEventListener("click", () => {
  openDialog2();
});

closeSign.addEventListener("click", () => {
  closeDialog();
});

closeLogin.addEventListener("click", () => {
  closeDialog2();*/

loginBtn.addEventListener("click", () => {
  lotext.textContent = "welcome back user!";
    lotext.style.display = "block"; 
  

});
signBtn.addEventListener("click", () => {
  lotext.textContent = "create a account !!!!!";
  lotext.style.display = "block"; 
});


aboutBtn.addEventListener("click",()=>{
  inputBox.style.display = "none";  
  generateBtn.style.display = "none";
  signBtn.style.display = "none";
  document.getElementById("overlay3").style.display = "flex";
  loginBtn.style.display = "none";
  lotext.style.display = "none";
  intro.style.display="none";
});
window.onload = restoreMainUI();





// Add CSS for animation (ensure this is in your CSS file)
/*
.input-box {
  opacity: 0;
  transform: translateX(-100%);
  transition: opacity 0.5s, transform 0.5s;
}
.input-box.show,
.input-box.slide-in-left {
  opacity: 1;
  transform: translateX(0);
}
*/




/*document.getElementById("up").addEventListener("click", async () => {
  const firstName = document.querySelector(".first").value;
  const lastName = document.querySelector(".second").value;
  const email = document.querySelector(".fourth").value;
  const password = document.querySelector(".fifth").value;

  const res = await fetch("http://localhost:5000/signup", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ firstName, lastName, email, password }),
  });

  const data = await res.json();
  alert(data.message || data.error);
});
document.getElementById("up2").addEventListener("click", async () => {
  const email = document.querySelector(".ov21").value;
  const password = document.querySelector(".ov22").value;

  const res = await fetch("http://localhost:5000/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });

  const data = await res.json();
  if (data.message) {
    document.getElementById("lotext").textContent = `Welcome back, ${data.user}!`;
  } else {
    alert(data.error);
  }
});*/












  

 

   
  


    



