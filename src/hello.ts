class Person {
    name: string
    fullName: string
    constructor(public firstName: string, public lastName: string) {
        this.fullName = `${firstName} ${lastName}`
    }
}

interface Person {
    firstName: string
    lastName: string
}

function say(person : Person) {
    return `Hello ${person.fullName}`
}

var user = new Person("John", "Doe")

document.body.innerHTML = say(user)
