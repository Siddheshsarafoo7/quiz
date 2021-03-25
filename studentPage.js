loadQuiz(){
    const xhhtp = new XMLHttpRequest();
    const loadQ = document.getElementById("loadQ").value;
    xhttp.open("GET", "https://siddheshsaraf.com/comp351/individualProject/studentPage?loadQ="+question+"&&choices="+choice+", true);
               xhhtp.send();
    if((question!="")||(choices!=""))
    {
    
        xhttp.onreadystatechange = function (){
            if(this.readyState== 4 && this.status == 200){
                document.getElementByClassName("questions").innerHTML=(this.responseText);
            
            }
        
        };
    
    }
    else{
            document.getElementByClassName("questions").innerHTML=("No quiz available")
    }


}


submitQuiz(){
    let score= 0;
    const xhhtp = new XMLHttpRequest();
    const submit = document.getElementById("last").value;
    xhttp.open("POST", "https://siddheshsaraf.com/comp351/individualProject/studentPage?submit="+question+"&&choices="+choice+", true);
               xhhtp.send();
    if((question!="" || choices!=""))
    {
    
        xhttp.onreadystatechange = function (){
            if(this.readyState== 4 && this.status == 200){
                document.getElementByClassName("questions").innerHTML=(this.responseText);
            
            }
        
        };
    
    }
    else{
            document.getElementByClassName("questions").innerHTML=("no option selected")
    }
 



}