function Login(){
    var done = 0;
    var username = document.login.username.value;
    var password = document.login.password.value;

    if (username == "Mabim" && password =="Mabimfasilkom"){
            if(confirm("Apakah anda ingin login?")){
                window.location.href = "https://github.com/9Gitaokta";
            } else {
                alert("Login dibatalkan !");
            }
    	} else {
            if (done==0){
                alert("Username/Password Salah");{    
            }
         }
    }
}