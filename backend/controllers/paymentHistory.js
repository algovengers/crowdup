const { Payment } = require("../model/Payment")
const { User } = require("../model/User")

async function getPaymetntHistory(req,res){
    try {  
        const {useruid} = req.body
        const user = await User.find({useruid})
        if(!user){
            return res.status(401).json({"error": "Invalid user id"})
        }
        let data;
        console.log(user)
        if(user.role === 'startup'){
            const id = user._id
            data = await Payment.find({startup : id})
        }else{
             data = await Payment.find({user:useruid})

        }
        res.status(200).json({"data": data})
    } catch (error) {
        res.status(500).json({"message":"Error"})
    }
}

async function getStartupHistory(){
    try {
        
    } catch (error) {
        
    }
}

module.exports = {getPaymetntHistory,getStartupHistory}