const express = require("express");
const {
  saveContact,
  getAllContacts,
} = require("../controller/contactController");

const router = express.Router();

//to get user from database
router.get("/get-contact", getAllContacts);

//api end point to save user to database
router.post("/save-contact", saveContact);

module.exports = router;
