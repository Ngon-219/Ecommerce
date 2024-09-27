const User = require('../models/user');

exports.postUser = (req, res, next) => {
        const name = req.body.name;
        const email = req.body.email;
        const password = req.body.password;
        const user = new User(name, email, password);
        console.log(user);
        user.save();
}

// exports.checkUser = (req, res, next) => {
//     const check = User.check(req.body.email);
//     if(check)

// }

exports.getUser = async (req, res, next) => {
    // try {
    //     User.findByEmail(req.params);
    // } catch(err) {
    //     console.log(err);
    // }
    const data = await User.findAll();
    res.send(data);
}

exports.getUrl = (req, res, next) => {
    const id = req.params.id;
    console.log(id);
    res.send('ahihi');
}