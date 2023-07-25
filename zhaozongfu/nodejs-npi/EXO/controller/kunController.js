const Kun = require('../db/kunModel');
const fh = require("./returnjson");
const bodyParser = require('body-parser');
const getKunList = (req, res) => {
    Kun.getKun().then((data) => {
        res.json(fh.success("获取汽车列表成功", 200, data));
    }, (err) => {
        console.log(err);
        res.json(fh.error(err, 500))
    });
};
//添加汽车
const addKun = (req, res) => {
    let data = {
        name: req.body.car_name,
        color: req.body.car_color,
    }
    Kun.addKun(data)
        .then(() => {
            res.json(fh.success("添加成功", 201, data))
        })
        .catch(() => { })
};
module.exports = {
    getKunList,
    addKun,
}