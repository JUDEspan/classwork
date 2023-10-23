var todoArray = [];
function Enter() {
    var product = productName.value
    var description= description.value
    var price = price.value
var proObj = {
    product,
    description,
    price
}

    if (product == '' || description == ''|| price== '') {
    alert('Please fill them')
} else {
    todoArray.push(proObj)
document.getElementById('productName').value = ""
document.getElementById('description').value = ""
document.getElementById('price').value = ""
renderTodo()
}
}
function renderTodo(){
    show.innerHTML = "";
    todoArray.map((tod, ind) => {
    var row = `
    <tr>
        <td>${ind + 1}</td>
        <td>${tod.title}</td>
        <td class= "spec-td" >${tod.details}</td>
        <td>${tod.date}</td>
        <td>${tod.time}</td>
        <td class="btn-div" ><button style="margin-right: 10px;" onclick="deleteTodo(${ind})">Del</button> 
        <button onclick="editTodo(${ind})">Edit</button>
        </td>
        </tr>
        `;

        show.innerHTML += row;
    
})
}