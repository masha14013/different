const user1 = {
    name: "Bob",
    age: 25,
    isStudent: true
}

const address = {
    country: "Sudan",
    city: "Hartum"
}

const user2 = user1

let num1 = 10
let num2 = num1
num2 = "hey!!!"
console.log(num1)
console.log(num2)

user2.name = "Anne"
console.log(user1)

// делаем копию = вносим изменения в копию = используем копию с изменениями

const userCopy = {}
userCopy.age = user1.age
userCopy.isStudent = user1.isStudent
userCopy.name = "Bob"
console.log(user1)
console.log(userCopy)

const country = "Benin"

const userCopy2 = {...user1, isMarried: undefined}    // спред-оператор, добавление нового свойства
const userCopy3 = {...userCopy2, isMarried: false}    // изменение существующего объекта
const userCopy4 = {...userCopy3, ...address}           // слияние двух объектов
const userCopy5 = {...userCopy4, country}              // имя свойства совпадает с именем переменной


// deep copy
const user = {
    id: 1,
    name: "Bob",
    age: 25,
    isStudent: true,
    address: {
        country: "Sudan",
        city: "Hartum"  // => "Minsk"
    }
}

const userAddresses = [
    {
        userId: 1,
        country: "Sudan",
        city: "Hartum"
    },
    {
        userId: 2,
        country: "Benin",
        city: "Porto-Novo"
    }
]

const deepCopyUser = {...user, address: {...user.address, city: "Minsk"}}

console.log(user.address === deepCopyUser.address)

console.log(userAddresses.find(a => a.userId === user.id).city)


const users = [
    {
        id: 1,
        name: "Bob",
        age: 25,
        isStudent: true,
        address: {
            country: "Sudan",
            city: "Hartum"
        }
    },
    {
        id: 2,
        name: "Ann",
        age: 25,
        isStudent: true,
        address: {
            country: "Sudan",
            city: "Hartum"
        }
    },
    {
        id: 3,
        name: "Donald",
        age: 25,
        isStudent: true,
        address: {
            country: "Sudan",
            city: "Hartum"
        }
    }
]

const newUser = {
    id: 5,
    name: "Donald",
    age: 25,
    isStudent: true,
    address: {
        country: "Sudan",
        city: "Hartum"
    }
}

const users2 = [newUser, ...users]
const users3 = users2.map(u => u.id === 5 ? {...u, name: "Joe", address: {...u.address, city: "Minsk"}}: u)

console.log(users3)

