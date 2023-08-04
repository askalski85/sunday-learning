// Define a new Type
interface Contact {
    id: number;
    name: string;
}

interface UserContact {
    id: number;
    name: string;
    username: string;
}

function cloneOld(source: Contact) : Contact{
    return Object.apply({}, source);
}

// Generic type is a meta type represent any other type you would like to substitute
const a: Contact = {id:123, name: "Omer Romer"};
const b = clone(a)

// Above clone function is not at all specific to the Contact object. It actually could accept any type of object,
// and this is where generic begin
// 1. Define a generic type
function clone<T>(source: T) : T {
    return Object.apply({}, source);
}

// Lets check other object type. Variable without explicitly defining a type.
// Truescript properly resolves return types
const dateRange = { startDate: Date.now(), endDate: Date.now() }
const dateRaneCopy = clone(dateRange)

// More generic types? Why not
function cloneMore<T1, T2>(source: T1) : T2 {
    return Object.apply({}, source);
}
const c = cloneMore<Contact, Contact>(a)

// This might not work as expected
const d = cloneMore<Contact, Date>(a)

// How to make sure both generic ttypes are same?
function cloneMore2<T1, T2 extends T1>(source: T1) : T2 {
    return Object.apply({}, source);
}

// There is no direct relation between Contact and UserContact, but it is ok
const e = cloneMore2<Contact, UserContact>(a)

// Generics can be applied to classes and interfaces too
interface UserContact2<TExternalId> {
    id: number;
    name: string;
    username: string;
    externalId: TExternalId;
    // loadExternalId(): Task<TExternalId>; // Undefined but it is just an example
}
