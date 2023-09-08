function validateForm() {
    var name=document.getElementById("name").value;
    console.log(name)
    var email=document.getElementById("email").value;
    var subject = document.getElementById("subject").value;
   var message = document.getElementById("textarea").value;
    var mobilenumber=document.getElementById("mobilenumber").value;


    if(name==""){
       document.getElementById("one").innerHTML = "Name must be filled out";
       setTimeout(function(){
           document.getElementById("one").innerHTML  = ""
           },5000)
       return false; 

    }
    if(/\d/.test(name)){
       document.getElementById("one").innerHTML = "Name must be a character "
       setTimeout(function(){
           document.getElementById("one").innerHTML  = ""
           },5000)
       return false; 


       }

       var emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
       if (!emailRegex.test(email)) {
        document.getElementById("two").innerHTML= "Enter a valid email address"
         setTimeout(function(){
            document.getElementById("two").innerHTML = ""
               },5000)
         return false;
       }


       
       

     
   if (subject == "") {
    document.getElementById("three").innerHTML  = "Subject must be filled out"
     setTimeout(function(){
        document.getElementById("three").innerHTML  = ""
           },5000)
     return false;
   }


   if (message == "") {
    document.getElementById("error").innerHTML  = "Message must be filled out"
     setTimeout(function(){
        document.getElementById("error").innerHTML  = ""
           },5000)
     return false;
   }

   if(mobilenumber ==""){
    document.getElementById("four").innerHTML="Mobile number must be filled out"
    setTimeout(function(){
        document.getElementById("four").innerHTML  = ""
    },5000)
    return false;
}

 
if(isNaN(mobilenumber)){
    document.getElementById("four").innerHTML=" Mobile number must be digits"
    setTimeout(function(){
        document.getElementById("four").innerHTML=""
    },5000)
    return false;
}



if (mobilenumber.length<10){
 document.getElementById("four").innerHTML = "Mobile Number must have 10 digits"
setTimeout(function(){
 document.getElementById("four").innerHTML = ""
    },5000)
return false
}



if (mobilenumber.length>10){
document.getElementById("four").innerHTML = "Mobile Number must have only 10 digits"
setTimeout(function(){
 document.getElementById("four").innerHTML = ""
    },5000)
return false
}
   
   return true;

    }