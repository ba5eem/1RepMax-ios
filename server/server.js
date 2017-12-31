const express         = require('express');
const bodyParser      = require('body-parser');
const path            = require('path');
const db              = require('./models');
const {user}      = db;
const PORT            = process.env.PORT || 3000;
const app             = express();

//need this for deployment
//app.use(express.static(path.join(__dirname, '..', 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));


//Routes


app.get('/', ( req, res ) =>{
  res.json('Smoke Test');
});

app.get('/users', (req, res) => {
  user.findAll().then((data) => {
    console.log(data);
  })
  res.json('users');
})

app.post('/users', (req,res) => {
  let username = req.body.username;
  let password = req.body.password;
  let local = {};
  user.findAll({raw:true},{where: {username: username, password: password}})
  .then((data) => {
    console.log(data[0].username);
      if(data.length > 0){
        res.send({'success': true, 'user': data[0].username})
      }else{
        res.send({'success': false, 'message': "User not found"})
      }
  }).catch((err) => {
      local.success = false,
      local.message = "We are experiencing connectivity issues at this time"
      res.send(local);
  })
})




const server = app.listen(PORT,() => {
  db.sequelize.sync( { force: false } );
  console.log(`Server connected on PORT: ${PORT}`);
});

