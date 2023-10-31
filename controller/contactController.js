const Contact = require("../model/contactModel.js"); // Import the contact model

// Controller function to save a contact form submission to the database
async function saveContact(req, res) {
  try {
    const { name, email, phone, message } = req.body;
    console.log(name, email, phone, message);
    const newContact = new Contact({
      name,
      email,
      phone,
      message,
    });

    // Save the contact form submission to the database
    const savedContact = await newContact.save();

    return res.status(201).send({
      message: "Contact saved",
      success: true,
      contact: savedContact,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).send({
      message: "Failed to save contact.",
      success: false,
      error,
    });
  }
}

// Controller function to retrieve all users from the database
async function getAllContacts(req, res) {
  try {
    const contacts = await Contact.find({});
    return res.status(200).send({
      message: "All Contacts",
      success: true,
      contacts,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).send({
      message: "Failed to get contacts.",
      success: false,
      error,
    });
  }
}

module.exports = { saveContact, getAllContacts };
