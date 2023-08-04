// let x = { name: "Wruce Bayne" };
// x.id = 1234; // wrong
let x: any = { name: "Wruce Bayne" }; // any fixes everything, kind of scary
x.id = 1234;


let y: Record<string, string> = {name: "ola"}
// y.number = 1234 // not allowed number to string property

let z: Record<string, string | number> = {name: "ola"}
z.number = 1234
// Can be done same for boolean or other types

////////////////////

type ContactStatus = "active" | "inactive" | "new";

interface Address {
    street: string;
    province: string;
    postalCode: string;
}

interface Contact {
    id: number;
    name: string;
    status: ContactStatus;
    address: Address;
}

interface Query {
    sort?: 'asc' | 'desc';
    matches(val): boolean;
}

// function searchContacts(contacts: Contact[], query: Record<string, Query>) {
function searchContacts(contacts: Contact[], query: Record<keyof Contact , Query>) {
        return contacts.filter(contact => {
        for (const property of Object.keys(contact) as (keyof Contact)[]) {
            // get the query object for this property
            const propertyQuery = query[property];
            // check to see if it matches
            if (propertyQuery && propertyQuery.matches(contact[property])) {
                return true;
            }
        }

        return false;
    })
}

const filteredContacts = searchContacts(
    [/* contacts */],
    {
        id: { matches: (id) => id === 123 },
        name: { matches: (name) => name === "Carol Weaver" },
        phoneNumber: { matches: (name) => name === "Carol Weaver" }, // We fix this later
    }
);