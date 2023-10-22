var t1=document.getElementById("t1");
var t2=document.getElementById("t2");
var t3=document.getElementById("t3");
var t4=document.getElementById("t4");
var t5=document.getElementById("t5");
var t6=document.getElementById("t6");
var t7=document.getElementById("t7");
var t8=document.getElementById("t8");
var t9=document.getElementById("t9");
var t10=document.getElementById("t10");
var t11=document.getElementById("t11");
var t12=document.getElementById("t12");
var t13=document.getElementById("t13");
var t14=document.getElementById("t14");


function calculate(){

    if(t1.querySelector("input").value=="" || t2.querySelector("input").value=="" || t3.querySelector("input").value=="" || t4.querySelector("input").value=="" || t5.querySelector("input").value=="" || t6.querySelector("input").value=="" || t7.querySelector("input").value=="" || t8.querySelector("input").value=="" || t9.querySelector("input").value=="" || t10.querySelector("input").value=="" || t11.querySelector("input").value=="" || t12.querySelector("input").value==""  || t13.querySelector("input").value=="" ||t14.querySelector("input").value==""){
        alert("Please Fill all input fields or Enter valid values in all input fields.");
    }else{
        document.querySelector("#check-button").disabled = false
    }}


    function checkYourResult(){
        let flag=true
        if(t1.querySelector("input").value!=14.5){
            t1.querySelector("input").style.color="red"
            flag=false
        }
        
        if(t2.querySelector("input").value!=53.60){
            t2.querySelector("input").style.color="red"
            flag=false
        }
        
        if(t3.querySelector("input").value!=21.5){
            t3.querySelector("input").style.color="red"
            flag=false
        }
        
        if(t4.querySelector("input").value!=21){
            t4.querySelector("input").style.color="red"
            flag=false
        }
        
        if(t5.querySelector("input").value!=18){
            t5.querySelector("input").style.color="red"
            flag=false
        }
        
        if(t6.querySelector("input").value!=10){
            t6.querySelector("input").style.color="red"
            flag=false
        }
        
        if(t7.querySelector("input").value!=13){
            t7.querySelector("input").style.color="red"
            flag=false
        }
        
        if(t8.querySelector("input").value!=17){
            t8.querySelector("input").style.color="red"
            flag=false
        }
        
        if(t9.querySelector("input").value!=18){
            t9.querySelector("input").style.color="red"
            flag=false
        }
        
        if(t10.querySelector("input").value!=14){
            t10.querySelector("input").style.color="red"
            flag=false
        }
        
        if(t11.querySelector("input").value!=52.5){
            t11.querySelector("input").style.color="red"
            flag=false
        }
        
        if(t12.querySelector("input").value!=21.6){
            t12.querySelector("input").style.color="red"
            flag=false
        }
        
        if(t13.querySelector("input").value!=21){
            t13.querySelector("input").style.color="red"
            flag=false
        }
        
        if(t14.querySelector("input").value!=18.2){
            t14.querySelector("input").style.color="red"
            flag=false
        }}


        if(flag){
        
            for (let i = 0; i < 5; i++) {
                // document.querySelector(".result-table").style.display = "none"
                confetti();
              }
            
            alert("Congratulations! You have successfully completed the experiment.");
        }else{
            document.querySelector(".result-table").style.display = "flex"
        }