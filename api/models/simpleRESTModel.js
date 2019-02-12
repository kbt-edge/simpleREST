'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var ContactSchema = new Schema({
  user_name: {
    type: String,
    default: "noone"
  },
  employee_number: {
	  type: Number,
	  default: 0
  },
  first_name: {
	  type: String,
	  default: "noone"
  },
  last_name: {
	  type: String,
	  default: "noone"
  },
  contact: {
	  type: String,
	  default: "noone"
  },
  phone: {
	  type: String,
	  default: "noone"
  },
  address1: {
	  type: String,
	  default: "noone"
  },
  address2: {
	  type: String,
	  default: "noone"
  },
  city: {
	  type: String,
	  default: "noone"
  },
  state: {
	  type: String,
	  default: "noone"
  },
  zipcode: {
	  type: String,
	  default: "noone"
  },
  country: {
	  type: String,
	  default: "noone"
  },
  last_touch_date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Contacts', ContactSchema);