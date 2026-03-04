const user = {
    name:'soham',
    age:21
}
const user1 = {
    name:'saurabh',
    age:21
}

const users = {...user, ...user1};

console.log(users)

const users1 = Object.assign({}, user, user1)

console.log(users1)