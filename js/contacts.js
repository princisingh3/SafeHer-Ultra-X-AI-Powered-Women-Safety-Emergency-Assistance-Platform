// =====================================
// SafeHer Ultra X - Emergency Contacts
// File: js/contacts.js
// =====================================

(function () {
  "use strict";

  const STORAGE_KEY = "safeher_contacts";

  function getContacts() {
    try {
      return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
    } catch (e) {
      return [];
    }
  }

  function saveContacts(data) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  }

  function addContact() {
    const name = prompt("Enter Contact Name:");

    if (name === null || name.trim() === "") {
      alert("Contact name is required.");
      return;
    }

    const phone = prompt("Enter Phone Number:");

    if (phone === null || phone.trim() === "") {
      alert("Phone number is required.");
      return;
    }

    const contacts = getContacts();

    const exists = contacts.find(c => c.phone === phone.trim());

    if (exists) {
      alert("This phone number already exists.");
      return;
    }

    contacts.push({
      id: Date.now(),
      name: name.trim(),
      phone: phone.trim()
    });

    saveContacts(contacts);

    alert("✅ Contact Added Successfully");
  }

  function viewContacts() {
    const contacts = getContacts();

    if (contacts.length === 0) {
      alert("No Emergency Contacts Found.");
      return;
    }

    let message = "📞 Emergency Contacts\n\n";

    contacts.forEach((c, i) => {
      message += `${i + 1}. ${c.name}\n📱 ${c.phone}\n\n`;
    });

    alert(message);
  }

  function deleteContact() {

    const contacts = getContacts();

    if (contacts.length === 0) {
      alert("No Contacts Available.");
      return;
    }

    let list = "Enter Contact Number To Delete\n\n";

    contacts.forEach((c, i) => {
      list += `${i + 1}. ${c.name}\n`;
    });

    const index = Number(prompt(list));

    if (
      !Number.isInteger(index) ||
      index < 1 ||
      index > contacts.length
    ) {
      alert("Invalid Selection.");
      return;
    }

    contacts.splice(index - 1, 1);

    saveContacts(contacts);

    alert("🗑 Contact Deleted Successfully");
  }

  function openMenu() {

    alert("Contacts Module Loaded ✅");

    const option = prompt(
      "Emergency Contacts\n\n" +
      "1 - Add Contact\n" +
      "2 - View Contacts\n" +
      "3 - Delete Contact"
    );

    switch (option) {

      case "1":
        addContact();
        break;

      case "2":
        viewContacts();
        break;

      case "3":
        deleteContact();
        break;

      default:
        alert("Cancelled");
    }
  }

  function init() {

    const btn = document.getElementById("contactsBtn");

    if (!btn) {
      console.error("contactsBtn not found");
      return;
    }

    btn.addEventListener("click", openMenu);

    console.log("Emergency Contacts Initialized");
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }

})();
