const app=require('./app');
const db = require('./config/db')
const UserModel = require('./model/user.model')

const port=3000;

app.get('/',(req,res)=>{
    res.end('something')
});

app.listen(port,()=>{
    console.log('Server listening on port http://localhost:3000');
});