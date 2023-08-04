type ContactName = string;
type ContactStatus = "active" | "inactive" | "new"
type ContactBirthDate = Date | number | string

interface Contact  {
    id: number;
    name: ContactName;
    birthDate?: ContactBirthDate;
    status?: ContactStatus;
    email?: string;
}

let primaryContact: Contact = {
    id: 12345,
    name: "Jamie Johnson",
    status: "active"
}

// Can contain only values matching fields of Contact interface, like id, name...
type ContactFields = keyof Contact

const field : ContactFields = "name"
// const field2 : ContactFields = "arek" // does not work

function getValueOld(source, porpertyName) {
    return source[porpertyName]
}

const valueOld = getValueOld(primaryContact, "sttatue") // not guarded

function getValue(source, porpertyName : keyof Contact) {
    return source[porpertyName]
}

// const value = getValue(primaryContact, "sttatue") // marked as wrong as key does not exists
const value = getValue(primaryContact, "status")

// Use generics

function getGenericValue<T>(source: T, propertyName: keyof T) {
    return source[propertyName]
}

// Use inline object without defined type
// const aaa = getGenericValue({min: 1, max: 2}, "ma") // marked as wrong as ma does not exists
const aaa = getGenericValue({min: 1, max: 2}, "max")

function getGenericValueBetter<T, U extends keyof T>(source: T, propertyName: U) {
    return source[propertyName]
}
