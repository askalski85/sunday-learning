// Define a new Type
interface Contact {
    id: number;
    name: ContactName;
    birthDate: Date;
    otherOptional?: string;
    status: string;
}


let primaryContact: Contact = {
    birthDate: new Date("01-01-1999"),
    name: "Lola Lala",
    id: 123,
    status: "active"
}

let primaryContact2: Contact = {
    birthDate: new Date("01-01-1999"),
    name: "Lola Lala",
    id: 123,
    status: "1nactive" // type 1 -> I
}

// Define a type alias for an existing type
type ContactName = string
// Now I can use this type everythere

enum ContactStatus {
    Active,
    Inactive,
    New
}

interface Contact2 {
    id: number;
    name: ContactName;
    birthDate: Date;
    otherOptional?: string;
    status: ContactStatus;
}

let otherContact: Contact2 = {
    birthDate: new Date("01-01-1999"),
    name: "Lola Lala",
    id: 123,
    status: ContactStatus.Active
}

////////////////////////////////

enum ContactStatus3 {
    Active = "active",
    Inactive = "inactive",
    New = "new"
}

interface Contact3 {
    id: number;
    name: ContactName;
    birthDate: Date;
    otherOptional?: string;
    status: ContactStatus;
}

let otherContact3: Contact3 = {
    birthDate: new Date("01-01-1999"),
    name: "Lola Lala",
    id: 123,
    status: ContactStatus.Active
}
