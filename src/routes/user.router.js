const express = require('express');
const userRouter = express.Router();
userRouter.get('/usertest', (req, res) => {
    res.sendStatus(200);
    console.log("you hit usertest api");
});

module.exports = userRouter;