const Car = require('../db/carModel')
//获取汽车列表
const getCarList = (req,res)=>{
    Car.getCar().then((data)=>{
        res.json(data)
    })
}

module.exports = {
    getCarList
}