let products = [
    {
        id: 1,
        name: "jolibee",
        price: 32,
        quantity: 20,
        category: "Ngon"
    },
    {
        id: 2,
        name: "Loteria",
        price: 23,
        quantity: 43,
        category: "Ngon"
    }, {
        id: 3,
        name: "sushi",
        price: 9,
        quantity: 12,
        category: "binh thuong"
    }
]
let cart = []
let menu = `----------Menu------------
1.Hien thi san pham theo danh muc
2.Chon san pham bang cach nhap id
3.Sap xep Tang dan
4.Sap xep Giam dan
5.Tinh so tien thanh toan trong gio hang
6.Thoat
Lua chon cua ban la:`
let choice
while (choice !== 6) {
    choice = +prompt(menu)
    switch (choice) {
        case 1:
            for (let i in products) {
                alert(`Ten san pham: ${products[i].name}`)
            }
            break
        case 2:
            let searchID = +prompt("Nhap id can tim:");
            let findIndex = -1;

            for (let i in products) {
                if (products[i].id === searchID) {
                    findIndex = i;
                    break;
                }
            }
            if (findIndex === -1) {
                alert("ko tim thay id:" + searchID)
            } else {
                let number = +prompt("Nhap so luong muon mua:")
                if (number >= products[findIndex].quantity) {
                    alert("so luong san pham ko du de ban mua")
                } else {
                    products[findIndex].quantity -= number
                    console.log(products[findIndex].quantity)
                    cart.push({
                        price:products[findIndex].price,
                        quantity:products[findIndex].quantity
                    })
                    
                    alert("mua thanh cong")
                }
            }

            break
        case 3:
            products.sort((a, b) => a.price - b.price);
            alert("San pham da duoc sap xep tang dan theo gia.");
            for (let i in products) {
                alert(`Ten san pham: ${products[i].name}
                    gia:${products[i].price}
                    mo ta:${products[i].category}
                    so luong:${products[i].quantity}`)
            }
            break
        case 4:
            products.sort((a, b) => b.price - a.price);
            alert("San pham da duoc sap xep giam dan theo gia.");
            for (let i in products) {
                alert(`Ten san pham: ${products[i].name}
                    gia:${products[i].price}
                    mo ta:${products[i].category}
                    so luong:${products[i].quantity}`)
            }
            break
        case 5:
            let sum=0
            for(let i of cart){
                sum = i.price *i.quantity
            }
            alert("Tong so tien la" +sum)
            break
        case 6:
            break
        default:
            alert("ko hop le")
            break
    }
}