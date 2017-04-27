"use strict";
var Contact = (function () {
    function Contact(ContactID, FirstName, MiddleName, LastName) {
        this.ContactID = ContactID;
        this.FirstName = FirstName;
        this.MiddleName = MiddleName;
        this.LastName = LastName;
    }
    return Contact;
}());
exports.Contact = Contact;
