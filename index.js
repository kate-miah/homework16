// 1. 

const user = {
    firstName: 'Kate',
    lastName: 'Miah',
    email: 'email@gmail.com',
    password: 'qwerty',
    phoneNumber: '1234567890',
    address: {
        city: 'Winnipeg',
        street: 'Main',
        houseNumber: '123',
        unit: '1234'
    }
 }

 // 2. Написати функцію, яка приймає об’єкт юзера і виводить вітання типу “Доброго дня, (ім’я_юзера) (прізвище юзера)”

 const user1 = {
    firstName: 'Kate',
    lastName: 'Miah',
 }
 function sayHello(user1) {
    console.log(`Доброго дня, ${user1.firstName} ${user1.lastName}`);
 }
 sayHello(user1);

 // 3. Написати функцію, яка приймає об’єкт і виводить в консоль всі його властивості (за допомогою циклу for..in)

function printUserInfo(user) {
    for (const key in user) {
        console.log(`${key}: ${user[key]}`);
    }
}
printUserInfo(user)

// for (const key in newUser) {
//    console.log(`${key}:`, newUser[key]);
// }

// 4. Створити об’єкт car (машина) з властивостями:
 
const car = {
    color: 'white',
    model: 'XC90',
    brand: 'Volvo',
    engineVolume: 2.0,
    capacity: 5,
    speed: 0,
    maxSpeed: 180,
    accelerate: function(kmh) {
        const newSpeed = this.speed + kmh;
        if (newSpeed > this.maxSpeed) {
            this.speed = this.maxSpeed;
        } else {
            this.speed = newSpeed;
        }
        console.log(this.speed);
    },
    deaccelerate: function(kmh) {
        const newSpeed = this.speed - kmh;
        if (newSpeed < 0) {
            this.speed = 0;
        } else {
            this.speed = newSpeed;
        }
        console.log(this.speed);
    },
    stop: function() {
        this.speed = 0;
        console.log(this.speed);
        return this
    }
}

// 5. На основі об’єкта з завдання №4 розробити функцію-конструктор для масового створення таких об’єктів за переданими параметрами. В якості перевірки створити декілька екземплярів таких об’єктів з різними властивостями

function Car(color, mobel, brand, engineVolume, capacity, speed, maxSpeed) {
    this.color = color;
    this.model = mobel;
    this.brand = brand;
    this.engineVolume = engineVolume;
    this.capacity = capacity;
    this.speed = speed;
    this.maxSpeed = maxSpeed;
    this.accelerate = function(kmh) {
        const newSpeed = this.speed + kmh;
        if (newSpeed > this.maxSpeed) {
            this.speed = this.maxSpeed;
        } else {
            this.speed = newSpeed;
        }
        console.log(this.speed);
    };
    this.deaccelerate = function(kmh) {
        const newSpeed = this.speed - kmh;
        if (newSpeed < 0) {
            this.speed = 0;
        } else {
            this.speed = newSpeed;
        }
        console.log(this.speed);
    };
    this.stop = function() {
        this.speed = 0;
        console.log(this.speed);
        return this
    }
}

const car1 = new Car('white', 'XC90', 'Volvo', 2.0, 5, 0, 180);
const car2 = new Car('black', 'F150', 'Ford', 3.5, 5, 0, 200);
const car3 = new Car('blue', 'RAM', 'Dodge', 4.7, 6, 0, 200);
const car4 = new Car('red', 'Mustang', 'Ford', 4.7, 2, 0, 250);