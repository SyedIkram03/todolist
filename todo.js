let addtodo=document.getElementById("addtodo");
let todocontainer=document.getElementById("todocontainer");
let inputfield=document.getElementById("inputf");
 
addtodo.addEventListener('click',function(){
    var paragraph=document.createElement('p');
    paragraph.classList.add("paragraph-style");
    paragraph.innerText=inputfield.value;
    todocontainer.appendChild(paragraph);
    inputf.value='';
    paragraph.addEventListener("click",function(){
        paragraph.style.textDecoration="line-through"
    });
    paragraph.addEventListener("dblclick",function(){
        todocontainer.removeChild(paragraph);
    })

})