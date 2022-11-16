const findAll = async(req,res)=>{
    try {
        const result = await req.context.models.users.findAll()
        return res.send(result)
    } catch (error) {
        return res.status(404).send(error)
    }
}

const findOne = async(req, res) =>{
    try {
        const result  = await req.context.models.users.findOne({
            where : { user_id : req.params.id}
        })
        return res.send(result)
    } catch (error) {
        return res.status(404).send(error)
    }
}

const create = async(req,res) => {
    try {
        const result = await req.context.models.create({
            user_id : req.body.user_id,
            user_name : req.body.user_name,
            user_password : req.body.user_password,
            user_role : req.body.user_role,
            email : req.body.email
        })
        return res.send(result)
    } catch (error) {
        return res.status(404).send(error)
    }
}

const update = async(req,res) => {
    try {
        const result = await req.context.models.update({
            user_name : req.body.user_name,
            user_password : req.body.user_password,
            user_role : req.body.user_role,
            email : req.body.email
        },{
            returning : true, where : { user_id : req.params.id}
        })
        return res.send(result)
    } catch (error) {
        return res.status(404).send(error)
    }
}
const deleted = async(req,res) => {
    try {
        const result  = await req.context.models.destroy({
            where : { user_id : req.params.id}
        })
        return res.send('deleted '+result +' rows')

    } catch (error) {
        return res.status(404).send(error)
    }
}

export default {
    findAll,
    findOne,
    create,
    update,
    deleted
}