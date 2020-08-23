var express = require('express')
var app = express()
var Joi = require('joi')
var helmet = require('helmet')
var morgan = require('morgan')
var mongoose = require('mongoose')
var auth = require('./routes/auth')
var user = require('./routes/user')
var staff = require('./routes/staffData')
var patient = require('./routes/PatientData')
var asmara = require('./routes/asmara')
var hematology = require('./routes/hematology')
var BookAppoint = require('./routes/BookAppoint')
var chemistry = require('./routes/chemistry')
var hcvViral  = require('./routes/hcvViral')
var hblViral = require('./routes/hblViral')
var hivViral = require('./routes/hivViral')
var culture = require('./routes/culture')
const TBreport = require('./routes/tbReport')
var cors = require('cors')


mongoose.set('useNewUrlParser', true);
mongoose.connect('mongodb://localhost/Laboratory')
 .then(() => console.log('MongoDB connected !!'))
 .catch(err => console.error('Connection failed…'))
 var bodyParser = require('body-parser');
 app.use(bodyParser.json());
 mongoose.set('useUnifiedTopology', true);
 app.use(cors())
app.use(helmet())
app.use(express.json())
app.use(morgan('tiny'))
app.use('/api/labRequest/culture',culture)
app.use('/api/labRequest/TBReport',TBreport)
app.use('/api/BookAppoint',BookAppoint)
app.use('/api/labRequest/hivViral',hivViral)
app.use('/api/labRequest/hematology',hematology)
app.use('/api/labRequest/asmara',asmara)
app.use('/api/labRequest/hcvViral',hcvViral)
app.use('/api/Staff',staff)
app.use('/api/user',user)
app.use('/api/auth',auth)
app.use('/api/patient',patient)
app.use('/api/labRequest/hblViral',hblViral)
app.use('/api/labRequest/chemistry',chemistry)

const port = process.env.PORT || 4001



app.listen(port, ()=> console.log(`Listening on Port 4000 ${port}`))