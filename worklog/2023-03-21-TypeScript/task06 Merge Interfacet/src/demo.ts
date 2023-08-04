// Define a new Type
interface Contact {
    id: number;
    name: string;
    birthDate: Date;
    otherOptional?: string;
}

interface Contact2 extends Address {
    id: number;
    name: string;
    birthDate: Date;
    otherOptional?: string;
}

interface Address {
    postalCode: string,
    line1: string,
    line2?: string,
    city: string,
    region: string,
}

let primaryContact: Contact

let primaryContact2: Contact = {
    // birthDate: "01-01-1999",
    birthDate: new Date("01-01-1999"),
    name: "Lola Lala",
    id: 123
}

let primaryContact3: Contact = {
    // birthDate: "01-01-1999",
    birthDate: new Date("01-01-1999"),
    name: "Lola Lala",
    id: 123,
    // otherOptional: 123  // not allowed inproper type for optional
}

// Merged type of both interfaces
let complexContact: Contact2 = {
    id: 12,
    name: "Zosia",
    birthDate: new Date("01-01-1991"),
    postalCode: "12345",
    city: "Berlin",
    region: "Berlin",
    line1: "Wirden 12"
}