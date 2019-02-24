const express = require('express');
const router = express.Router();
const userContoller =  require('../controller/user');
router.get('/', userContoller.getIndexPage);
router.get('/userForm', userContoller.getUserForm);
router.post('/userForm', userContoller.postUserForm);
router.get('/user-detail/:userId', userContoller.getUserDetails);
router.post('/edit-user', userContoller.postEditUser);
router.post('/edit-user/:userId', userContoller.editUser);
router.post('/delete-user/:userId', userContoller.deleteUser);

exports.router = router;