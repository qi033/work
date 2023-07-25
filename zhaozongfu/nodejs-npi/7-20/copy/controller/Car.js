const CarApi = require("../dataBase/Cars_api");
const fh = require("./returnjson");
const bodyParser = require('body-parser');
const getCarsList = (req, res) => {
    CarApi.getCars().then((data) => {
        res.json(fh.success("获取汽车列表成功", 200, data));
    }, (err) => {
        console.log(err);
        res.json(fh.error(err, 500))
    });
};
//添加汽车
const addCar = (req, res) => {
    let data = {
        name: req.body.car_name,
        color: req.body.car_color,
    }
    CarApi.addCar(data)
        .then(() => {
            res.json(fh.success("添加成功", 201, data))
        })
        .catch(() => { })
};
module.exports = {
    getCarsList,
    addCar,
}