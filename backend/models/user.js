const database = require('../util/mongodbdriver');

class User {
    constructor(name, email, password) {
        this.name = name;
        this.email = email;
        this.password = password;
    }

    save() {
        database.create(this.name, this.email, this.password);
    }

    delete() {
        database.delete(this.email);
    }

    static async findAll() {
        const data = await database.findAll();
        console.log(data);
        return data;
    }

    static findByEmail(email) {
        return database.find(email);
    }

    static check() {
        const check = database.find();
        if(check) {
            return check;
        } return null;
    }
}

module.exports = User;