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

 function sayHello(firstName, lastName) {
    console.log('Доброго дня, ', firstName, lastName);
 }
 sayHello('Kate','Miah');

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
    deaccelerate: function(km) {
        const newSpeed = this.speed - km;
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