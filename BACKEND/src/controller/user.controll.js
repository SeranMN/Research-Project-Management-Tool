const User = require('../Model/user.model');

const addUser = async (req, res) => {
    const user = new User(req.body);
    await user
        .save()
        .then((data) => res.status(200).send(data))
        .catch((err) => res.send(err));
    
};
const getUser = async (req, res) => {
    User.find()
        .then((data) => res.status(200).send(data))
        .catch((err) => res.send(err))
    
}
const getUserById = async (req, res) => {
    console.log(req.params.id)
    User.findOne({regNo:req.params.id})
        .then((data) => { res.status(200).send(data); console.log(data) })
        .catch((err) => res.send(err))
    
}
module.exports = {
    addUser,
    getUser,
    getUserById
}