const express =  require('express');
const db = require('./configs/database');
const bodyParser = require('body-parser');
const upload = require('./middlewares/imgUplods');

const port = 9090;
const app = express();

app.set('view engine','ejs');
app.use(express.static('public'));
app.use('/uploads',express.static('uploads'))
app.use(bodyParser.urlencoded({extended:true}));

app.use('/',require('./routers/adminRouters'));
app.use('/',require('./routers/clientRouter'));

app.listen(port ,()=>{
 db();
  console.log("server start \nhttp://localhost:"+port);
})