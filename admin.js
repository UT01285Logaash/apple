const adminUserName = "Admin"
const adminPassword = "123"

document.getElementById('loginForm').addEventListener('submit' , (event)=> {
    event.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;


    if(username=== adminUserName && password===adminPassword){
        window.location.href="/admin_home/home.html";    
    }

    else{
        alert("Invalid Username OR Password...")
    }
    event.target.reset();
    
})