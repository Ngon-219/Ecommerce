const { name } = require('body-parser');
const mongoose = require('mongoose');

        mongoose.connect('mongodb+srv://ngon:hanhtinhsongsong@atlascluster.en7n8ww.mongodb.net/?retryWrites=true&w=majority&appName=AtlasCluster')
        .then(()=>console.log('connected..'))
        .catch((err) => console.log(err));
//Schema 
const UserSchema = new mongoose.Schema ({
    name: {
        type: String,
        require: true,
    },
    email: {
        type: String,
        require: true,
        unique: true,
    },
    password: {
        type: String,
        require: true,
    }
});

const ProductSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
    }, 
    tag: {
        type: String,
        require: false,
    },
    image: {
        type: String,
        require: true,
    },
    new_price: {
        type: String,
        require: true,
    },
    old_price: {
        type: String,
        require: true,
    }
})

const Product = mongoose.model('Product', ProductSchema);

async function createProduct(name, image, new_price, old_price, tag) {
    return await Product.create({
        name: name,
        image: image,
        new_price: new_price,
        old_price: old_price,
        tag: tag
    });
}

async function findAllProd() {
    const data =  await Product.find();
    return data;
}

async function deleteProdcut(name) {
    await Product.deleteOne({name: name});
}

async function findByName(name) {
    const prod = await Product.find({name: name});
    console.log(prod);
    return prod;
}

async function findByIdProd(id) {
    console.log("id", id);
    const prod = await Product.findById(id);
    console.log(prod);
    return prod;
}

async function findByTag(tag) {
    const prod = await Product.find({tag: tag});
    console.log(prod);
    return prod;
}


const User = mongoose.model('User', UserSchema);

async function createUser(name, email, password) {
    return await User.create({
        name: name,
        email: email,
        password: password,
    })
}

async function deleteUser(email) {
    await User.deleteOne({email: email});
}

async function findByEmail(email) {
    const user = await User.find({"email": email});
    console.log(user);
    return user;
}

async function findAll() {
    const data = await User.find();
    // console.log(data);
    return data;
}

// findByEmail("ngon@gmail.com");
findAll();

module.exports = {
    create: createUser,
    delete: deleteUser,
    find: findByEmail,
    findAll: findAll,
    createProd: createProduct,
    deleteProd: deleteProdcut,
    findByNameProd: findByName,
    findByTagProd: findByTag,
    findAllProd: findAllProd,
    findById: findByIdProd
}