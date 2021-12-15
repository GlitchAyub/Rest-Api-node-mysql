const express =require('express');
const router =express.Router();
const postController = require('../controllers/postControllers')

// @route GET && POST /post/

router.route('/').get(postController.getAllPost).post(postController.createNewPost)

router.route('/:id').get(postController.getPostById)

module.exports=router;