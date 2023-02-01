function passValues(){
    const fname = document.getElementById("fname").value;
    const uname = document.getElementById("uname").value;
    const email = document.getElementById("email").value;
    
    localStorage.setItem("textname",fname);
    localStorage.setItem("textusername",uname);
    
    return false;
 
}
 
document.getElementById("resultname").innerHTML = localStorage.getItem("textname");
document.getElementById("resultusername").innerHTML = localStorage.getItem("textusername");