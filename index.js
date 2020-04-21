const add = document.getElementById("add");
const deletebtn = document.getElementById("delete");
const list_items = document.getElementById("list-items");
const search = document.getElementById("search");
add.addEventListener("click",(e)=>{
    e.preventDefault();
    let text =document.getElementById("input-text");
    let val = text.value;
    li = document.createElement("li");
    li.className = 'input-text';
    li.appendChild(document.createTextNode(val));
    let deletebtn = document.createElement("button");
    deletebtn.id = 'delete';
    deletebtn.appendChild(document.createTextNode('X'));
    li.appendChild(deletebtn);
    list_items.appendChild(li)
    text.value =''
    
})

list_items.addEventListener('click',(e)=>{
    if(e.target.id === 'delete')
        if(confirm("are you sure")){
            let li = e.target.parentElement;
            list_items.removeChild(li)
        }  
})

search.addEventListener("keyup",(e)=>{
    let text = e.target.value.toLowerCase();
    let itemList = document.getElementsByTagName("li");
    Array.from(itemList).forEach((item)=>{
        let itemtext = item.firstChild.textContent
        if(itemtext.toLocaleLowerCase().indexOf(text) != -1)
        {
            item.style.display="block"
        }
        else{
            item.style.display="none"
        }
    })
})