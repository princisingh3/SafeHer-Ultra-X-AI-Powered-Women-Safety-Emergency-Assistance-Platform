// =====================================
// SafeHer Ultra X - Emergency Contacts
// File: js/contacts.js
// =====================================

(function () {
  "use strict";

  const STORAGE_KEY = "safeher_emergency_contacts";

  function loadContacts() {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : [];
  }

  function saveContacts(contacts) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(contacts));
  }

  function addContact() {
    const name = prompt("Enter contact name:");
    if (!name) return;

    const phone = prompt("Enter phone number:");
    if (!phone) return;

    const contacts = loadContacts();
    contacts.push({ name, phone });
    saveContacts(contacts);

    alert("✅ Emergency contact added successfully.");
  }

  function showContacts() {
    const contacts = loadContacts();

    if (contacts.length === 0) {
      alert(
        "No emergency contacts found.\n\nClick the button again and add your first contact."
      );
      return;
    }

    let message = "📞 Emergency Contacts\n\n";

    contacts.forEach((contact, index) => {
      message += `${index + 1}. ${contact.name}\n${contact.phone}\n\n`;
    });

    alert(message);
  }

  function initContacts() {
    const contactsBtn = document.getElementById("contactsBtn");

    if (!contactsBtn) return;

    contactsBtn.addEventListener("click", () => {
      const contacts = loadContacts();

      if (contacts.length === 0) {
        addContact();
      } else {
        const choice = confirm(
          "Press OK to view saved contacts.\nPress Cancel to add a new contact."
        );

        if (choice) {
          showContacts();
        } else {
          addContact();
        }
      }
    });
  }

  document.addEventListener("DOMContentLoaded", initContacts);
})();
