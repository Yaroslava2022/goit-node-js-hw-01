// const now = new Date()

// console.log(`Today is ${now.getFullYear()} year`)
import { listContacts, getContactById, addContact } from "./contacts.js";

const invokeAction = async({action, id, name, email, phone})=> {
    switch(action){
        case "list":
            const allContacts = await listContacts();
            return console.log(allContacts);
        case "getById":
            const oneContact = await getContactById(id);
            return console.log(oneContact);
        case "add":
            const newContact = await addContact({name, email, phone});
            return console.log(newContact);
        default:
                console.log("Unknown action")
    }
}
invokeAction({action: "list"});
// invokeAction({action: "getById", id: "rsKkOQUi80UsgVPCcLZZW"});
// invokeAction({action: "add", name: "Olga", email: "Olga@gmail.com", phone: "(323) 06-2688"});



