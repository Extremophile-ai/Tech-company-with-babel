"use strict";

var _express = _interopRequireDefault(require("express"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _cors = _interopRequireDefault(require("cors"));

var _controllers = require("./controllers");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var app = (0, _express["default"])();
app.use(_bodyParser["default"].json());
app.use(_bodyParser["default"].urlencoded({
  extended: true
}));
app.use((0, _cors["default"])());
app.get('/', function (req, res) {
  res.send('Top Tech companies in Nigeria!');
}); // GET ALL NIGERIAN TECH COMPANIES IN THE DB

app.get('/company', _controllers.getAllNgTechCompanies); // GET ONE TECH COMPANY

app.get('/company/:id', _controllers.getNgTechCompanyById); // CREATE NEW COMPANY AND ADD TO THE DB

app.post('/company/create', _controllers.createNewTechCompany); // UPDATE TECH COMPANY INFO

app.put('/company/:id', _controllers.updateTechCompanyInfo); // DELETE TECH COMPANY

app["delete"]('/company/:id', _controllers.deleteTechCompany);
app.listen(process.env.PORT || 3003, function () {
  console.log('Connected');
}); // app.listen(3003, ()=> { 
//     console.log('Server started!!') 
// });