const express = require('express')

const router = express.Router()
const DeleteController = require('../controller/item_delete')

router.delete('/:id',DeleteController.delete_item)

module.exports =router