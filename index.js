import { program } from "commander";
import { listContacts, getContactById, addContact, removeContact } from "./contacts.js";


program
.option('-a, --action <type>', 'choose action')
.option('-i, --id <type>', 'user id')
.option('-n, --name <type>', 'user name')
.option('-e, --email <type>', 'user email')
.option('-p, --phone <type>', 'user phone');

program.parse(process.argv);

const argv = program.opts();

const invokeAction = async({action, id, name, email, phone})=> {
    try {  
    switch(action) {
        case "list":
            const allContacts = await listContacts();
            return console.table(allContacts);
        case "get":
            const oneContact = await getContactById(id);
            return console.log(oneContact);
        case "add":
            const newContact = await addContact({name, email, phone});
            return console.log(newContact);
        case "remove":
            const deletedContact = await removeContact(id);
            return console.log(deletedContact);
        default:
            console.warn('\x1B[31m Unknown action type!');
    }
}
catch (error) {
    console.log(error.message);
    }
}


invokeAction(argv);




