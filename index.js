// 1. 
 let user = {
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


 //2. Написати функцію, яка приймає об’єкт юзера і виводить вітання типу “Доброго дня, (ім’я_юзера) (прізвище юзера)”

 function sayHello(firstName, lastName) {
    console.log('Доброго дня, ', firstName, lastName);
 }
 sayHello('Kate','Miah');