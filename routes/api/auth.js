const express = require("express");
const router = express.Router();
const ctrl = require("../../controllers/auth/index");
const {auth,upload}=require("../../middlewares")
router.post('/signup', ctrl.register);
router.post('/login', ctrl.login);
router.post('/googleLogin', ctrl.googleLogin);
router.get('/current', auth, ctrl.current);
router.post('/logout', auth, ctrl.logout);
router.patch('/', auth, ctrl.subscriptionUpdate);
router.get('/google', ctrl.googleAuth);
router.get('/google-redirect', ctrl.googleRedirect);




router.patch('/avatars',auth,upload.single("avatar"), ctrl.updateAvatar);
module.exports = router;