

function pop(param){       
    document.getElementById("title").innerHTML=`${param}`;
    document.getElementById("box").style.display = "block";   
    document.getElementById("yes").addEventListener("click", () => {return insert(true)}) 
    document.getElementById("no").addEventListener("click", () => {return insertNo(true)})                
       
} 
let insert=(resp)=>{
    if(resp){
        document.getElementById("textResult").innerHTML="<li style='margin-top:20px;margin-left:30px;'>You just clicked 'Yes'</li>"
        document.getElementById("box").style.display = "none";
    }
}
let insertNo=(resp)=>{
    if (resp){        
        document.getElementById("textResult").innerHTML="<li style='margin-top:20px;margin-left:30px;'>You just clicked 'Cancel'</li>"
        document.getElementById("box").style.display = "none";
    }
}
