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

type AwesomeOld = Contact["id"]

// Accessing more complex type
type Awesome = Contact["address"]["postalCode"]

// No direct connection
interface ContactEventOld {
    contactId: number;
}

interface ContactEvent {
    contactId: Contact["id"];
}

interface ContactDeletedEvent extends ContactEvent { 
}

interface ContactStatusChangedEvent extends ContactEvent { 
    oldStatus: Contact["status"];
    newStatus: Contact["status"];
}

interface ContactEvents {
    deleted: ContactDeletedEvent;
    statusChanged: ContactStatusChangedEvent;
    // ... and so on
}

function getValue<T, U extends keyof T>(source: T, propertyName: U) {
    return source[propertyName];
}


// generic type T
// Type of the first paramether of the method
// Second param is a function accepts single parameter which is a key of the first parameter T
function handleEvent<T extends keyof ContactEvents>(
    eventName: T,
    handler: (evt: ContactEvents[T]) => void
){
    if (eventName === "statusChanged") {
        // handler({ contactId: 1} as ContactDeletedEvent)  // not correct
        handler({ contactId: 1, oldStatus: "active", newStatus: "inactive" }) // correct
    } 
}

handleEvent("statusChanged", evt => evt)