type ContactName = string;

enum ContactStatusOld {
    Active = "active",
    Inactive = "inactive",
    New = "new"
}

// Alternative for enums is
type ContactStatus = "active" | "inactive" | "new"


interface ContactOld {
    id: number;
    name: ContactName;
    // Define an union - different possible types for variable
    birthDate?: Date | number | string;
    status?: ContactStatus;
}

// Create an alias type for the union type
type ContactBirthDate = Date | number | string;
interface Contact {
    id: number;
    name: ContactName;
    birthDate?: ContactBirthDate
    status?: ContactStatus;
}

interface Address {
    line1: string;
    line2: string;
    province: string;
    region: string;
    postalCode: string;
}

// Create a new interface using both interfaces
interface AddressableContactOld extends Contact, Address {}

// Or create a `new type` as a merge of both interfaces
type AddressableContact = Contact & Address

// === operator check type of object
function getBirthDate(contact: Contact) {
    if (typeof contact.birthDate === "number") {
        return new Date(contact.birthDate);
    }
    else if (typeof contact.birthDate === "string") {
        return Date.parse(contact.birthDate)
    }
    else {
        return contact.birthDate
    }
}

let primaryContact: Contact = {
    id: 12345,
    name: "Jamie Johnson",
    status: "new",
    // status: "ne" // will be marked as wrong as does not exist in type alias
}
