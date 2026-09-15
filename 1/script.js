


const user = {
    name: "Ruslan",
    userName: "Rus_Lan",
    password: "123456",
    age: 23,
    balance: 5000,
    admin: false,

};

user.showInfo = function () {
    console.log(`имя: ${user.name} никнейм: ${user.userName} возрост: ${user.age} баланс: ${user.balance}`);   
}
user.showInfo();


user.changeName = function(newName) {
    user.name = newName;
};

user.changeName('Alex')
console.log(user.name);

user.deposit = function(sum) {
    if (sum > 0) {
      this.balance += sum;
    } else {
      console.log("Сумма пополнения должна быть больше 0");
    }
  }

user.deposit(1500);
console.log(user.balance);

user.withdraw = function(sum) {
    if (user.balance >= sum) {
        user.balance -= sum;
        console.log(`- бапки осталось ${user.balance}`);
        
    }else {
        console.log('недостаточно мани');
        
    }
}

user.withdraw(2400)

user.checkPassword = function (password) {
    if (password === user.password){
        console.log('Пароль верный');
    }else {
        console.log('ты кто такой вообше это моя машина');
    }
}

user.checkPassword("13456")



const admin = {...user, admin: true}
admin.name = "loh";

console.log(user.name, admin.name);


console.log(Object.keys(user), Object.values(user), Object.entries(user));


user.getStatus = function() {
    return user.admin === true ? "Администратор" : "Пользователь";
}

admin.getStatus = function() {
    return admin.admin === true ? "Администратор" : "Пользователь";
}


console.log(user.getStatus());
console.log(admin.getStatus());
