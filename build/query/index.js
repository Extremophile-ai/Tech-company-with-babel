"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deleteQuery = exports.updateOne = exports.createNewText = exports.getOne = exports.getAll = void 0;
var getAll = 'SELECT * FROM ng_tech_companies ORDER BY id ASC';
exports.getAll = getAll;
var getOne = 'SELECT * FROM ng_tech_companies WHERE id = $1';
exports.getOne = getOne;
var createNewText = 'INSERT INTO ng_tech_companies (name, location, name_of_ceo, year_founded, website, email ) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *';
exports.createNewText = createNewText;
var updateOne = "UPDATE ng_tech_companies SET name = $1, location = $2, name_of_ceo = $3, year_founded = $4, email = $5, website = $6 WHERE id = $1";
exports.updateOne = updateOne;
var deleteQuery = 'DELETE FROM ng_tech_companies WHERE id = $1';
exports.deleteQuery = deleteQuery;