document.getElementById("b").addEventListener("click",function(){
   let inputFild= document.getElementById("input");
   let inputValue= inputFild.value;
   let addComment = document.getElementById("add-comment");
   let child= document.createElement("h1");
  addComment.appendChild(child);
  child.innerText=inputValue;


  
   inputFild.value="";


})