

const cart = [
    "Ноутбук",
    "Мышь",
    "Клавиатура",
];

console.log(cart);

cart.push("Наушники", "Монитор");

cart.unshift("Телефон");

console.log(cart);

console.log(cart.shift(),cart.pop());

console.log("--------------------------------------------------------------");

for (let n = 0; n < cart.length; n++) {
    console.log(`товар:${cart[n]}`);
}

console.log("--------------------------------------------------------------");


const shop = {
    name: "Geeks Shop",
    cart: cart,

    showCart: function () {
        console.log(`--- Товары в магазине ${this.name} ---`);
        
        
        for (let i = 0; i < this.cart.length; i++) {
            console.log(this.cart[i]);
        }
    },

    addProduct: function (newtovar) {
        this.cart.push(newtovar)
        console.log(`Вы добавили ${newtovar}`);
    },

    getCount: function () {
        console.log(this.cart.length);
    },
};

shop.showCart();
console.log("--------------------------------------------------------------");
shop.addProduct("пульт")
console.log("--------------------------------------------------------------");
shop.getCount()

