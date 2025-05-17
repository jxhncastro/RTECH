var productName = document.getElementById("name");
var warrning = document.getElementById("warrning");
var productPrice = document.getElementById("price");
var productCategory = document.getElementById("category");
var productDescription = document.getElementById("decsreption");
var productArr = [];
var productSearch = document.getElementById("searchInput");
var updateBtn = document.getElementById("updateBtn")
var addBtn = document.getElementById("addBtn")
 var updatedIndex;

function addProduct() {
    if (validation() == true) {
        var product ={
        mobileName: productName.value,
        mobilePrice: productPrice.value,
        mobileCategory: productCategory.value,
        mobileDecsreption:productDescription.value,
    }
    productArr.push(product);
    console.log(productArr);
    clear()
        localStorage.setItem("product", JSON.stringify(productArr));
        display();
    }
   
}
function clear() {
     productName.value = "";
     productPrice.value = "";
    productCategory.value = "";
    productDescription.value = "";
}
function display() {
    var box = "";
    for (i = 0; i < productArr.length; i++){
        var index = i + 1;
        box += ` <tr>
        <td>${index}</td>
        <td>${productArr[i].mobileName}</td>
        <td>${productArr[i].mobilePrice}</td>
        <td>${productArr[i].mobileCategory}</td>
        <td>${productArr[i].mobileDecsreption}</td>
        <td><button class="btn btn-danger btn-sm" onclick="setData(${i})">Update</button></td>
        <td><button onclick="deletProduct(${i})" class="btn btn-secondary btn-sm">Delete</button></td>
     </tr>`
    }
    document.getElementById("tbody").innerHTML = box;
}
 
function deletProduct(itemIndex){
    productArr.splice(itemIndex,1)
    display()
}

function search() {
    var term = productSearch.value;
    var box = "";
    for (i = 0; i < productArr.length; i++){
        if(productArr[i].mobileName.includes(term)){
            var index = i + 1;
            box += ` <tr>
        <td>${index}</td>
        <td>${productArr[i].mobileName}</td>
        <td>${productArr[i].mobilePrice}</td>
        <td>${productArr[i].mobileCategory}</td>
        <td>${productArr[i].mobileDecsreption}</td>
        <td><button class="btn btn-danger btn-sm">Update</button></td>
        <td><button onclick="deletProduct(${i})" class="btn btn-secondary btn-sm">Delete</button></td>
     </tr>`
    }
    document.getElementById("tbody").innerHTML = box;

}
    
 
}
// if (localStorage.getItem("product")= ! null) {
//     productArr = JSON.parse(localStorage.getItem("product"));
//     display();

// }
function setData(indexx) {
    updatedIndex= indexx
    var currentProduct = productArr[indexx];
productName.value =currentProduct.mobileName
productPrice.value =currentProduct.mobilePrice
productCategory.value =currentProduct.mobileCategory
    productDescription.value = currentProduct.mobileDescription
    updateBtn.classList.remove('d-none')
    addBtn.classList.add('d-none')
    
}
function update() {
     var product ={
        mobileName: productName.value,
        mobilePrice: productPrice.value,
        mobileCategory: productCategory.value,
        mobileDecsreption:productDescription.value,
    }
    productArr.splice(updatedIndex ,1 ,product)
     updateBtn.classList.add('d-none')
    addBtn.classList.remove('d-none')
    clear()
    display()
}
function validation() {
    var regexName = /^[a-z]{3,5}[0-9]*$/
    var nameInput = productName.value;
    // console.log(regexName.test(nameInput));
    if (regexName.test(nameInput) == true) {
        warrning.classList.remove('d-flex')
        warrning.classList.add('d-none')
        return true
    }
    else{
        warrning.classList.remove('d-none')
        warrning.classList.add('d-flex')
        return false
    }
    
 }
// var replacementinput = document.getElementById("replacement");
// var replacementarr = [];
// function replacement() {
//     letters = {
//         a: "2",
//         e: "3",
//         l :"8",
//     }
//     var x = replacementinput.value;
//     var y = x.replaceAll()
//     replacementarr.push(letters)
// console.log(replacementarr);
// }
