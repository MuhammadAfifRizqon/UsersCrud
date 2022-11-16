import 'dotenv/config'
import express  from 'express'
import cors from 'cors'
import compression from 'compression'
import cookieParser from 'cookie-parser'
import helmet from 'helmet'
import models,{sequelize} from './models/init-models'
import routes from './routes/indexRoute'

const port = process.env.PORT || 3000
const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors())
app.use(compression())
app.use(cookieParser())
app.use(helmet())
app.use(async(req,res,next)=> {
    req.context = {models}
    next()
})

app.use('/users',routes.UserRoute)


const dbDropDatabase = false

sequelize.sync({force:dbDropDatabase}).then(async()=> {
    if(dbDropDatabase){
    console.log('Do Not Drop Database')
    }
    app.listen(port, ()=> console.log('server listen on '+port))
})

export default app