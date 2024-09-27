const Prod = require('../models/product');

exports.createProd = (req, res) => {
    const name = req.body.name;
    const tag = req.body.tag;
    const image = req.body.image;
    const new_price = req.body.new_price;
    const old_price = req.body.old_price;
    const prod = new Prod(name, tag, image, new_price, old_price);
    console.log(Prod);
    prod.save()
}

exports.deleteProd = (req, res) => {
    const name = req.body.name;
    Prod.delete(name);
}

exports.findByName = async (req, res) => {
    const data = await Prod.findByName(req.body.name);
    res.send(data);
}

exports.findByTag = async (req, res) => {
    const data = await Prod.findByTag(req,body.tag);
    res.send(data);
}
exports.findById = async (req, res) => {
    const data = await Prod.findById(req.params.id);
    console.log(data);
    res.send(data);
}

exports.findAll = async (req, res) => {
    const data = await Prod.findAll();
    res.send(data);
}