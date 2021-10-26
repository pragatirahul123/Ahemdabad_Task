const express = require('express')

const router = express.Router()
const UpdateController = require('../controller/item_put')

router.put('/:id',UpdateController.update_item)

module.exports =router
