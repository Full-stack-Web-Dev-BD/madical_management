const express=require('express')
const mongose=require('mongoose')
const PORT=process.env.PORT||5000
const app=express()
const cors=require('cors')


app.use(cors())
const bodyParser=require('body-parser')
const morgan=require('morgan')




app.use(morgan('dev'))
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())



// use all route 
app.use(require('./routes/adminRouter'))
app.use(require('./routes/staffRouter'))


app.listen(PORT,()=>{
    console.log('Server started on port ',PORT)
    mongose.connect('mongodb://localhost/EMR-System',{useFindAndModify:true,useUnifiedTopology:true,useNewUrlParser:true}, err=>{
        if(err){
            console.log('Database connection failed !! ')
        }
        console.log("MongoDB connected !")
    })
})


