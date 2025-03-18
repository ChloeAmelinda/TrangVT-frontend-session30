let menu=`1Hiển thị danh sách điện thoại theo hãng (Ví dụ: Samsung, Apple, Xiaomi…)
2.Thêm điện thoại mới vào cửa hàng (Nhập thông tin: id, tên điện thoại, giá, số lượng, hãng)
3.Tìm kiếm điện thoại theo tên hoặc id
4.Mua điện thoại (Nhập id điện thoại cần mua và số lượng, cập nhật lại cửa hàng)
5.Thanh toán tất cả điện thoại trong giỏ hàng (Thông báo thanh toán thành công, và xóa toàn bộ giỏ hàng)
6.Sắp xếp điện thoại theo giá:
Tăng dần
7.Giảm dần
8.Hiển thị tổng số tiền của các điện thoại trong kho
9.Hiển thị tổng số lượng điện thoại theo từng hàng (VD: samsung - 5,iphone - 3,...)
10.Thoát chương trình
Lua chon cua ban la:`
let phone =[
    {
        id:1,
        name:"iphone16",
        price:12,
        quantity:23,
        company:"apple"
},
{
    id:2,
    name:"iphone15",
    price:12,
    quantity:200,
    company:"apple"
},{
    id:3,
    name:"ultraviewultraview",
    price:166,
    quantity:24,
    company:"samsung"
}
]
let choice
let cart=[]
while(choice !== 10){
    choice = +prompt(menu)
    switch(choice){
        case 1:
            hienthi()
            break
        case 2:
            addphone()
            break
        case 3:
            foundPhone()
            break
        case 4: 
        boughtPhone()
        break
        case 5:break
        case 6:break
        case 7:break
        case 8:break
        case 9:break
        default:
            alert("ko hop le")
            break
    }
}

function hienthi(){
    let searchphone = prompt("Nhap hang ban muon xem:")
    let newPhone = []
    for (let i in phone) {
        if (searchphone.toLocaleLowerCase() === phone[i].company.toLocaleLowerCase()) {
            newPhone.push({name: phone[i].name,
                price: phone[i].price,
                quantity: phone[i].quantity,
                company: phone[i].company})
        }


    }

    for (let i in newPhone) {
        alert(`name:${newPhone[i].name}
                        price: ${newPhone[i].price}
                        quantity:${newPhone[i].quantity}
                        company: ${newPhone[i].company}`)

        console.log(`name:${newPhone[i].name}
                        price: ${newPhone[i].price}
                        quantity:${newPhone[i].quantity}
                        company: ${newPhone[i].title}`)
    }
}
function addphone(){
    let name = prompt("Nhap ten dien thoai muon them:")
    while (name.length <= 0) {
        alert("Nhap lai")
        name = prompt("Nhap ten sach muon them:")
    }
    let price = prompt("Nhap gia tien cho phone moi :")
    while (isNaN(price) || price <= 0) {
        alert("Nhap lai")
        price = prompt("Nhap gia tien cho phone moi :")
    }
    let quantity = prompt("Nhap so luong cho phone moi :")
    while (isNaN(quantity) || quantity <= 0) {
        alert("ko hop le")
        quantity = prompt("Nhap so luong cho phone moi :")
    }
    let company = prompt("Nhap mo ta cho phone moi :")
    while (company.length <= 0) {
        alert("Nhap lai")
        company = prompt("Nhap mo ta cho phone moi :")
    }
    let newphone = {
        id: phone.length + 1,
        name: name,
        price: price,
        quantity: quantity,
        company: company
    }
    phone.push(newphone)

}
function foundPhone(){
    let searchPhone = +prompt("Nhap ID can tim kiem:")
    let findIndex = -1
    for (let i in phone) {
        if (phone[i].id === searchPhone) {
            findIndex = i;
            break;
        }
    }
    if (findIndex === -1) {
        alert("ko tim thay")
    } else {
        alert(`id:${phone[findIndex].id}
            name:${phone[findIndex].name}
price: ${phone[findIndex].price}
quantity:${phone[findIndex].quantity}
company: ${phone[findIndex].company}`)
    }
}
function boughtPhone(){
    let searchPhone = +prompt("Nhap ID can tim kiem:")
    let findIndex = -1
    for (let i in phone) {
        if (phone[i].id === searchPhone) {
            findIndex = i;
            break;
        }
    }
    if (findIndex === -1) {
        alert("ko tim thay")
    } else{
        let number= +prompt("Nhap so luong can mua:")
        phone[findIndex].quantity= phone[findIndex].quantity- number
        cart.push({
            name:phone[findIndex].name,
            price:phone[findIndex].price,
            quantity:phone[findIndex].quantity
        })
        alert("Mua thanh cong")
    }
}