
var try_test = document.getElementById("try-test");
var home_Btn = document.getElementById("homeBtn");

if(try_test){

    try_test.addEventListener("click", () => {     
        try_test.href = "/choose.html";
     });
}

if(home_Btn){
    home_Btn.addEventListener('click',function(){ 
        home_Btn.href = "/index.html"
    });
}
