const database = require('../util/mongodbdriver');

class Product {
    constructor(name, tag, image, new_price, old_price) {
        this.name = name;
        this.tag = tag;
        this.image = image;
        this.new_price = new_price;
        this.old_price = old_price;
    }

    save() {
        database.createProd(this.name, this.tag, this.image, this.new_price, this.old_price);
    }

    static delete(name) {
        database.delete(this.name);
    }

    static findByName(name) {
        database.findByNameProd(name);
    }
    
    static findByTag(tag) {
        database.findByTagProd(tag);
    }

    static async findAll() {
        const data = await database.findAllProd();
        return data;
    }

    static async findById(id) {
        const data = await database.findById(id);
        return data;
    }
}

module.exports = Product;