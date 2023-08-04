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

// Method decorator
function authorize(target: any, property: string, descriptor: PropertyDescriptor) {
    // descriptor.value = function () { // Option 1

    // }
    // return { // Option 2
    //     // make any changes here
    // } as PropertyDescriptor

    const wrapped = descriptor.value // Copy the original method
    descriptor.value = function() {  // Do your magic
        if (!currentUser.isAuthenticated()) {
            throw Error("User not authenticated")
        }
        // return wrapped.apply(this, arguments); // Run the original method
        // or wrap it in try catch
        try {
            return wrapped.apply(this, arguments); // Run the original method
        } catch (ex) {
            // some fancy logging here
            throw ex; // and re throw
        }
    }
}

@log
class ContactRepository {
    private contacts: Contact[] = [];

    @authorize
    getContactById(id: number): Contact | null {
        const contact = this.contacts.find(x => x.id === id);
        return contact;
    }

    @authorize
    save(contact: Contact): void {
        const existing = this.getContactById(contact.id);

        if (existing) {
            Object.assign(existing, contact);
        } else {
            this.contacts.push(contact);
        }
    }
}