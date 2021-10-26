const express = require('express')

const router = express.Router()
const CreateController = require('../controller/item_get')

router.get('/',CreateController.get_item)

module.exports =router