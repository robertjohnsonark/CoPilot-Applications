import * as express from 'express'
import login from './services/login'
import rolePermission from './services/role'
import user from './services/users'
import token from './helpers/tokenHandler'
import * as bodyParser from 'body-parser';
import * as path from 'path';
import * as http from 'http';

var app = express();

let client = path.join(__dirname, '../client');
const router = express.Router();

//// This will help us to get the data from POST request
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/', express.static(client));

app.use((req, res, next) => {
  console.log("Token: ", req.get("token"));
  console.log("EmailId: ", req.get("emailId"));
  console.log("Reaching here..");
  res.header("Access-Control-Allow-Methods", "PUT");
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "emailId, App-Version, Authorization, GET, POST, PUT, OPTIONS, token, XSRF-TOKEN, Origin, x-ms-request-id, x-ms-request-root-id, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/api/get-role-permissions', (req, res) => {
  rolePermission.getRolePermission(req.get("emailId"), function (result) {
    if (res.status) {
      res.send({ status: true, roles: result.data[0], permissions: result.data[1], accessPermissions: result.data[2] });
    }
    else {
      res.send({ status: false, err: {} });
    }
  });
});

app.get('/api/get-roles', (req, res) => {
  user.getUsers(function (result) {    
    if (result.status) {
      var resl: any = [];
      for (var i = 0; i < result.data[0].length; i++) {
        var item = result.data[0][i];
        console.log("data: ", item);
        resl.push({
          id: item.userId,
          userName: item.name,
          fullName: item.fullname,
          jobTitle: item.jobtitle,
          phoneNumber: item.phone,
          email: item.emailId,
          roleName: item.roleName,
          roles: [item.roleName]
        });
      }

      res.send(resl);
    }
    else {
      res.send({ status: false, err: {} });
    }
  });
});

app.get('/api/get-users', (req, res) => {
  user.getUsers(function (result) {    
    if (result.status) {
      var resl: any = [];
      for (var i = 0; i < result.data[0].length; i++) {
        var item = result.data[0][i];
        console.log("data: ", item);
        resl.push({
          id: item.userId,
          userName: item.name,
          fullName: item.fullname,
          jobTitle: item.jobtitle,
          phoneNumber: item.phone,
          email: item.emailId,
          roleName: item.roleName,
          roles: [item.roleName]
        });
      }

      res.send(resl);
    }
    else {
      res.send({ status: false, err: {} });
    }
  });
});

app.get('/api/get-user', (req, res) => {
  console.log(req.body)
  user.getUser(req.get("emailId"), function (result) {
    //console.log("data: ", result.data[0][0]);
    if (result.status) {
      var resl: any = {
        id: result.data[0][0].id,
        userName: result.data[0][0].userName,
        fullName: result.data[0][0].fullname,
        jobTitle: result.data[0][0].jobTitle,
        phoneNumber: result.data[0][0].phone,
        email: result.data[0][0].email,
        roleName: result.data[0][0].roleName,
        roles: [result.data[0][0].roleName],
        status: true
      }

      //console.log(resl);
      res.send(resl);
    }
    else {
      res.send({ status: false, err: {} });
    }
  });
});

app.put('/api/get-users/:userId', (req, res) => {
  console.log("User ID: ", req.params.userId);
  console.log("Body: ", req.body);
  
  user.saveUser(req.params.userId, req.body, function (result) {
    if (res.status) {
      res.send({ status: true });
    }
    else {
      res.send({ status: false, err: {} });
    }
  });
});

/*
app.post('/api/save-user', (req, res) => {
  user.saveUser(req.body, function (result) {
    if (res.status) {
      res.send({ status: true, roles: result.data[0], permissions: result.data[1], accessPermissions: result.data[2] });
    }
    else {
      res.send({ status: false, err: {} });
    }
  });
});
*/

app.post('/api/save-role-permissions', (req, res) => {
  var rolePerm = req.body;
  rolePermission.saveRolePermission(rolePerm, function (result) {
    console.log("Result: ", result);
    if (res.status) {
      res.send({ status: true, permissions: result.data });
    }
    else {
      res.send({ status: false, err: {} });
    }
  });
});

app.post('/api/login', (req, res) => {
  console.log("Request is: ", req.body)

  login.validateLogin(req.body, function (result) {
    if (result.status) {
      let decodedIdToken: any = result.data[0][0];

      let permissions: any = [];
      for (var i = 0; i < result.data[1].length; i++) {
        permissions[i] = result.data[1][i].permission;
      }

      decodedIdToken.permission = permissions;
      var userToken = token.generateToken(decodedIdToken);
      var reslt: any = {
        access_token: userToken,
        refresh_token: userToken,
        expires_in: 3600,
        status: true,
        user: decodedIdToken
      }
      res.send(reslt);
    }
    else {
      res.status = 401;
      res.send({ status: false, error: result.error, result: {} });
    }
  });
});

//// Create Server and assign port to that
var server = http.createServer(app);
var port = process.env.PORT || 4000;
server.listen(port, () => {
    console.log('Express server running on *:' + port);
});
console.log("Server running at http://localhost:%d", port);