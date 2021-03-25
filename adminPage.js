
function onAdd(){
    const xhhtp = new XMLHttpRequest();
    const add = document.getElementById("add").value;
    xhttp.open("POST", "https://siddheshsaraf.com/comp351/individualProject/adminPage?add="+question+"&&choices="+choice+", true);
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
            document.getElementByClassName("questions").innerHTML=("No questions added")
    }

}

function onDelete(){
    const xhhtp = new XMLHttpRequest();
    const delete = document.getElementById("delete").value;
    xhttp.open("DELETE", "https://siddheshsaraf.com/comp351/individualProject/adminPage?add="+question+"&&choices="+choice+", true);
               xhhtp.send();
    if((question="")||(choices=""))
    {
    
        xhttp.onreadystatechange = function (){
            if(this.readyState== 4 && this.status == 200){
                document.getElementByClassName("questions").innerHTML=(this.responseText);
            
            }
        
        };
    
    }
    else{
            document.getElementByClassName("questions").innerHTML=("No questions deleted")
    }



}

function onSave(){
    const xhhtp = new XMLHttpRequest();
    const save = document.getElementById("save").value;
    xhttp.open("PUT", "https://siddheshsaraf.com/comp351/individualProject/adminPage?save="+question+"&&choices="+choice+", true);
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
            document.getElementByClassName("questions").innerHTML=("No questions saved")
    }





}


function editQuestion(){
    const xhhtp = new XMLHttpRequest();
    const edit = document.getElementById("edit").value;
    xhttp.open("PUT", "https://siddheshsaraf.com/comp351/individualProject/adminPage?edit="+question+"&&choices="+choice+", true);
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
            document.getElementByClassName("questions").innerHTML=("No questions edited")
    }



}