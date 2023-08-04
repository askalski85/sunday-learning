// Define a new Type
interface Contact {
    id: number;
    name: ContactName;
    birthDate: Date;
    otherOptional?: string;
}


let primaryContact: Contact = {
    birthDate: new Date("01-01-1999"),
    name: "Lola Lala",
    id: 123
}

// Define a type alias for an existing type
type ContactName = string
// Now I can use this type everythere
