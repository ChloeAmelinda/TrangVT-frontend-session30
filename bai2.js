let book = [
    {
        id: 1,
        name: "jolibee",
        price: 32,
        quantity: 20,
        category: "cooking"
    },
    {
        id: 2,
        name: "Loteria",
        price: 23,
        quantity: 43,
        category: "cooking"
    }, {
        id: 3,
        name: "sushi",
        price: 9,
        quantity: 12,
        category: "cooking"
    },
    {
        id: 4,
        name: "Channel",
        price: 78,
        quantity: 232,
        category: "fashion"
    }
]
let cart = []
let menu = `--------Menu-----------
1.Hien thi danh sach theo the loai 
2.Them sach moi vao kho 
3.TIm kiem sach theo id
4.Mua sach
5.sap xep theo ga tang dan
6.sap xep theo gia giam dan
7.Tinh tong so luong da mua va in ra tong tien
8.Hien thi so luong sach trong kho 
9.Thoat chuong trinh
Lua chon cua ban la:
`
let choice

while (choice !== 9) {
    choice = +prompt(menu)
    switch (choice) {
        case 1:
            hienthi()
            break
        case 2:
            addbook()
            break
        case 3:
            foundbook()
            break
        case 4:
            boughtBook()
            break
        case 5:
            increaseSort()
            break
        case 6:
            decreaseSort()
            break
        case 7:
            let sum=0
            for(let i of cart){
                sum = i.price *i.quantity
            }
            alert("Tong so tien la" +sum)
            break
        case 8:
            allbook()
            break
        case 9:
            break
        default:
            alert("ko hop le")
            break
    }
}

function hienthi() {
    let searchCategory = prompt("Nhap the loai ban muon xem:")
    let newBook = []
    for (let i in book) {
        if (searchCategory.toLocaleLowerCase() === book[i].category.toLocaleLowerCase()) {
            newBook.push({
                name: book[i].name,
                price: book[i].price,
                quantity: book[i].quantity,
                title: book[i].category
            })
        }


    }

    for (let i in newBook) {
        alert(`name:${newBook[i].name}
                        price: ${newBook[i].price}
                        quantity:${newBook[i].quantity}
                        title: ${newBook[i].title}`)

        console.log(`name:${newBook[i].name}
                        price: ${newBook[i].price}
                        quantity:${newBook[i].quantity}
                        title: ${newBook[i].title}`)
    }
}

function addbook() {
    let name = prompt("Nhap ten sach muon them:")
    while (name.length <= 0) {
        alert("Nhap lai")
        name = prompt("Nhap ten sach muon them:")
    }
    let price = prompt("Nhap gia tien cho sach moi :")
    while (isNaN(price) || price <= 0) {
        alert("Nhap lai")
        price = prompt("Nhap gia tien cho sach moi :")
    }
    let quantity = prompt("Nhap so luong cho sach moi :")
    while (isNaN(quantity) || quantity <= 0) {
        alert("ko hop le")
        quantity = prompt("Nhap so luong cho sach moi :")
    }
    let category = prompt("Nhap mo ta cho sach moi :")
    while (category.length <= 0) {
        alert("Nhap lai")
        category = prompt("Nhap mo ta cho sach moi :")
    }
    let newbook = {
        id: book.length + 1,
        name: name,
        price: price,
        quantity: quantity,
        category: category
    }
    book.push(newbook)
}

function foundbook() {
    let searchBook = +prompt("Nhap ID can tim kiem:")
    let findIndex = -1
    for (let i in book) {
        if (book[i].id === searchBook) {
            findIndex = i;
            break;
        }
    }
    if (findIndex === -1) {
        alert("ko tim thay")
    } else {
        alert(`id:${book[findIndex].id}
            name:${book[findIndex].name}
price: ${book[findIndex].price}
quantity:${book[findIndex].quantity}
title: ${book[findIndex].category}`)
    }
}

function boughtBook() {
    let searchBook = +prompt("Nhap ID can tim kiem:")
    let findIndex = -1
    for (let i in book) {
        if (book[i].id === searchBook) {
            findIndex = i;
            break;
        }
    }
    if (findIndex === -1) {
        alert("ko tim thay")
    } else{
        let number= +prompt("Nhap so luong can mua:")
        book[findIndex].quantity= book[findIndex].quantity- number
        cart.push({
            name:book[findIndex].name,
            price:book[findIndex].price,
            quantity:book[findIndex].quantity
        })
        alert("Mua thanh cong")
    }
}

function increaseSort(){
    let temp
    for( let i=0; i<book.length ; i++){
        for(let j=0; j<book.length -1-i; j++){
            if(book[j].price > book[j+1].price){
                temp=book[j]
                book[j]=book[j+1]
                book[j+1]=temp
            }
        }
    }
    for(let i in book){
        alert(`Sau khi sap xep la: ${book[i].price}`)
    }
}
function decreaseSort(){
    let temp
    for( let i=0; i<book.length ; i++){
        for(let j=0; j<book.length -1-i; j++){
            if(book[j].price < book[j+1].price){
                temp=book[j]
                book[j]=book[j+1]
                book[j+1]=temp
            }
        }
    }
    for(let i in book){
        alert(`Sau khi sap xep la: ${book[i].price}`)
    }
}
function allbook(){
    for(let i in book){
        alert(`id:${book[i].id}
            name:${book[i].name}
price: ${book[i].price}
quantity:${book[i].quantity}
title: ${book[i].category}`)
    }
}
