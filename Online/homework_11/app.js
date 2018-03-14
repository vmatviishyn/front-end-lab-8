let rootNode = document.getElementById("root");

function isObjectEmpty(obj) {
    for (var key in obj) {
        return false;
    }
    return true;
}

function createTreeDom(obj) {
    if (isObjectEmpty(obj)) { 
        return; 
    }
    var ul = document.createElement('ul');
    for (var key in obj) {
        var li = document.createElement('li');
        var i = document.createElement("i");
        i.className = "material-icons"; 
        li.innerHTML = obj[key].title;
        li.insertBefore(i, li.firstChild);
        if (obj[key].folder){
            i.innerHTML = "folder";
            li.classList.add('folder');
        } else {
            i.classList.add("file");
            i.innerHTML = "insert_drive_file";
        }
        var childrenUl = createTreeDom(obj[key].children);
        if (childrenUl) {
            li.appendChild(childrenUl);
        } else if (i.innerHTML === "folder") {
            li.innerHTML += "<ul><i>Folder is empty</i></ul>";
        }
        ul.appendChild(li);
    }
    return ul;
}

rootNode.onclick = function (event){
    var target = event.target;
    while(target !== this){
        if((target.tagName === 'LI') && target.classList.contains('folder')){
            if(target.firstChild.innerHTML==='folder'){
                target.firstChild.innerHTML='folder_open';
            } else{
                target.firstChild.innerHTML='folder';
            }
            target.lastChild.classList.toggle('folder_open');
            return;
        }
        target = target.parentNode;
    }
}

rootNode.appendChild(createTreeDom(structure));