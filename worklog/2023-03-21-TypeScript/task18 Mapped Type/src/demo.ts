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
    email: string;
}

// interface Query {
//     sort?: 'asc' | 'desc';
//     matches(val): boolean; // <- any!!
// }
// Re write in a generic way
interface Query<TProp> {
    sort?: 'asc' | 'desc';
    matches(val: TProp): boolean;
}

// type ContactQuery = Partial<Record<keyof Contact, Query>>;

// It duplicates the record syntax. All as for Contact and all members are optional
// Why it is better - it looks more complex, but also more complex definitions are easier to read
// type ContactQuery = {
//     [TProp in keyof Contact]?: Query
// }
type ContactQuery = {
    [TProp in keyof Contact]?: Query<Contact[TProp]>
}

function searchContacts(contacts: Contact[], query: ContactQuery) {
    return contacts.filter(contact => {
        for (const property of Object.keys(contact) as (keyof Contact)[]) {
            // get the query object for this property
            // const propertyQuery = query[property];
            const propertyQuery = query[property] as Query<Contact[keyof Contact]>;
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
    }
);