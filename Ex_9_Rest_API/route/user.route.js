const {getAllusers, createUser, updateUser,deleteUser} = require("../controller/user.controller")

const router = require("express").Router()



router.get('/',getAllusers)

router.post('/', createUser)
router.put('/:id', updateUser)
router.delete('/:id',deleteUser)

module.exports = router