const express = require("express")
const mongoose = require("mongoose")
const auth = require("../middleware/auth")
const UserMessage = mongoose.model("UserMessage")
const Message = mongoose.model("Messages")
const User = mongoose.model("User")
const router = express.Router()

router.use(auth)

router.get("/messages", (req, res) => {
    const response = []
    const uids = []
    UserMessage.findOne({ u_id: new mongoose.Types.ObjectId(req.user._id) }).then((m) => {
        const m_id = m.messages
     

        var loop1 = new Promise((resolve, reject) => {
            m_id.forEach((element, index) => {
                Message.findById(element.m_id).then((message) => {
                    response.push(message)
                    if (index === m_id.length - 1) {
                        index
                        resolve()
                    }
                }).catch((e) => {
                    reject()
                })

            })
        })

        var loop2 = new Promise((resolve, reject) => {
            return User.find({}).then((users) => {
                users.forEach((user , index) => {
                    uids.push(user._id)
                    if (index === users.length - 1) {
                        index
                        resolve()
                    }
                })
            }).catch((e) => {
                reject()
            })
        })

        loop1.then(() => {
            loop2.then(() => {

                res.send({
                    messages: response,
                    users: uids
                })

            }).catch(() => {
                res.send({
                    message: "Unknown error encountered",
                    error: true
                })
            })


        }).catch(() => {
            res.send({
                message: "Unknown error encountered",
                error: true
            })
        })

    }).catch((e) => {
        res.send({
            message: "Unknown error encountered",
            error: true
        })
    })
})

router.get("/users", (req, res) => {

    const users = null

    User.find().then((response) => {
        response.forEach((user) => {
            const u = {
                id: user._id,
                uname: user.UserNmae
            }
            users.push(u)
        })
    }).catch((e) => {
        res.send({
            message: "Unknown error encountered",
            error: true
        })
    })
})

router.post("/sendMessage", (req, res) => {
    const message = new Message({
        message: req.body.message,
        sender: {
            senderId: req.user._id,
            UserName: req.user.UserName
        }
    })
    message.save().then((m) => {
        req.body.taged.forEach((id) => {
            console.log(id)
            UserMessage.findOne({ u_id: new mongoose.Types.ObjectId(id) }).then((um) => {
                um.messages.push({ m_id: m._id })
                um.save().then(() => {
                    console.log("saved")
                }).catch((e) => {
                    console.log(e)
                    return res.send({
                        message: "Unknown error encountered",
                        error: true
                    })
                })
            }).catch((e) => {
                console.log(e)
                res.send({
                    message: "Unknown error encountered",
                    error: true
                })
            })
        })

        res.send({
            message: "sent",
            error: false
        })

    }).catch((e) => {
        console.log(e)
        res.send({
            message: "Unknown error encountered",
            error: true
        })
    })
})

module.exports = router