// const now = new Date()

// console.log(`Today is ${now.getFullYear()} year`)
const contacts = require("./contacts");

const invokeAction = async({action})=> {
    switch(action){
        case "list":
            const allContacts = await contacts.listContacts()
            return console.log(allContacts);
           
            default:
                console.log("Unknown action")
    }
}
invokeAction({action: "list"})


