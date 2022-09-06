const { raw } = require("express");
const fs = require("fs"); gi

const rawUserData = fs.readFileSync("data.json");
let userData = JSON.parse(rawUserData);
// console.log(userData);

module.exports.getAllUsers = (req, res, next) => {
    const { limit } = req.query;
    res.status(200).send({
        success: true,
        message: "Success",
        //limit userData
        data: userData.slice(0, limit)
    })
}

module.exports.getRandomUser = (req, res, next) => {
    const randomData = Math.floor(Math.random() * userData.length)

    res.status(200).send({
        success: true,
        message: "Success",
        data: userData[randomData]
    })
}

module.exports.saveAUser = (req, res, next) => {
    // console.log(req.body);
    const newData = req.body;
    userData.push(newData);
    //body validation
    if (!newData.name || !newData.gender || !newData.address || !newData.contact || !newData.photo_url) {
        res.status(500).send({
            success: false,
            message: "Please key in all the properties"
        })
    } else {
        res.status(200).send({
            success: true,
            message: "Success",
            data: userData
        })

    }
}

module.exports.updateUser = (req, res, next) => {
    const { id } = req.params;

    //id validation
    function getNumber(id) {
        const num = (/^\d+$/.test(id) && id.charAt(0) !== '0') ? Number(id) : false;
        console.log(num)
        return num;
    }

    if (typeof (getNumber(id)) !== "number") {
        res.status(500).send({
            success: false,
            message: "Please key in a number"
        })
    }
    else {
        const newUserData = userData.find(user => user.id === Number(id))
        newUserData.id = id;
        newUserData.gender = req.body.gender;
        newUserData.name = req.body.name;
        newUserData.contact = req.body.contact;
        newUserData.address = req.body.address;
        newUserData.photo_url = req.body.photo_url;
        // console.log(newUserData)
        res.status(200).send({
            success: true,
            message: "Success",
            data: newUserData
        })

    }
}

module.exports.updateBulkUser = (req, res, next) => {
    const array = req.body;
    // console.log(array);

    const newUserData = array.map(a => {
        if (!a.name || !a.gender || !a.address || !a.contact || !a.photo_url) {
            res.status(500).send({
                success: false,
                message: "Please key in all the properties"
            })
        }
        const singleUser = userData.find(user => user.id === Number(a.id))
        singleUser.id = a.id;
        singleUser.gender = a.gender;
        singleUser.name = a.name;
        singleUser.contact = a.contact;
        singleUser.address = a.address;
        singleUser.photo_url = a.photo_url;
        console.log(singleUser);
    })
    res.status(200).send({
        success: true,
        message: "Success",
        data: newUserData
    })
}

module.exports.deleteUser = (req, res, next) => {
    const { id } = req.params;

    //id validation
    function getNumber(id) {
        const num = (/^\d+$/.test(id) && id.charAt(0) !== '0') ? Number(id) : false;
        console.log(num)
        return num;
    }

    if (typeof (getNumber(id)) !== "number") {
        res.status(500).send({
            success: false,
            message: "Please key in a number"
        })
    }
    else {
        userData = userData.filter(user => user.id !== Number(id));
        res.status(200).send({
            success: true,
            message: "Success",
            data: userData
        })

    }

}