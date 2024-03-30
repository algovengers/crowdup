const Startup = require('../model/Startup')

const getStartupList = async(req,res) =>{
    try {
        const page = parseInt(req?.params?.page) || 1;
        const pageSize = 10;
    
        const filters = req?.query || {};

        const queryFilter = {

        }
        for(let i in filters){
            if(filters[i]!=='undefined' && filters[i]!==''){
                queryFilter[i] = filters[i]
              }
        }

        const data = await Startup.find(queryFilter).lean()
        res.status(200).json({'data': data})
    } catch (error) {
        res.status(500).json({'message':'Error'})
    }
}


const getStartup = async(req,res) =>{
    try {
        const id = req?.params.id
        if(!id){
            res.status(404).json({'message':'invalid id'})
            return
        }
        const data = await Startup.findbyId(id).lean()
        res.status(200).json({'data': data})

    } catch (error) {
        res.status(500).json({'message':'Error'})
        
    }
}

module.exports = {getStartupList,getStartup}