const express = require('express')

const router = express.Router()
const CreateController = require('../controller/item_post')

router.post('/',CreateController.item_order)

module.exports =router