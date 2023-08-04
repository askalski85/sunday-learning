// Define a new Type
interface Contact {
    id: number;
    name: string;
}

// Typescript automatically determines return type of the function
// return type Contact
function clone2(source: Contact) {
    return source
}
// Return type string
function clone3(source: Contact) {
    return "lala"
}

// Return type any - we don't wan't that
function clone4(source: Contact) {
    return Object.apply({}, source);
}

// Return type Contact - as declared
function clone(source: Contact) : Contact{
    return Object.apply({}, source);
}

const a: Contact = {id:123, name: "Omer Romer"};
const b = clone(a)

// Accept function as a parameter
function cloneFunction(source: Contact, func: (source: Contact) => Contact) : Contact {
    return Object.apply({}, source);
}

// Define method on the interface
interface Contact2 {
    id: number;
    name: string;
    // clone(): Contact2
    clone(name: string): Contact2
}
