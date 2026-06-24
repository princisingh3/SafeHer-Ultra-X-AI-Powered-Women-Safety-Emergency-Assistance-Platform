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
    } catch {
      return [];
    }
  }

  function saveContacts(contacts) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(contacts));
  }

  function addContact() {
    const name = prompt("Enter contact name:");
    if (!name || !name.trim()) return;

    const phone = prompt("Enter phone number:");
    if (!phone || !phone.trim()) return;

    const contacts = getContacts();

    contacts.push({
      id: Date.now(),
      name: name.trim(),
      phone: phone.trim()
    });

    saveContacts(contacts);
    alert("✅ Contact added successfully.");
  }

  function viewContacts() {
    const contacts = getContacts();

    if (contacts.length === 0) {
      alert("No emergency contacts saved.");
      return;
    }

    let text = "📞 Emergency Contacts\n\n";

    contacts.forEach((contact, index) => {
      text += `${index + 1}. ${contact.name}\n📱 ${contact.phone}\n\n`;
    });

    alert(text);
  }

  function deleteContact() {
    const contacts = getContacts();

    if (contacts.length === 0) {
      alert("No contacts available.");
      return;
    }

    let text = "Select contact number to delete:\n\n";

    contacts.forEach((contact, index) => {
      text += `${index + 1}. ${contact.name}\n`;
    });

    const choice = parseInt(prompt(text), 10);

    if (
      Number.isNaN(choice) ||
      choice < 1 ||
      choice > contacts.length
    ) {
      return;
    }

    contacts.splice(choice - 1, 1);
    saveContacts(contacts);

    alert("🗑️ Contact deleted successfully.");
  }

  function openContactsMenu() {
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
        break;
    }
  }

  function init() {
    const button = document.getElementById("contactsBtn");

    if (!button) return;

    button.addEventListener("click", openContactsMenu);
  }

  document.addEventListener("DOMContentLoaded", init);
})();
