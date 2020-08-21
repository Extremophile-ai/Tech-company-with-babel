"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deleteTechCompany = exports.updateTechCompanyInfo = exports.createNewTechCompany = exports.getNgTechCompanyById = exports.getAllNgTechCompanies = void 0;

var _db = _interopRequireDefault(require("./db/db"));

var _index = require("./query/index");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var getAllNgTechCompanies = function getAllNgTechCompanies(req, res) {
  _db["default"].query(_index.getAll, function (err, results) {
    res.status(200).json(results.rows);
  });
};

exports.getAllNgTechCompanies = getAllNgTechCompanies;

var getNgTechCompanyById = function getNgTechCompanyById(req, res) {
  var id = parseInt(req.params.id);

  _db["default"].query(_index.getOne, [id], function (err, results) {
    res.status(200).json(results.rows);

    if (err) {
      throw err;
    }
  });
};

exports.getNgTechCompanyById = getNgTechCompanyById;

var createNewTechCompany = function createNewTechCompany(req, res) {
  var _req$body = req.body,
      name = _req$body.name,
      location = _req$body.location,
      name_of_ceo = _req$body.name_of_ceo,
      year_founded = _req$body.year_founded,
      email = _req$body.email,
      website = _req$body.website;
  var Values = [name, location, name_of_ceo, year_founded, website, email];

  _db["default"].query(_index.createNewText, Values, function (err, results) {
    if (err) {
      console.log(err.stack);
    } else {
      res.status(200).json(results.rows[0]);
    }
  });
};

exports.createNewTechCompany = createNewTechCompany;

var updateTechCompanyInfo = function updateTechCompanyInfo(req, res) {
  var id = parseInt(req.params.id);
  var _req$body2 = req.body,
      name = _req$body2.name,
      location = _req$body2.location,
      name_of_ceo = _req$body2.name_of_ceo,
      year_founded = _req$body2.year_founded,
      email = _req$body2.email,
      website = _req$body2.website;
  var Values = [name, location, name_of_ceo, year_founded, website, email];

  _db["default"].query(_index.updateOne, Values, function (err, res) {
    if (err) {
      throw err;
    } else {
      res.status(200).send("Company Info modified with ID: ".concat(id));
    }
  });
};

exports.updateTechCompanyInfo = updateTechCompanyInfo;

var deleteTechCompany = function deleteTechCompany(req, res) {
  var id = parseInt(req.params.id);

  _db["default"].query(_index.deleteQuery, [id], function (error, results) {
    if (error) {
      throw error;
    }

    res.status(200).send("Company deleted with ID: ".concat(id));
  });
};

exports.deleteTechCompany = deleteTechCompany;