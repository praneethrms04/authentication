const getAllUseers = (req,res) =>{
    res.status(200).send({
        message : "All users"
    })
}

const getUserById = (req,res) =>{

    res.status(200).send({
        message : `get all user by id ${req.params.id}`
    })
}

module.exports = {getAllUseers, getUserById}