const faker = require('faker');
const bcrypt = require('bcryptjs');

const database = { products: [], users: []};

const salt = bcrypt.genSaltSync(10);
const hash = bcrypt.hashSync("123456", salt);

let quantityProductsOfUser = 0;
let quantityUsers = 1;

for (var i = 1; i<= 128; i++) {

    if (quantityProductsOfUser == 0) {
        quantityUsers++;
        
        database.users.push({
            id: quantityUsers,
            name: faker.name.findName(),
            email: faker.internet.email().toLowerCase(),
            password: hash
        });

        quantityProductsOfUser = Math.ceil(Math.random() * 4);
    }


    database.products.push({
        id: i,
        name: faker.commerce.productName(),
        description: faker.lorem.sentences(),
        price: faker.commerce.price(),
        imageUrl: "https://source.unsplash.com/550x350/?product",
        quantity: faker.random.number(),
        userId: quantityUsers,
    });

    quantityProductsOfUser--;
}

console.log(JSON.stringify(database));