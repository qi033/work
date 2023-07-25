// api.js
const connection = require('./db')

//查询
const getCars = () => {
    return new Promise((resolve, reject) => {
        //第一个参数：sql语句
        //第二个参数：回调函数（err：查询错误，data：查询结果）
        connection.query("select * from kunkun", (err, data) => {
            if (err != null) {
                reject(err);
            } else {
                resolve(data)
            }
        })
    })
}
//添加
const addCar = (param) => {
    return new Promise((resolve, reject) => {
        connection.query(
            // "insert into kunkun(name,color) values('${param.name}' ,  '${param.color}'})",
            `insert into kunkun(name,color) values(?,?)`,
            [param.name, param.color],
            (err, data) => {
                //如果err为null则成功
                resolve(data)
            })
    })
}
//改
const updateAccount = (param) => {
    return new Promise((resolve, reject) => {
        connection.query("update account set username = ? where phone = ?", param, (err, data) => {
            //如果err为null则成功
            resolve(data)
        })
    })
}

//删除
const deleteAccount = (param) => {
    return new Promise((resolve, reject) => {
        connection.query("delete from account where id = ?", param, (err, data) => {
            resolve(data)
        })
    })
}
//导出方法，在需要使用到的模块中导入
module.exports = {
    getCars,
    addCar
    //   insertAccount,
    //   updateAccount,
    //   deleteAccount
}