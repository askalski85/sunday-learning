interface Contact {
    id: number;
}

const currentUser = {
    id: 1234,
    roles: ["ContactEditor"],
    isAuthenticated(): boolean {
        return true
    },
    isInRole(role: string): boolean {
        return this.roles.contains(role);
    }
}

function authorize(role: string) {
    return function authorizeDecorator(target: any, property: string, descriptor: PropertyDescriptor) {
        const wrapped = descriptor.value

        descriptor.value = function () {
            if (!currentUser.isAuthenticated()) {
                throw Error("User is not authenticated");
            }
            if (!currentUser.isInRole(role)) {
                throw Error(`User not in role ${role}`);
            }

            return wrapped.apply(this, arguments);
        }
    }
}

// Freeze class (Actually the class constructor)
// function freeze(target: Function) {
// }

// Keeping that in mind lets do the following
function freeze(constructor: Function){
    Object.freeze(constructor)
    Object.freeze(constructor.prototype)
}
// This way we can modify class constructor. But that is not something we usually do. We rather
// wan't to modify objects to add new properties or so

// function singleton(constructor: any) {
function singleton<T extends { new(...args: any[]): {} }>(constructor: T) {
        return class Singleton extends constructor { // Return a new class dynamically
        static _instance = null;

        // pass all args to the original constructor
        constructor(...args) {
            super(...args)
            if (Singleton._instance) {
                throw Error("Duplicate instance")
            }
            Singleton._instance = this
        }
    }
}

@freeze
@singleton
class ContactRepository {
    private contacts: Contact[] = [];

    @authorize("ContactViewer")
    getContactById(id: number): Contact | null {
        const contact = this.contacts.find(x => x.id === id);
        return contact;
    }

    @authorize("ContactEditor")
    save(contact: Contact): void {
        const existing = this.getContactById(contact.id);

        if (existing) {
            Object.assign(existing, contact);
        } else {
            this.contacts.push(contact);
        }
    }
}