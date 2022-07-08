function addLi() {
    let li = document.createElement('li');
    let txtNode = document.createTextNode('Item 4');
    let attrNode = document.createAttribute('item');
    attrNode.value = 'last';

    li.appendChild(txtNode);
    li.setAttributeNode(attrNode);

    let list = document.getElementById('items');
   
    list.appendChild(li);
    console.log(li);
    console.log(txtNode);
    console.log(attrNode);
    console.log(list);
}

